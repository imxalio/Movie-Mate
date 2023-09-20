const MoviesData = ({ movies, setSelectedID }) => {
  return (
    <ul className="">
      {movies &&
        movies.map((item) => {
          const { Poster, Title, Type, Year, imdbID } = item;
          return (
            <li
              className="p-3 flex gap-5 items-center border-b-[1px] border-gray-50 hover:bg-slate-600 cursor-pointer"
              key={imdbID}
              onClick={() => setSelectedID(imdbID)}
            >
              <img className="w-1/6" src={Poster} />
              <div className="grid grid-cols-1 gap-3">
                <h1 className="text-xl font-bold">{Title}</h1>
                <h3 className="text-lg font-medium">🎬 {Type}</h3>
                <h3 className="">🗓️ {Year}</h3>
              </div>
            </li>
          );
        })}
    </ul>
  );
};
export default MoviesData;
