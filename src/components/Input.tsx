import { ChangeEventHandler, ReactNode } from "react";
import { AutocompleteType } from "../Hooks/useAutocomplete";
import { DestinationType } from "../Hooks/useDestinationCities";
import { PopulatCities } from "../Hooks/usePopularCities";
import AutocompleteResults from "./AutocompleteResults";
import DestinationOptions from "./DestinationOptions";
import TrendingCities from "./TrendingCities";

interface Props {
  placeholder: string;
  icon: ReactNode;
  data?: PopulatCities[];
  request?: AutocompleteType[];
  destination?: DestinationType[];
  searchText?: string;
  destinationText?: string;
  isVisible?: boolean;
  isRequestVisible?: boolean;
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
  data,
  searchText,
  destinationText,
  isVisible,
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
    <>
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
      {isVisible && <TrendingCities data={data} setInput={setInput} />}
      {searchText && isRequestVisible && (
        <AutocompleteResults request={request} setInput={setInput} />
      )}
      {isDestinationVisible && (
        <DestinationOptions
          destination={destination}
          setDestination={setDestination}
        />
      )}
    </>
  );
};

export default Input;
