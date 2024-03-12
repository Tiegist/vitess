
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './component/Projects';
import Navbar from './component/navbar';
import About from './component/About';
import Home from './component/Home';

import './portfolio.css';
import './App.css';
function App() {
  return (
//       <div>
// <Portfolio />
//        </div>
<Router>
  <Navbar />
  <Routes>

    <Route  path="/" element={<Home />} />
    <Route  path="/component/About" element={<About />} />
    <Route path="/component/Projects" element={<Projects />} />

  </Routes>
</Router>
  );
}

export default App;



// import React from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Projects from './component/Projects';
// // import Navbar from './component/navbar';
// // import About from './component/About';
// // import Home from './components/Home2';

// // import './portfolio.css';
// import './App.css';
// import Home2 from './components/Home';
// function App() {
 

//   return (
// < Home2 />

//   );
// }

// export default App;
