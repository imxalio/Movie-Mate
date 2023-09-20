import { useEffect, useState } from 'react';
import AlertMessage from './UI/AlertMessage';
import StarComponent from './UI/StarComponent';
import { FaBackspace } from 'react-icons/fa';
import Button from './UI/Button';

const SelectedMovie = ({
  movieId,
  setMovieId,
  setWatchedList,
  watchedList,
}) => {
  const key = '4b528d4e';

  const [movieData, setMovieData] = useState({});
  const [loading, isLoading] = useState(false);
  const [myRating, setMyRating] = useState(0);

  useEffect(
    function () {
      async function fetchMovie() {
        isLoading(true);
        const res = await fetch(
          `https://www.omdbapi.com/?i=${movieId}&apikey=${key}`
        );

        const data = await res.json();
        setMovieData(data);
        isLoading(false);
      }

      fetchMovie();
    },
    [movieId]
  );

  const {
    Title,
    Poster,
    Released,
    Runtime,
    Genre,
    imdbRating,
    imdbVotes,
    Director,
    Plot,
    Actors,
    imdbID,
  } = movieData;

  function handleAddBtn() {
    const itemExists = watchedList.some((item) => item.imdbID === imdbID);

    if (itemExists) {
      setMovieId(null);
    } else {
      const newMovieInfo = {
        Title,
        imdbRating,
        Runtime,
        myRating,
        imdbID,
        Poster,
      };
      setWatchedList((current) => [...current, newMovieInfo]);
      setMovieId(null);
    }
  }

  return (
    <div>
      {loading ? (
        <AlertMessage message={'Load Movie Data... ⌛️'} />
      ) : (
        <header>
          <article className="flex gap-3 items-center rounded-xl bg-slate-700 shadow-xl">
            <img className="w-2/5 rounded-tl-xl" src={Poster} />
            <div className="p-5 flex flex-col gap-3">
              <h1 className="text-3xl font-bold">{Title}</h1>
              <h3 className="text-lg">{Released + ' . ' + Runtime}</h3>
              <h3 className="text-lg">{Genre}</h3>
              <h3 className="text-lg">
                ⭐️ {imdbRating} ({imdbVotes}) IMDb Rating.
              </h3>
            </div>
          </article>

          <article className="p-8">
            <div className="bg-slate-700 py-5 px-4 rounded-xl mb-5 text-center">
              <StarComponent setMyRating={setMyRating} />

              <Button onClick={handleAddBtn} content={'+ Add to the list'} />
            </div>

            <p className="italic mb-4">{Plot}</p>
            <h3 className="mb-4">
              <span className="text-yellow-500 text-lg">Actors: </span>
              {Actors}
            </h3>
            <h3 className="mb-4">
              <span className="text-yellow-500 text-lg">Director: </span>
              {Director}
            </h3>
          </article>

          <Button
            content={<FaBackspace />}
            onClick={() => setMovieId(null)}
            customCss={'absolute top-1 right-2 shadow-xl text-lg'}
          />
        </header>
      )}
    </div>
  );
};
export default SelectedMovie;
