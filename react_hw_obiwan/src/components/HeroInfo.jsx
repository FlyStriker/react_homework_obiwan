
const Hero = ({ status, payload, error }) => {
    return (
      <div className="hero">
        {status === "FULFILLED" ? (
          <div>
            <p className="hero_name">{payload.name}</p>
            <p className="hero_birth">
              birth year: <b>{payload.birth_year}</b>
            </p>
            <p className="hero_gender">
              gender: <b>{payload.gender}</b>
            </p>
            <p className="hero_height">
              height: <b>{payload.height} </b>sm
            </p>
            <p className="hero_mass">
              mass: <b>{payload.mass}</b> kg
            </p>
            <div className="hero_films">
              <ul className="hero_films_list">
                <p>Films:</p>
                {payload.films.map((film) => (
                  <li key={Math.random()}>{film.title}</li>
                ))}
              </ul>
            </div>
            <ul className="hero_starships">
              <p>Starships:</p>
              {payload.starships.map((starship) => (
                <li key={Math.random()}>{starship.name}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="loading_hero">
          <p>Please wait , info about hero is loading </p>
          <div className="loader_circle_hero"></div>
        </div>
          
        )}
        {status === "REJECTED" && (
          <>
            <strong>Sorry , info about this hero didn`t load</strong>: {error}
          </>
        )}
      </div>
    );
  };


  export default Hero;
