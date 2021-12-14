import './App.css';
import CustomerList from './components/CustomerList';
import Filter from './components/Filter';

function App() {
  return (
    <div className="App">
      <h1>Customer Application</h1>
      <Filter/>
      <CustomerList/>
    </div>
  );
}

export default App;
