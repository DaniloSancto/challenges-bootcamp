import "./styles.css";
import CarImage from "assets/images/car.png";
import ButtonHome from "components/ButtonHome";

const Home = () => {
  return (
    <div className="main-home">
      <div className="home-container">
        <div className="home-card">
          <div className="home-card-content">
            <h2>O carro perfeito para você</h2>
            <p className="home-card-description">
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
          <div className="home-img">
            <img src={CarImage} alt="" />
          </div>
        </div>
      </div>
      <div className="btn-container">
        <div>
          <ButtonHome />
        </div>
        <p>Comece agora a navegar</p>
      </div>
    </div>
  );
};

export default Home;
