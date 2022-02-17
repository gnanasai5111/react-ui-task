
import './App.css';
import Header from './components/header/Header';
import Leftbar from './components/leftbar/Leftbar';
import Rightbar from './components/rightbar/Rightbar';
import Main from './components/main/Main';

function App() {
  return (
    <div className="App">
    <Header />
    <div className='home-page'>
    <Leftbar />
      <Main />
      <Rightbar />
    </div>
    </div>
  );
}

export default App;
