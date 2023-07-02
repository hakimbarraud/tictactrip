import { ChangeEventHandler, ReactNode } from "react";
import { AutocompleteType } from "../Hooks/useAutocomplete";
import { DestinationType } from "../Hooks/useDestinationCities";
import AutocompleteResults from "./AutocompleteResults";
import DestinationOptions from "./DestinationOptions";
import TrendingCities from "./TrendingCities";

interface Props {
  placeholder: string;
  icon: ReactNode;
  request?: AutocompleteType[];
  destination?: DestinationType[];
  searchText?: string;
  destinationText?: string;
  isVisible?: boolean;
  isRequestVisible?: boolean;
  isDestinationRequestVisible?: boolean;
  isDestinationVisible?: boolean;
  handleChange?: ChangeEventHandler<HTMLInputElement>;
  handleVisibility?: () => void;
  handleDestinationChange?: ChangeEventHandler<HTMLInputElement>;
  setInput?: (text: string) => () => void;
  setDestination?: (text: string) => () => void;
  handleDestinationVisibility?: () => void;
}

const Input = ({
  placeholder,
  icon,
  searchText,
  destinationText,
  isVisible,
  isDestinationRequestVisible,
  isRequestVisible,
  isDestinationVisible,
  handleChange,
  handleVisibility,
  handleDestinationChange,
  setInput,
  setDestination,
  handleDestinationVisibility,
  request,
  destination,
}: Props) => {
  return (
    <div className="relative">
      <div className="flex items-center p-3 mt-2 gap-4 bg-neutral-100 rounded-xl">
        <div>{icon}</div>
        <input
          type="text"
          placeholder={placeholder}
          value={searchText || destinationText}
          onClick={handleVisibility || handleDestinationVisibility}
          onChange={handleChange || handleDestinationChange}
          className="block w-full bg-neutral-100 outline-none font-semibold placeholder:font-normal"
        />
      </div>
      {isVisible && <TrendingCities setInput={setInput} />}
      {searchText && isRequestVisible && (
        <AutocompleteResults request={request} setInput={setInput} />
      )}
      {isDestinationVisible && (
        <DestinationOptions
          destination={destination}
          setDestination={setDestination}
        />
      )}
      {destinationText && isDestinationRequestVisible && (
        <AutocompleteResults request={request} setInput={setDestination} />
      )}
    </div>
  );
};

export default Input;
