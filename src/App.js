import { useState } from 'react';
import './App.css';

function App() {
  const [crabSize, setCrabSize] = useState(1);
  const [squidSize, setSquidSize] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [animalParade, setAnimalParade] = useState(['hippo', 'rhino', 'hedgehog']);

  return (
    <div className="App">
      {/* fight */}
      {/* sign */}
      {/* parade */}
    </div>
  );
}

export default App;
