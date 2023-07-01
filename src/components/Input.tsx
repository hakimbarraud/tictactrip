import { ChangeEventHandler, Fragment, ReactNode } from "react";
import { AutocompleteType } from "../Hooks/useAutocomplete";
import { PopulatCities } from "../Hooks/usePopularCities";
import { DestinationType } from "../Hooks/useDestinationCities";
import AutocompleteResults from "./AutocompleteResults";
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
  const handleAutocompleteClick = (text: string) => () => {
    setInput?.(text)();
    handleVisibility?.();
  };

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
        <div className="px-12 bg-white border-2 border-black rounded-lg border-opacity-10 p-2 mt-1 shadow-lg absolute w-full z-10">
          <p className="text-sm text-neutral-400">Popular Destinations</p>
          {destination?.map((city) => (
            <Fragment key={city.id}>
              <p
                className="py-2 hover:text-blue-700 hover:font-bold cursor-pointer"
                onClick={setDestination?.(city.unique_name)}
              >
                {city.unique_name}
              </p>
              <hr className="w-full" />
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default Input;
