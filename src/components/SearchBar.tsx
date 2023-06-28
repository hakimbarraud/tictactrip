import { Iconly } from "react-iconly";
import Input from "./Input";
import SelectDate from "./SelectDate";
import Way from "./Way";
import ToggleSwitch from "./ToggleSwitch";
import usePopularCities from "../Hooks/usePopularCities";
import { useState } from "react";

const SearchBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => {
    setIsVisible(true);
  };

  const { data: popularCities } = usePopularCities();
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
