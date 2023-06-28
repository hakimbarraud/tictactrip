import { Iconly } from "react-iconly";
import Input from "./Input";
import SelectDate from "./SelectDate";
import Way from "./Way";
import ToggleSwitch from "./ToggleSwitch";
import usePopularCities from "../Hooks/usePopularCities";
import { SetStateAction, useState } from "react";
import useAutocomplete from "../Hooks/useAutocomplete";

const SearchBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchText, setSearchText] = useState("");

  const { data: popularCities } = usePopularCities();
  const { data: request } = useAutocomplete(searchText);

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setIsVisible(false);
    setSearchText(e.target.value);
  };

  const handleVisibility = () => {
    setIsVisible(true);
  };

  console.log(request);

  return (
    <form onClick={() => isVisible && setIsVisible(false)}>
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
        data={popularCities}
        isVisible={isVisible}
        request={request}
        searchText={searchText}
        handleChange={handleChange}
        handleVisibility={handleVisibility}
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
      <ToggleSwitch />
    </form>
  );
};

export default SearchBar;
