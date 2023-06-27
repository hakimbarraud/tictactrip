import { Iconly } from "react-iconly";
import Input from "./Input";
import SelectDate from "./SelectDate";
import Way from "./Way";

const SearchBar = () => {
  return (
    <form>
      <Way />
      <Input
        placeholder="From: City, Station Or Airport"
        icon={
          <Iconly
            name="Discovery"
            set="bold"
            primaryColor="darkgray"
            size="medium"
          />
        }
      />
      <Input
        placeholder="To: City, Station Or Airport"
        icon={
          <Iconly
            name="Location"
            set="bold"
            primaryColor="darkgray"
            size="medium"
          />
        }
      />
      <SelectDate />
      <button className="w-full bg-red-400 text-white p-3 mt-2 rounded-xl font-bold">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
