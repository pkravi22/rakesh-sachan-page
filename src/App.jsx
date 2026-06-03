import { Bell } from 'lucide-react';
import './App.css';

function App() {
  return (
    <>
      <div className="background-elements">
        <div className="orb-1"></div>
        <div className="orb-2"></div>
      </div>
      
      <div className="app-container">
        <div className="glass-card">
          <h1 className="glow-text">We will be live soon!</h1>
          <p className="subtitle">We're crafting something amazing. Stay tuned.</p>
          
          <button className="notify-btn" onClick={() => alert("Thanks for your interest! We'll let you know.")}>
            <Bell size={20} />
            Notify Me
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
