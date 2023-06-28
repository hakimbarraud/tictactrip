import { ReactNode } from "react";
import { PopulatCities } from "../Hooks/usePopularCities";

interface Props {
  placeholder: string;
  icon: ReactNode;
  data?: PopulatCities[] | undefined;
  isVisible?: boolean;
  handleVisibility?: () => void;
}

const Input = ({
  placeholder,
  icon,
  data,
  isVisible,
  handleVisibility,
}: Props) => {
  return (
    <div className="relative">
      <div className="flex items-center p-3 mt-2 gap-4 bg-neutral-100 rounded-xl">
        <div>{icon}</div>
        <input
          type="text"
          placeholder={placeholder}
          className="block w-full bg-neutral-100 outline-none"
          onClick={handleVisibility}
        />
      </div>
      {isVisible && (
        <div className="px-12 bg-white border-2 border-black rounded-lg border-opacity-10 p-2 mt-1 shadow-lg absolute w-full z-10">
          {data?.map((city) => (
            <>
              <p
                key={city.id}
                className="py-2 hover:text-blue-700 cursor-pointer"
              >
                {city.unique_name}
              </p>
              <hr className="w-full" />
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default Input;
