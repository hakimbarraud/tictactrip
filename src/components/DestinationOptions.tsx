import { Fragment } from "react";
import useDestinationCities from "../Hooks/useDestinationCities";

interface Props {
  setDestination?: (text: string) => () => void;
  city: string;
}

const DestinationOptions = ({
  setDestination,
  city,
}: Pick<Props, "setDestination" | "city">) => {
  const { data } = useDestinationCities(city);
  return (
    <div className="px-12 bg-white border-2 border-black rounded-lg border-opacity-10 p-2 mt-1 shadow-lg absolute w-full z-10">
      <p className="text-sm text-neutral-400">Popular Destinations</p>
      {data?.map((city) => (
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
  );
};

export default DestinationOptions;
