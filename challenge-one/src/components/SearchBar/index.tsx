import ButtonSearch from "components/ButtonSearch";
import "./styles.css";

const SearchBar = () => {
  return (
    <>
      <div className="catalog-container">
        <div className="main-catalog">
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
