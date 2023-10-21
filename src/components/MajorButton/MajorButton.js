import './MajorButton.css';
import { useHistory } from 'react-router-dom';

function MajorButton () {
    const history = useHistory();

    const handleNavigation = () => {
      history.push('/about');
    };
    
  return (
    <div className="major-button">
      <button className="selection-button">Continue</button>
    </div>
  );
}

export default MajorButton;
