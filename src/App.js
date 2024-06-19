
import './App.css';
import BulkVideo from './aibulkvideo/BulkVideo';
import AiPromoVideo from './aipromovideo/AiPromoVideo';
import Homepage from './homepage/Homepage';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import VideMemeGenerator from './vidememgenerator/VideMemeGenerator';
import CorporateVideoGenerator from './corporate/CorporateVideoGenerator';
import ScriptVideoGenerator from './scriptvideo/ScriptVideoGenerator';
import SocialMediaGenerator from './socialmedia/SocialMediaGenerator';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        {/* <Route exact path="/generate-bulk" element={<BulkVideo />} />
        <Route exact path="/promo-bulk" element={<AiPromoVideo />} />
        <Route exact path="/video-meme" element={<VideMemeGenerator />} />
        <Route
          exact
          path="/corporate-video"
          element={<CorporateVideoGenerator />}
        />
        <Route exact path="/script-video" element={<ScriptVideoGenerator />} />
        <Route exact path="/social-media" element={<SocialMediaGenerator />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
