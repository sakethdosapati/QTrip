import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import BNest from './components/Webpages/Nestedpages/Bengalurunest.jsx';
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);




















// import NavF from './components/Nav/Nav.jsx'
// import Home from './components/Home/Home.jsx';
// import Footer from './components/Footer/Footer.jsx'
// import data from './db.js';
// import Cards from './components/Cards/Cards.jsx';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Bengaluru from './components/Webpages/Bengaluru.jsx';
// import Goa from './components/Webpages/Goa.jsx';
// import Kolkata from './components/Webpages/Kolkata.jsx';
// let root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <>
//             <Router>
//         <NavF/>
//         <Home/>
//         <div style={{width:"1320px" ,height:"965px",flexWrap:"wrap",display:"flex",justifyContent:"space-around" ,marginTop:"300px",marginLeft:"100px"}}>
//             {data.map(x=>{
//                 return( <Cards src = {x.src} alt ={x.alt} h4={x.h4} p={x.p} link={x.link}/>)
//             })}
//         </div>
//         <Footer/>
//         {/* <App/> */}
//         <Routes>
//             <Route path="/kolkata" element={<Kolkata />}/>
//             <Route path="/bengaluru" element={<Bengaluru />} />
//             <Route path="/goa" element={<Goa />} />
//         </Routes>
//         </Router>
        

//     </>
// )
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';  // Import App component

// Render the App component to the DOM