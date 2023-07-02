import { Fragment } from "react";
import useDestinationCities from "../Hooks/useDestinationCities";
import Loader from "./Loader";

// Define the shape of the props of the component
interface Props {
  setDestination?: (text: string) => () => void; // Function to set the value of the input to the city selected in the list of popular destinations
  city: string; // value of the text set in the first input (used to display the popular destinations)
}

const DestinationOptions = ({ setDestination, city }: Props) => {
  const { data, isLoading } = useDestinationCities(city); // Fetch the data and loading state of the useDestinationCities custom hook

  if (!city) return null; // Hide the component if no value has been provided in the first input field

  return (
    <div className="px-12 bg-white border-2 border-black rounded-lg border-opacity-10 p-2 mt-1 shadow-lg absolute w-full z-10">
      <p className="text-sm text-neutral-400">
        Popular Destinations from "
        {city.charAt(0).toUpperCase() + city.slice(1)}"
      </p>
      {isLoading && <Loader loading={isLoading} />}
      {data?.map((city) => (
        <Fragment key={city.id}>
          <p
            className="py-2 hover:text-red-400 hover:font-bold cursor-pointer"
            onClick={setDestination?.(city.unique_name)}
          >
            {city.unique_name}
          </p>
          <hr className="w-full" />
        </Fragment>
      ))}
    </div>
  );
};

export default DestinationOptions;
