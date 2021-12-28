import './App.css';
import Nash_prinsip from '../src/js/Nash_prinsip';
import Dashboard from '../src/js/Dashboard';
import Kurs from '../src/js/kurs'
import Footere from '../src/js/footer'

function App() {
  return (
   <div>
     <Dashboard/>
     <Nash_prinsip/>
     <Kurs/>
     <Footere/>
    </div>
  );
}

export default App;
