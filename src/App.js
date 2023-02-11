import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import About from './components/About';
import Projects from './components/Projects';
import Intro from './components/Intro';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Intro />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
