
import '../App.css';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      
      <h1>Want to receive updates on Legato?</h1>
      <label for='email'>Email :</label>
      <input type='email' placeholder='example@example.com'></input>
    </div>
  );
}

export default App;
