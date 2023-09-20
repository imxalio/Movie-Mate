const Button = ({ content, onClick, customCss }) => {
  return (
    <button
      onClick={onClick}
      className={`mt-2 uppercase bg-orange-500 p-3 rounded-lg inline-block font-bold text-slate-900 hover:bg-slate-900 hover:text-orange-500 transition-all duration-300 ${customCss}`}
    >
      {content}
    </button>
  );
};
export default Button;
