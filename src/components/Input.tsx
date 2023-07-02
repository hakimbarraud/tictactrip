import { ChangeEventHandler, ReactNode } from "react";
import { AutocompleteType } from "../Hooks/useAutocomplete";
import AutocompleteResults from "./AutocompleteResults";
import DestinationOptions from "./DestinationOptions";
import TrendingCities from "./TrendingCities";

interface Props {
  placeholder: string;
  icon: ReactNode;
  value: string;
  city?: string;
  request?: AutocompleteType[];
  isVisible?: boolean;
  isRequestVisible?: boolean;
  isDestinationRequestVisible?: boolean;
  isDestinationVisible?: boolean;
  change: ChangeEventHandler<HTMLInputElement>;
  click: () => void;
  setInput?: (text: string) => () => void;
  setDestination?: (text: string) => () => void;
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
  request,
  change,
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
      {isVisible && <TrendingCities setInput={setInput} />}
      {value && isRequestVisible && (
        <AutocompleteResults request={request} setInput={setInput} />
      )}
      {isDestinationVisible && (
        <DestinationOptions setDestination={setDestination} city={city} />
      )}
      {value && isDestinationRequestVisible && (
        <AutocompleteResults request={request} setInput={setDestination} />
      )}
    </div>
  );
};

export default Input;
