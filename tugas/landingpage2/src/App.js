import Trusted from "./components/Trusted";
import Features from "./container/Features";
import Header from "./container/Header";
import Timeline from "./container/Timeline";

function App() {
  return (
    <div className="font-inter space-y-4">
      <Header/>
      <Trusted/>
      <Timeline/>
      <Features/>
    </div>
  );
}

export default App;
