import "./styles.css";
import CarCardImage from "assets/images/car-card.png";
import ButtonBuy from "components/ButtonBuy";

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={CarCardImage} alt="" />
      </div>
      <div className="product-content">
        <h1 className="product-name">Audi Supra TT</h1>
        <p className="product-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
      </div>
      <div>
        <ButtonBuy />
      </div>
    </div>
  );
};

export default ProductCard;
