import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BottomNav from './components/BottomNav';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}

export default App;
