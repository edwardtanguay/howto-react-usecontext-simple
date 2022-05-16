import './App.css';
import { Customers } from './components/Customers';
import { Employees } from './components/Employees';

function App() {
    return (
        <div className="App">
            <Customers />
            <Employees/>
        </div>
    );
}

export default App;
