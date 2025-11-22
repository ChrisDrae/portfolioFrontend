import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Gallery from './components/sections/Gallery';
import Videos from './components/sections/Videos';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Portfolio />
        <Videos />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
