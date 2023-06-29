import { ChangeEventHandler, ReactNode } from "react";
import { AutocompleteType } from "../Hooks/useAutocomplete";
import { PopulatCities } from "../Hooks/usePopularCities";

interface Props {
  placeholder: string;
  icon: ReactNode;
  data?: PopulatCities[] | undefined;
  request?: AutocompleteType[] | undefined;
  handleVisibility?: () => void | undefined;
  isVisible?: boolean;
  searchText?: string | undefined;
  handleChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  setInput?: (text: string) => () => void | undefined;
  isRequestVisible?: boolean | undefined;
}

const Input = ({
  placeholder,
  icon,
  data,
  isVisible,
  request,
  searchText,
  handleChange,
  handleVisibility,
  setInput,
  isRequestVisible,
}: Props) => {
  return (
    <div className="relative">
      <div className="flex items-center p-3 mt-2 gap-4 bg-neutral-100 rounded-xl">
        <div>{icon}</div>
        <input
          type="text"
          placeholder={placeholder}
          value={searchText}
          onClick={handleVisibility}
          onChange={handleChange}
          className="block w-full bg-neutral-100 outline-none"
        />
      </div>
      {isVisible ? (
        <div className="px-12 bg-white border-2 border-black rounded-lg border-opacity-10 p-2 mt-1 shadow-lg absolute w-full z-10">
          {data?.map((city) => (
            <>
              <p
                key={city.id}
                className="py-2 hover:text-blue-700 hover:font-bold cursor-pointer"
              >
                {city.unique_name}
              </p>
              <hr className="w-full" />
            </>
          ))}
        </div>
      ) : searchText && isRequestVisible ? (
        <div className="px-12 bg-white border-2 border-black rounded-lg border-opacity-10 p-2 mt-1 shadow-lg absolute w-full z-10">
          {request?.map((text) => (
            <>
              <p
                key={text.city_id}
                className="py-2 hover:text-blue-700 hover:font-bold cursor-pointer"
                onClick={setInput(text.unique_name)}
              >
                {text.unique_name}
              </p>
              <hr className="w-full" />
            </>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Input;
