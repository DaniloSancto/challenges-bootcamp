import ButtonSearch from "components/ButtonSearch";
import "./styles.css";

const SearchBar = () => {
  return (
    <>
      <div className="search-container">
        <div className="search-bar-content">
          <form action="submit">
            <div className="form-content">
              <input type="text" placeholder="Digite sua busca" />
              <div>
                <ButtonSearch />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
