import './App.css';
import 'react-bootstrap/Button'
import TopBar from './components/TopBar';
import Background from './components/Background';
import StoreListings from './components/StoreListings';


function App() {
  return (
    <div className="App">
     <TopBar />
     <Background />
     <StoreListings />
    </div>
  );
}

export default App;
