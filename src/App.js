
import './App.css';
import BulkVideo from './aibulkvideo/BulkVideo';
import AiPromoVideo from './aipromovideo/AiPromoVideo';
import Homepage from './homepage/Homepage';
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/generate-bulk" element={<BulkVideo />} />
        <Route exact path="/promo-bulk" element={<AiPromoVideo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
