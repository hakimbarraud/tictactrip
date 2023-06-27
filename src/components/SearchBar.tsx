import Way from "./Way";

const SearchBar = () => {
  return (
    <form>
      <Way />
      <div>
        <div>
          <input
            type="text"
            placeholder="From: City, Station or Airport"
            className="block bg-neutral-100 p-3 mt-2 w-full rounded-lg"
          />
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
