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
  data?: PopulatCities[] | undefined;
  request?: AutocompleteType[] | undefined;
  destination?: DestinationType[] | undefined;
  searchText?: string;
  destinationText?: string;
  isVisible?: boolean;
  isRequestVisible?: boolean | undefined;
  isDestinationVisible?: boolean | undefined;
  handleChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  handleVisibility?: () => void | undefined;
  handleDestinationChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  setInput?: (text: string) => () => void | undefined;
  setDestination?: (text: string) => () => void | undefined;
  handleDestinationVisibility?: () => void | undefined;
}

const Input = ({
  placeholder,
  icon,
  data,
  searchText = "",
  destinationText = "",
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
    </div>
  );
};

export default Input;
