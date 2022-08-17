import About from "./components/About";
import All from "./components/All";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Support from "./components/Support";


function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Support/>
      <All/>
      <Pricing/>
    </>
  );
}

export default App;
