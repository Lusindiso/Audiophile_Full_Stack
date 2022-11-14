import { Link } from 'react-router-dom';

import './Highlight.scss';
import ZX9 from '../assets/image-speaker-zx9.png';

const Highlight = () => {
  return (
    <div className='highlight container'>

      <div className="highlight--items">
        <div>
          <img src={ZX9} alt="" />
        </div>
        <div>
          <h2>ZX9 SPEAKER</h2>
          <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <Link className='btn'>See product</Link>

        </div>
      </div>
      <div className="highlight--items">
        <h2>ZX7 SPEAKER</h2>
        <Link className='btn'>See product</Link>
      </div>
      <div className="highlight--items">
        <div>hello</div>
        <div>
          <h2>YX1 EARPHONES</h2>
          <Link className='btn'>See product</Link>
        </div>
      </div>
    </div>
  );
};
export default Highlight;