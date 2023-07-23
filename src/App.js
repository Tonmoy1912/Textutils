// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Routes,//instead of Switch
  Route,
  Link
} from "react-router-dom";

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
// ]);


function App() {
  return (
    <>
    
    <Router>
      <Navbar title="Textutils"/>
      
      <Routes>
          <Route exact path="/about" element={<About />}/>
        
          <Route exact path="/" element={
            <div className="container my-3">
            <TextForm heading="Enter the text to analize"/>
          </div>
          }/>
            
      </Routes>
    </Router>

    {/* <RouterProvider router={router} /> */}

    </>
  );
}

export default App;
