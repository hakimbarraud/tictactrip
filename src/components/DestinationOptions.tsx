import { Fragment } from "react";
import { DestinationType } from "../Hooks/useDestinationCities";

interface Props {
  destination?: DestinationType[] | undefined;
  setDestination?: (text: string) => () => void | undefined;
}

const DestinationOptions = ({
  destination,
  setDestination,
}: Pick<Props, "destination" | "setDestination">) => {
  return (
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
  );
};

export default DestinationOptions;
