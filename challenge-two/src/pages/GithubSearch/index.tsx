import "./styles.css";
import ButtonFind from "components/ButtonFind";
import ResultSearch from "components/ResultSearch";
import { useState } from "react";
import axios from "axios";

type FormData = {
  profile: string;
};

type User = {
  avatar_url: string;
  url: string;
  followers: string;
  location: string;
  login: string;
};

const GithubSearch = () => {
  const [formData, setFormData] = useState<FormData>({
    profile: "",
  });

  const [user, setUser] = useState<User>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    axios.get(`https://api.github.com/users/${formData.profile}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((e) => {
        setUser(undefined);
      });
  };

  return (
    <>
      <div className="github-search-container">
        <h1 className="search-title">Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="profile"
              value={formData.profile}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <ButtonFind />
          </div>
        </form>
      </div>
      {user && (
        <ResultSearch
          image={user?.avatar_url}
          profile={user?.url}
          followers={user?.followers}
          place={user?.location}
          name={user?.login}
        />
      )}
    </>
  );
};

export default GithubSearch;
