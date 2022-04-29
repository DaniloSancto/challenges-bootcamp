import "./styles.css";

type Props = {
  image: string;
  profile: string;
  followers: string;
  place: string;
  name: string;
};

const ResultSearch = ({ image, profile, followers, place, name }: Props) => {
  return (
    <div className="result-search-container">
      <img src={image} alt="" />
      <div className="result-search-card">
        <h2>Informações</h2>
        <ul>
          <li>
            <h4>Perfil:</h4> <a href={profile}><h6>{profile}</h6></a>
          </li>
          <li>
            <h4>Seguidores:</h4> <h5>{followers}</h5>
          </li>
          <li>
            <h4>Localidade:</h4> <h5>{place}</h5>
          </li>
          <li>
            <h4>Nome:</h4> <h5>{name}</h5>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResultSearch;
