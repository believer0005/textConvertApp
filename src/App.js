import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';

function App() {
  return (
    <>

      <div className='container'>
        <Navbar title="Believer0005" />
      </div>

      <div className="container my-3">
        <TextFrom heading="Enter Your Text " />
        
      </div>

    </>
  );
}

export default App;
