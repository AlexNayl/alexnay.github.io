import './App.css';
import { Switch, Route, Link } from "wouter";

function App() {
  return (
    <div className="App">
      <nav className="App-header">
        <Link href="/">About</Link>
        <Link href="/projects">Projects</Link>
      </nav>
    </div>
  );
}

export default App;
