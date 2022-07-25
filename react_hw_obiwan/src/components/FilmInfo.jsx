const Film = ({ status, payload, error }) => {
  return (
    <div className="film">
      {status === "FULFILLED" ? (
        <div className="film_about">
          <p className="film_title_name">{payload.title}</p>
          <p className="film_info">{payload.opening_crawl}</p>
          <p className="film_data_release">
            date of release: <b>{payload.release_date}</b>
          </p>
          <p className="film_director">
            director: <b>{payload.director}</b>
          </p>
          <ul className="characters">
            <b>Characters:</b>
            {payload.characters.map((character) => (
              <li key={Math.random()}>{character.name}</li>
            ))}
          </ul>
          <ul className="species">
            <b>Species:</b>
            {payload.species.map((specie) => (
              <li key={Math.random()}>{specie.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="loading_film">
          <p>Please wait , film is loading </p>
          <div className="loader_circle_film"></div>
        </div>
      )}
      {status === "REJECTED" && (
        <div className="error">
          <p className="error_title">Sorry , film didn`t load</p>: {error}
        </div>
      )}
    </div>
  );
};

export default Film;
