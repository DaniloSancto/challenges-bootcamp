import "./styles.css";
import ButtonFind from "components/ButtonFind";
import ResultSearch from "components/ResultSearch";

const GithubSearch = () => {
  return (
    <>
      <div className="github-search-container">
        <h1 className="search-title">Encontre um perfil Github</h1>
        <form action="submit">
          <div>
            <input
              type="text"
              name="user-github"
              className="search-input"
              placeholder="Usuário Github"
            />
            <ButtonFind />
          </div>
        </form>
      </div>
      <ResultSearch
        image="https://avatars.githubusercontent.com/u/63885658?v=4"
        profile="https://api.github.com/users/DaniloSancto"
        followers="1"
        place="Curitiba"
        name="Danilo Santos"
      />
    </>
  );
};

export default GithubSearch;
