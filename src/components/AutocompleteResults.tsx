import { Fragment } from "react";
import { AutocompleteType } from "../Hooks/useAutocomplete";

interface Props {
  request?: AutocompleteType[] | undefined;
  setInput?: (text: string) => () => void | undefined;
}

const AutocompleteResults = ({
  request,
  setInput,
}: Pick<Props, "request" | "setInput">) => {
  return (
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
  );
};

export default AutocompleteResults;
