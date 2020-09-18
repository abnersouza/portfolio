import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import Recommendations from './Components/Recommendations';

const App = () => {
  const [state, setState] = useState(null);

  async function fetchUserData() {
    const response = await fetch("/resumeData.json");
    setState(await response.json());
  }

  useEffect(() => {
    fetchUserData();
  }, [])

  if (!state) {
    return "";
  }

  return (
    <div className="App">
      <Header data={state.main} />
      <About data={state.main} />
      <Resume data={state.resume} />
      <Portfolio data={state.portfolio} />
      <Recommendations data={state.recommendations} />
      <Contact data={state.main} />
      <Footer data={state.main} />
    </div>
  );
}

export default App;
