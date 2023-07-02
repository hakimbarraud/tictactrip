import { Fragment } from "react";
import useAutocomplete from "../Hooks/useAutocomplete";
import Loader from "./Loader";

interface Props {
  setInput?: (text: string) => () => void;
  text: string;
}

const AutocompleteResults = ({
  setInput,
  text,
}: Pick<Props, "setInput" | "text">) => {
  const { data, isLoading } = useAutocomplete(text);

  return (
    <div className="px-12 bg-white border-2 border-black rounded-lg border-opacity-10 p-2 mt-1 shadow-lg absolute w-full z-10">
      {isLoading && <Loader loading={isLoading} />}
      {data?.map((text) => (
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
  );
};

export default AutocompleteResults;
