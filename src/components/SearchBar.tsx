import { SetStateAction, useState } from "react";
import { Iconly } from "react-iconly";
import Input from "./Input";
import SelectDate from "./SelectDate";
import ToggleSwitch from "./ToggleSwitch";

const SearchBar = () => {
  // STATE VARIABLES //
  const [searchText, setSearchText] = useState(""); // State to keep track of the first input text
  const [destinationText, setDestinationText] = useState(""); // State to keep track of the second input text
  const [isVisible, setIsVisible] = useState(false); // State to show/hide the input field suggestions in the first input text
  const [isDestinationVisible, setIsDestinationVisible] = useState(false); // State to show/hide the input field suggestions in the second input text
  const [isRequestVisible, setIsRequestVisible] = useState(true); // State to show/hide the autocomplete component in the first input text
  const [isDestinationRequestVisible, setIsDestinationRequestVisible] =
    useState(true); // State to show/hide the autocomplete component in the second input text

  // FUNCTIONS TO UPDATE THE STATES //
  const handleClickForm = () => {
    // Handle click event on the form element
    isVisible && setIsVisible(false);
    isDestinationVisible && setIsDestinationVisible(false);
  };

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    // Handle change event on the first input field
    setSearchText(e.target.value);
    setIsVisible(false);
  };

  const handleVisibility = () => {
    // Handle visibility of the first input field suggestions
    if (!searchText) {
      setIsVisible(true);
    }
  };

  const setInput = (text: string) => {
    // Set input value on click in the first input component
    return () => {
      setSearchText(text);
      setIsRequestVisible(false);
    };
  };

  const setDestination = (text: string) => {
    // Set input value on click in the second input component
    return () => {
      setDestinationText(text);
      setIsDestinationRequestVisible(false);
    };
  };

  const handleDestinationChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    // Handle change event on the second input component
    setDestinationText(e.target.value);
    setIsDestinationVisible(false);
  };

  const handleDestinationVisibility = () => {
    // Handle visibility of the second input component
    setIsDestinationVisible(true);
    setIsVisible(false);
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSearchText("");
    setDestinationText("");
  };

  return (
    <form onClick={handleClickForm} onSubmit={handleSubmit} className="w-full">
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
