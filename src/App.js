import React from 'react';
// Import Pages
import AboutUs from './pages/AboutUs';
// Style Components
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
