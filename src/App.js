import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h2>React Sample App for Assignment</h2>
        <p>Questions:</p>
        <ol>
          <li>Create Github Repository with React sample code</li>
          <li>Need To create the Docker Image of Sample React application using CI/CD</li>
          <li>Push that Docker Image to (hub.docker.com)</li>
          <li>Publish the All time Latest Image to the EC2 Machine</li>
        </ol>
      </div>
      <img src={logo} alt="logo" />
    </div>
  );
}

export default App;

