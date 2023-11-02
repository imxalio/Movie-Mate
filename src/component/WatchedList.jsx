import Button from './UI/Button';
import { MdOutlineDelete } from 'react-icons/md';

const WatchedList = ({ myWatchedList, setWatchedList }) => {
  function handleDeleteMovie(movie) {
    const newWatchedList = myWatchedList.filter(
      (item) => item.imdbID !== movie.imdbID
    );
    setWatchedList(newWatchedList);
    console.log(myWatchedList);
  }

  function average(arr) {
    let acc = 0;
    for (let i = 0; i < arr.length; i++) {
      acc += arr[i];
    }
    const ave = (acc / arr.length).toFixed(2);
    return ave;
  }

  const allTime = (arr) => {
    let acc = 0;
    for (let i = 0; i < arr.length; i++) {
      acc += arr[i];
    }
    const ave = acc.toFixed(2);
    return ave;
  };

  const imdbRating = myWatchedList.map((movie) => parseFloat(movie.imdbRating));
  const myRating = myWatchedList.map((movie) => movie.myRating);
  const runTime = myWatchedList.map((movie) => parseFloat(movie.Runtime));

  const averageImdbRating = average(imdbRating);
  const averageMyRating = average(myRating);
  const watchingTime = allTime(runTime);

  return (
    <div className="">
      <div className="bg-slate-700 p-6 rounded-xl shadow-2xl">
        <h1 className="font-bold uppercase text-2xl mb-3">
          Movies you watched
        </h1>
        <div className="flex gap-3 text-xl">
          <h2>🎞️ {myWatchedList.length} movies</h2>
          <h2>
            ⭐️ {(averageImdbRating !== 'NaN' && averageImdbRating) || '0'}
          </h2>
          <h2>🌟 {(averageMyRating !== 'NaN' && averageMyRating) || '0'}</h2>
          <h2>⌛️ {watchingTime || '0'} min</h2>
        </div>
      </div>

      {myWatchedList.map((movie) => {
        return (
          <div
            key={movie.imdbID}
            className="flex gap-3 p-5 border-b-[1px] border-white justify-between"
          >
            <img className="w-1/5" src={movie.Poster}></img>
            <div className="grid grid-cols-3 items-center justify-center">
              <h1 className="col-span-3 text-xl font-bold">{movie.Title}</h1>
              <h3 className="text-lg">⭐️ {movie.imdbRating}</h3>
              <h3 className="text-lg">🌟 {movie.myRating}</h3>
              <h3 className="text-lg">
                ⌛️{movie.Runtime === 0 ? 'N/A' : `${movie.Runtime}`}
              </h3>
            </div>
            <Button
              onClick={() => handleDeleteMovie(movie)}
              content={<MdOutlineDelete />}
              customCss={'h-1/5 text-2xl p-1'}
            />
          </div>
        );
      })}
    </div>
  );
};
export default WatchedList;
