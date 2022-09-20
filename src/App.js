import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/Contact';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div className="App">
      <Header
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      />
      <main>
        {!contactSelected?(
          <>
          </>
        ):(
          <ContactForm></ContactForm>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
