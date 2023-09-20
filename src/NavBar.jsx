const NavBar = ({ children }) => {
  return (
    <div className="flex bg-orange-600 justify-between p-5 rounded-xl items-center">
      <h1 className="text-white font-bold text-2xl text-slate-900">
        Movie Mate
      </h1>
      {children}
    </div>
  );
};
export default NavBar;
