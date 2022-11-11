import './Categories.scss';
import Arrow from '../assets/icon-arrow-right.svg';

const Categories = () => {
  return (
    <section className="categories container">
      <div className="category">
        <div className="category--image"></div>
        <div className="category--text">
          <h3>Headphones</h3>
          <p><span>Shop</span> <img src={Arrow} alt="" /></p>
        </div>
      </div>
      <div className="category">
        <div className="category--image"></div>
        <div className="category--text">
          <h3>Speakers</h3>
          <p><span>Shop</span> <img src={Arrow} alt="" /></p>

        </div>
      </div>
      <div className="category">
        <div className="category--image"></div>
        <div className="category--text">
          <h3>Earphones</h3>
          <p><span>Shop</span> <img src={Arrow} alt="" /></p>
        </div>
      </div>
    </section>
  );
};
export default Categories;