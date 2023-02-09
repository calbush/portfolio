import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
