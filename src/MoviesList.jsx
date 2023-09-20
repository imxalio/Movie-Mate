import AlertMessage from './component/UI/AlertMessage';
import MoviesData from './component/MoviesData';

const MoviesList = ({ movies, loading, error, setSelectedID }) => {
  return (
    <div className="">
      {loading && !error && <AlertMessage message={'Still Loading... ⌛️'} />}
      {!loading && !error && (
        <MoviesData setSelectedID={setSelectedID} movies={movies} />
      )}
      {!loading && error && <AlertMessage message={error} />}
    </div>
  );
};

export default MoviesList;
