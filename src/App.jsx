import {
  Navbar,
  Hero,
  Destinations,
  Pricing,
  Blog,
  Plan,
  Contact,
} from "./components";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="hero-bg text-white relative">
        <div className="h-full w-full bg-gradient-to-b from-black opacity-[0.2167] z-40 to-black absolute" />
        <Navbar />
        <Hero />
      </div>
      <Destinations />
      <Pricing />
      <Blog />
      <Plan />
      <Contact />
    </BrowserRouter>
  );
};

export default App;
