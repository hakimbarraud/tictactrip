import Input from "./Input";
import Way from "./Way";
import { FaLocationDot } from "react-icons/fa6";

const SearchBar = () => {
  return (
    <form>
      <Way />
      <Input
        placeholder="From: City, Region, Airport"
        icon={<FaLocationDot />}
      />
    </form>
  );
};

export default SearchBar;
