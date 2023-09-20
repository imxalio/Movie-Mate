const Search = ({ query, setQuery }) => {
  return (
    <div>
      <input
        className="px-4 py-2 rounded-xl text-xl bg-orange-300 placeholder-gray-500 focus:shadow-xl focus:outline-none focus:-translate-y-1 translate transition-all duration-300"
        name="search"
        value={query}
        placeholder="Search movies..."
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};
export default Search;
