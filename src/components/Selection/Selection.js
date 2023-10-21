import Major from '../Major/Major.js';
import MajorButton from '../MajorButton/MajorButton.js';
import './Selection.css';

function Selection () {
  return (
    <div className="Selection">
      <h1>What's your major?</h1>
      <div className="selection-grid">
        <Major />
      </div>
      <MajorButton />
    </div>
  );
}

export default Selection;
