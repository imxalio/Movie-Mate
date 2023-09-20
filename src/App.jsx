import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import Search from './component/Search';
import TotalResults from './component/TotalResults';
import MoviesList from './MoviesList';
import Box from './component/Box';
import Main from './component/Main';
import WatchedList from './component/WatchedList';
import SelectedMovie from './component/SelectedMovie';

export const key = '4b528d4e';

function App() {
  const [query, setQuery] = useState('Joker');
  const [movies, setMovies] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedID, setSelectedID] = useState(null);
  const [watchedList, setWatchedList] = useState(() => {
    const storedWatchedList = localStorage.getItem('watchedList');
    return storedWatchedList ? JSON.parse(storedWatchedList) : [];
  });

  function handleSelectedId(id) {
    setSelectedID((currentID) => (currentID === id ? null : id));
  }

  useEffect(
    function () {
      async function fetchApi() {
        try {
          const res = await fetch(
            `https://www.omdbapi.com/?s=${query}&apikey=${key}`
          );
          const data = await res.json();

          if (!res.ok) throw new Error('Problem in the network 📛');
          if (data.Response === 'False') throw new Error('Movie not Found 🙅');

          setMovies(data.Search);
          setError('');
          setIsLoading(false);
        } catch (err) {
          setError(err.message);
          setMovies([]);
        } finally {
          setIsLoading(false);
        }
      }

      fetchApi();
    },
    [query]
  );

  useEffect(() => {
    localStorage.setItem('watchedList', JSON.stringify(watchedList));
  }, [watchedList]);

  return (
    <div className="p-5 text-white bg-slate-900 max-w-screen-lg mx-auto">
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <TotalResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          <MoviesList
            setSelectedID={handleSelectedId}
            loading={loading}
            movies={movies}
            error={error}
          />
        </Box>

        <Box>
          {selectedID ? (
            <SelectedMovie
              movieId={selectedID}
              setMovieId={setSelectedID}
              setWatchedList={setWatchedList}
              watchedList={watchedList}
            />
          ) : (
            <WatchedList
              setWatchedList={setWatchedList}
              myWatchedList={watchedList}
            />
          )}
        </Box>
      </Main>
    </div>
  );
}

export default App;
