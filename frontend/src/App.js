import './App.css';
import {Link} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <h1>Django Auth Template</h1>
      <Link to='/login'>Login</Link> <br/>
      <Link to='/register'>Register</Link>
    </div>
  );
}

export default App;
