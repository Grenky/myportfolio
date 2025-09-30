
import './App.css';
import './styles/global.scss'
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO/SEO';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <HelmetProvider>
    <div className="App">
      <BrowserRouter>
        <SEO />
        <AppRoutes />
      </BrowserRouter>
    </div>
    </HelmetProvider>
  );
}

export default App;
