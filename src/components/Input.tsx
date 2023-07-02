import { ChangeEventHandler, ReactNode } from "react";
import AutocompleteResults from "./AutocompleteResults";
import DestinationOptions from "./DestinationOptions";
import TrendingCities from "./TrendingCities";

interface Props {
  placeholder: string;
  icon: ReactNode;
  value: string;
  city?: string;
  fromtext?: string;
  toText?: string;
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
      {isVisible && <TrendingCities setInput={setInput} />}
      {value && isRequestVisible && (
        <AutocompleteResults setInput={setInput} text={fromtext} />
      )}
      {isDestinationVisible && (
        <DestinationOptions setDestination={setDestination} city={city} />
      )}
      {value && isDestinationRequestVisible && (
        <AutocompleteResults setInput={setDestination} text={toText} />
      )}
    </div>
  );
};

export default Input;
