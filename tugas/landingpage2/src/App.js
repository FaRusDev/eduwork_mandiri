import Trusted from "./components/Trusted";
import Cta from "./container/Cta";
import Download from "./container/Download";
import Features from "./container/Features";
import Footer from "./container/Footer";
import Header from "./container/Header";
import Testi from "./container/Testi";
import Timeline from "./container/Timeline";

function App() {
  return (
    <div className="font-inter space-y-5">
      <Header/>
      <Trusted/>
      <Timeline/>
      <Features/>
      <Cta/>
      <Testi/>
      <Download/>
      <Footer/>
    </div>
  );
}

export default App;
