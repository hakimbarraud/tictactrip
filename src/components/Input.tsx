import { ChangeEventHandler, Fragment, ReactNode } from "react";
import { AutocompleteType } from "../Hooks/useAutocomplete";
import { PopulatCities } from "../Hooks/usePopularCities";
import { DestinationType } from "../Hooks/useDestinationCities";

interface Props {
  placeholder: string;
  icon: ReactNode;
  data?: PopulatCities[] | undefined;
  request?: AutocompleteType[] | undefined;
  destination?: DestinationType[] | undefined;
  handleVisibility?: () => void | undefined;
  isVisible?: boolean;
  searchText?: string;
  destinationText?: string;
  handleChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  handleDestinationChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  setInput?: (text: string) => () => void | undefined;
  setDestination?: (text: string) => () => void | undefined;
  isRequestVisible?: boolean | undefined;
  isDestinationVisible?: boolean | undefined;
  handleDestinationVisibility?: () => void | undefined;
}

const Input = ({
  placeholder,
  icon,
  data,
  isVisible,
  request,
  destination,
  searchText = "",
  destinationText = "",
  handleChange,
  handleDestinationChange,
  handleVisibility,
  setInput,
  isRequestVisible,
  setDestination,
  isDestinationVisible,
  handleDestinationVisibility,
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
      {isVisible ? (
        <div className="px-12 bg-white border-2 border-black rounded-lg border-opacity-10 p-2 mt-1 shadow-lg absolute w-full z-10">
          <p className="text-sm text-neutral-400">Trending Cities</p>
          {data?.map((city) => (
            <Fragment key={city.id}>
              <p
                className="py-2 hover:text-blue-700 hover:font-bold cursor-pointer"
                onClick={setInput?.(city.unique_name)}
              >
                {city.unique_name}
              </p>
              <hr className="w-full" />
            </Fragment>
          ))}
        </div>
      ) : searchText && isRequestVisible ? (
        <div className="px-12 bg-white border-2 border-black rounded-lg border-opacity-10 p-2 mt-1 shadow-lg absolute w-full z-10">
          {request?.map((text) => (
            <Fragment key={text.city_id}>
              <p
                className="py-2 hover:text-blue-700 hover:font-bold cursor-pointer"
                onClick={setInput?.(text.unique_name)}
              >
                {text.unique_name}
              </p>
              <hr className="w-full" />
            </Fragment>
          ))}
        </div>
      ) : null}
      {isDestinationVisible ? (
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
      ) : null}
    </div>
  );
};

export default Input;
