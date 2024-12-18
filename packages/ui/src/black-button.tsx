const BlackButton = ({ text, onClick, className }: any) => {
  return (
    <button
      className={`rounded-md bg-zinc-900 py-2 mx-1 px-4 border border-transparent text-center text-base text-white transition-all shadow-md hover:shadow-lg focus:bg-zinc-800 active:bg-zinc-800 hover:bg-zinc-800 active:shadow-none disabled:pointer-events-none ${className}`} type="button"
      onClick={onClick}
    >
      {text || 'Lorem ipsum'}
    </button>
  );
};

export default BlackButton;