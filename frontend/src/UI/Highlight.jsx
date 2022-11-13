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
          <a href="#">See product</a>
        </div>
      </div>
      <div className="highlight--items">
      </div>
      <div className="highlight--items"></div>
    </div>
  );
};
export default Highlight;