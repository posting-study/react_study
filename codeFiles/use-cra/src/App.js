import Log from './Log'
import List from './List'
import './App.css';

function App() {
  return (
    <div className="App">
    <Log isLoggedIn={true}/>
    <List/>
    </div>
  );
}

export default App;
