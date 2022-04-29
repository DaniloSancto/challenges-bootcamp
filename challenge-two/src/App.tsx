import './assets/styles/custom.scss';
import "./App.css";
import Navbar from "components/Navbar";
import GithubSearch from 'pages/GithubSearch';

function App() {
  return (
    <>
      <Navbar />
      <GithubSearch/>
    </>
  );
}

export default App;
