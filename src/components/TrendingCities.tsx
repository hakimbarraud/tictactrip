import { Fragment } from "react";
import usePopularCities from "../Hooks/usePopularCities";
import Loader from "./Loader";

interface Props {
  setInput?: (text: string) => () => void;
}

const TrendingCities = ({ setInput }: Props) => {
  const { data, isLoading } = usePopularCities();

  return (
    <div className="px-12 bg-white border-2 border-black rounded-lg border-opacity-10 p-2 mt-1 shadow-lg absolute w-full z-10">
      <p className="text-sm text-neutral-400">Trending Cities</p>
      {isLoading && <Loader loading={isLoading} />}
      {data?.map((city) => (
        <Fragment key={city.id}>
          <p
            className="py-2 hover:text-blue-700 hover:font-bold cursor-pointer"
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
