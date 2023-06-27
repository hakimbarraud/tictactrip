import Input from "./Input";
import Way from "./Way";
import { FaLocationDot } from "react-icons/fa6";
import { BsRecordCircleFill } from "react-icons/bs";

const SearchBar = () => {
  return (
    <form>
      <Way />
      <Input
        placeholder="From: City, Station Or Airport"
        icon={<BsRecordCircleFill />}
      />
      <Input
        placeholder="To: City, Station Or Airport"
        icon={<FaLocationDot />}
      />
      <button className="w-full bg-red-400 text-white p-3 mt-2 rounded-xl font-bold">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
