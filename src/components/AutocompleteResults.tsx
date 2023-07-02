import { Fragment } from "react";
import useAutocomplete from "../Hooks/useAutocomplete";
import Loader from "./Loader";

// Define the shape of the props expected by the component
interface Props {
  setInput?: (text: string) => () => void; // Function to set the value of the input to the city selected in the list of autocompletion
  text: string; // City selected in the first input (it's used to display the most popular destinations from this city)
}

const AutocompleteResults = ({ setInput, text }: Props) => {
  const { data, isLoading } = useAutocomplete(text); // Call the useAutocomplete custom hook to fetch autocomplete data based on the input text

  return (
    <div className="px-12 bg-white border-2 border-black rounded-lg border-opacity-10 p-2 mt-1 shadow-lg absolute w-full z-10">
      {isLoading && <Loader loading={isLoading} />}
      {data?.map((text) => (
        <Fragment key={text.city_id}>
          <p
            className="py-2 hover:text-red-400 hover:font-bold cursor-pointer"
            onClick={setInput?.(text.unique_name)}
          >
            {text.unique_name}
          </p>
          <hr className="w-full" />
        </Fragment>
      ))}
    </div>
  );
};

export default AutocompleteResults;
