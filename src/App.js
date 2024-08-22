
import './App.css';
import React,{useEffect} from 'react'
import BulkVideo from './aibulkvideo/BulkVideo';
import AiPromoVideo from './aipromovideo/AiPromoVideo';
import Homepage from './homepage/Homepage';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import VideMemeGenerator from './vidememgenerator/VideMemeGenerator';
import CorporateVideoGenerator from './corporate/CorporateVideoGenerator';
import ScriptVideoGenerator from './scriptvideo/ScriptVideoGenerator';
import SocialMediaGenerator from './socialmedia/SocialMediaGenerator';
import Login from './login/Login';
import Main from './audiopromptgenertaor/Main';
import SignUp from './signup/SignUp';
import ForgetPass from './login/ForgetPass';
import NewPassword from './login/NewPassword';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import Cookies from "universal-cookie";
import DefaultLayout from './userdashboard/layout/DefaultLayout';
import DefaultClientLayout from './clientdashboard/DefaultLayout/DefaultClientLayout';
const PrivateRoute = ({ children }) => {
  const cookie = new Cookies();
  const navigate = useNavigate();
  useEffect(() => {
    if (!cookie.get("AccessToken")) {
      navigate("/");
    }
  }, [navigate]);
  return children;
};

const PublicRoute = ({ children }) => {
  const cookie = new Cookies();
  const navigate = useNavigate();
  useEffect(() => {
    if (cookie.get("AccessToken")) {
      navigate("/dashboard");
    }
  }, [navigate]);
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        limit={1}
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        type={"type"}
      />
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />
        <Route
          path="/new-password"
          element={
            <PublicRoute>
              <NewPassword />
            </PublicRoute>
          }
        />
        <Route
          path="/forget-password"
          element={
            <PublicRoute>
              <ForgetPass />
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <PublicRoute>
              <Homepage />
            </PublicRoute>
          }
        />
        
        <Route
          exact
          path="*"
          element={
            <PrivateRoute>
              <DefaultClientLayout />
            </PrivateRoute>
          }
        />

     
       
        <Route exact path="/generate-bulk" element={<BulkVideo />} />
        <Route exact path="/promo-bulk" element={<AiPromoVideo />} />
        <Route exact path="/video-meme" element={<VideMemeGenerator />} /> 
        <Route
          exact
          path="/corporate-video"
          element={<CorporateVideoGenerator />}
        />

        <Route exact path="/script-video" element={<ScriptVideoGenerator />} />
        <Route exact path="/social-media" element={<SocialMediaGenerator />} />
        <Route exact path="/audio-video" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
