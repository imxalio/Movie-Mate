const TotalResults = ({ movies }) => {
  return (
    <div className="text-xl">Total Results: {movies ? movies.length : '0'}</div>
  );
};
export default TotalResults;
