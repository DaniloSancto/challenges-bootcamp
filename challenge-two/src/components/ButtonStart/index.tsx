import { Link } from 'react-router-dom';
import './styles.css';

const ButtonStart = () => {
  return (
    <div className="bg-primary base-btn btn-start-container">
      <Link to="/githubsearch">
        <h6>Começar</h6>
      </Link>
    </div>
  );
};

export default ButtonStart;
