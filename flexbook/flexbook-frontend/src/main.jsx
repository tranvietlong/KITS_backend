import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/home.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Router>
  <Routes>
    <Route exact path="/"  element={<App />}  />
    <Route path="/home" element={<Home />}  />
  </Routes>
</Router>
)
