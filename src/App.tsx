import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BottomNav from './components/BottomNav';
import Footer from './components/Footer';
import FeatureSplit from './components/FeatureSplit';
import Offers from './components/Offers';


function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />

        <FeatureSplit
          reverse={false}
          title={
            <>
              Tomorrow should <br />
              <span className="underline-orange">be better</span> than{' '}
              <span className="highlight-green">today</span>
            </>
          }
          description="We are a team of strategists, designers communicators, researchers. Togeather, we belive that progress only happens when you refuse to play things safe."
          buttonText="Read more"
          imageUrl="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        />

        <FeatureSplit
          reverse={true}
          title={
            <>
              <span className="highlight-green">See</span> how we can <br />
              help you <span className="underline-orange">progress</span>
            </>
          }
          description="We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design digital, comms and social research."
          buttonText="Read more"
          imageUrl="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        />

      </main>

      <Offers />
      <Footer />
      <BottomNav />
    </div>
  );
}

export default App;
