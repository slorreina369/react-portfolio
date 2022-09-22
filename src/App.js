import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/Contact';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

function App() {
  const [currentPage, setCurrentPage] = useState('aboutMe');
  
  let pageComponent;

  switch(currentPage){
    case 'aboutMe':
      pageComponent = <About></About>;
      break;
    case 'contact':
      pageComponent = <ContactForm></ContactForm>;
      break;
    case 'resume':
      pageComponent = <Resume></Resume>;
      break;
    case 'portfolio':
      pageComponent=<Portfolio></Portfolio>;
      break;
  }

  return (
    <div className="App">
      <Header
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      />
      <main>
        {pageComponent}
      </main>
      <Footer />
    </div>
  );
}

export default App;
