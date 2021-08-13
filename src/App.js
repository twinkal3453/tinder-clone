import "./App.css";
import Header from "./Header";
import SwipeButton from "./SwipeButton";
import TinderCards from "./TinderCards";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* TinderCards */}
      <TinderCards />
      {/* SwipeButtons */}
      <SwipeButton />
    </div>
  );
}

export default App;
