import './index.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

function App() {

  return (
    <>
      <Header itemClass='{navItems.className}' link='{navItems.href}' text='{navItems.text}'/>

      <Main />

      <Footer />
    </>
  )
}

// Descrizione: Create un nuovo progetto React 
// e definite i componenti necessari per strutturare 
// il layout come da screenshot allegato.

// Per oggi diamo priorità alla struttura: quando è tutto bello solido, passiamo al CSS!

// Note: - Il font utilizzato è Open Sans

// Bonus: - Creare un componente aggiuntivo per gestire la fascia azzurra con le icone.

export default App