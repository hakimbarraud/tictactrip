import { ChangeEventHandler, ReactNode } from "react";
import AutocompleteResults from "./AutocompleteResults";
import DestinationOptions from "./DestinationOptions";
import TrendingCities from "./TrendingCities";

// Define the shape of the props expected by the Input component
interface Props {
  placeholder: string; // Placeholder text for the input fields
  icon: ReactNode; // Icon to be displayed alongside the Date Picker
  value: string; // Current value of the input fields
  city?: string; // UNIQUENAME url parameter to display the 5 most destinations from a city (ex: "paris")
  fromtext?: string; // Value of the first input component
  toText?: string; // Value of the second input component
  isVisible?: boolean; // Whether the TrendingCities component is visible
  isRequestVisible?: boolean; // Whether the autocomplete results for the first input are visible
  isDestinationRequestVisible?: boolean; // Whether the autocomplete results for the second input are visible
  isDestinationVisible?: boolean; // Whether the DestinationOptions component is visible
  change: ChangeEventHandler<HTMLInputElement>; // Event handler for input field change
  click: () => void; // Event handler for input field click
  setInput?: (text: string) => () => void; // Function to set the value of the first input component
  setDestination?: (text: string) => () => void; // Function to set the value of the second input component
}

const Input = ({
  placeholder,
  icon,
  value,
  city = "",
  isVisible,
  isDestinationRequestVisible,
  isRequestVisible,
  isDestinationVisible,
  setInput,
  setDestination,
  click,
  change,
  fromtext = "",
  toText = "",
}: Props) => {
  return (
    <div className="relative">
      <div className="flex items-center p-3 mt-2 gap-4 bg-neutral-100 rounded-xl">
        <div>{icon}</div>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onClick={click}
          onChange={change}
          className="block w-full bg-neutral-100 outline-none font-semibold placeholder:font-normal"
        />
      </div>
      {/* Show the trending cities when the user clicks on the first input */}
      {isVisible && <TrendingCities setInput={setInput} />}

      {/* Hide the trending cities component and show the matching cities as the user types into the input field of the first input component */}
      {value && isRequestVisible && (
        <AutocompleteResults setInput={setInput} text={fromtext} />
      )}

      {/* Show the famous destinations from the value the user set in the first input */}
      {isDestinationVisible && (
        <DestinationOptions setDestination={setDestination} city={city} />
      )}

      {/* Hide the DestinationOptions component and show autocomplete as the user types into the input field */}
      {value && isDestinationRequestVisible && (
        <AutocompleteResults setInput={setDestination} text={toText} />
      )}
    </div>
  );
};

export default Input;
