import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>      
      <div className="App container mx-auto px-1">
        <Router>
          <Home />
        </Router>
      </div>
    </>
  );
}

export default App
