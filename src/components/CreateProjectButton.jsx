export default function CreateProjectButton(props) {
  const { onCreate, children, ...prop } = props;
  return (
    <button
      className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      onClick={onCreate}
      {...prop}
    >
      {children}
    </button>
  );
}
