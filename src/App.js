// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="Textutils"/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analize"/>
      </div>
    </>
  );
}

export default App;
