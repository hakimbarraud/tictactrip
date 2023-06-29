import { Iconly } from "react-iconly";
import Input from "./Input";
import SelectDate from "./SelectDate";
import Way from "./Way";
import ToggleSwitch from "./ToggleSwitch";
import usePopularCities from "../Hooks/usePopularCities";
import { SetStateAction, useState } from "react";
import useAutocomplete from "../Hooks/useAutocomplete";
import useDestinationCities from "../Hooks/useDestinationCities";

const SearchBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDestinationVisible, setIsDestinationVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isRequestVisible, setIsRequestVisible] = useState(true);
  const [destinationText, setDestinationText] = useState("");

  const { data: popularCities } = usePopularCities();
  const { data: request } = useAutocomplete(searchText);
  const { data: destination } = useDestinationCities(searchText);

  const handleClickForm = () => {
    isVisible && setIsVisible(false);
    isDestinationVisible && setIsDestinationVisible(false);
  };

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setSearchText(e.target.value);
    setIsVisible(false);
  };

  const handleVisibility = () => {
    if (!searchText) {
      setIsVisible(true);
    }
  };

  const setInput = (text: string) => {
    return () => {
      setSearchText(text);
      setIsRequestVisible(false);
    };
  };

  const setDestination = (text: string) => {
    return () => {
      setDestinationText(text);
    };
  };

  const handleDestinationVisibility = () => {
    setIsDestinationVisible(true);
  };

  return (
    <form onClick={handleClickForm}>
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
        setInput={setInput}
        isRequestVisible={isRequestVisible}
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
        destination={destination}
        destinationText={destinationText}
        setDestination={setDestination}
        isDestinationVisible={isDestinationVisible}
        handleDestinationVisibility={handleDestinationVisibility}
      />
      <SelectDate />
      <button
        className={
          !searchText || !destinationText
            ? "bg-neutral-200 text-black w-full p-3 mt-2 rounded-xl font-bold cursor-not-allowed"
            : "w-full bg-red-400 text-white p-3 mt-2 rounded-xl font-bold"
        }
        disabled={!searchText || !destinationText}
      >
        Search
      </button>
      <ToggleSwitch />
    </form>
  );
};

export default SearchBar;
