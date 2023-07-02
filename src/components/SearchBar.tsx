import { SetStateAction, useState } from "react";
import { Iconly } from "react-iconly";
import Input from "./Input";
import SelectDate from "./SelectDate";
import ToggleSwitch from "./ToggleSwitch";

const SearchBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDestinationVisible, setIsDestinationVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isRequestVisible, setIsRequestVisible] = useState(true);
  const [isDestinationRequestVisible, setIsDestinationRequestVisible] =
    useState(true);
  const [destinationText, setDestinationText] = useState("");

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
      setIsDestinationRequestVisible(false);
    };
  };

  const handleDestinationChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setDestinationText(e.target.value);
    setIsDestinationVisible(false);
  };

  const handleDestinationVisibility = () => {
    setIsDestinationVisible(true);
    setIsVisible(false);
  };

  return (
    <form onClick={handleClickForm} className="w-full">
      <div className="md:grid grid-cols-4 items-start gap-4">
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
          isVisible={isVisible}
          value={searchText}
          click={handleVisibility}
          setInput={setInput}
          isRequestVisible={isRequestVisible}
          change={handleChange}
          fromtext={searchText}
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
          isDestinationVisible={isDestinationVisible}
          value={destinationText}
          click={handleDestinationVisibility}
          setDestination={setDestination}
          isDestinationRequestVisible={isDestinationRequestVisible}
          change={handleDestinationChange}
          city={searchText}
          toText={destinationText}
        />
        <SelectDate />
        <div>
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
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
