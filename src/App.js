import {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [displayA, setDisplayA] = useState(false);
  const [displayB, setDisplayB] = useState(false);
  const [displayBL, setDisplayBL] = useState(false);
  const [displayC, setDisplayC] = useState(false);

  // as compomnentDidMount
  useEffect(() => {
    setTimeout(() => setDisplayA(true), 500);
    setTimeout(() => setDisplayB(true), 1000);
    setTimeout(() => setDisplayBL(true), 1500);
    setTimeout(() => setDisplayC(true), 3000);
  }, []);

  const bClasses = displayBL ? 'b b--large' : 'b';

  return (
    <div className="App">
      {displayA && <img src="100.png" className="a"/>}
      {displayB && <img src="300.png" className={bClasses}/>}
      {displayC && <img src="500.png" className="c"/>}
    </div>
  );
}

export default App;
