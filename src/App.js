import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { Layout } from './components/layouts';
import { ConnectProvider } from './context/contexts';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <ConnectProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout/>}>
              <Route path="/" element={<HomePage/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </ConnectProvider>
    </div>
  );
}

export default App;
