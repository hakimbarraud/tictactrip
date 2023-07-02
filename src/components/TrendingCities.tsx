import { Fragment } from "react";
import usePopularCities from "../Hooks/usePopularCities";
import Loader from "./Loader";

// Declare the shape of the props that this component accepts
interface Props {
  setInput?: (text: string) => () => void; // Set the value of the input to the item selected in the list displayed
}

const TrendingCities = ({ setInput }: Props) => {
  const { data, isLoading } = usePopularCities(); // Call the usePopularCities custom hook and destructure the returned data and isLoading variables

  return (
    <div className="px-12 bg-white border-2 border-black rounded-lg border-opacity-10 p-2 mt-1 shadow-lg absolute w-full z-10">
      <p className="text-sm text-neutral-400">Trending Cities</p>
      {isLoading && <Loader loading={isLoading} />}
      {data?.map((city) => (
        <Fragment key={city.id}>
          <p
            className="py-2 hover:text-red-400 hover:font-bold cursor-pointer"
            onClick={setInput?.(city.unique_name)}
          >
            {city.unique_name}
          </p>
          <hr className="w-full" />
        </Fragment>
      ))}
    </div>
  );
};

export default TrendingCities;
