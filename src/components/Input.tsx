import { ReactNode } from "react";

interface Props {
  placeholder: string;
  icon: ReactNode;
}

const Input = ({ placeholder, icon }: Props) => {
  return (
    <div className="flex items-center bg-neutral-100 rounded-xl p-3 mt-2 gap-4">
      <div>{icon}</div>
      <input
        type="text"
        placeholder={placeholder}
        className="block w-full bg-neutral-100 outline-none"
      />
    </div>
  );
};

export default Input;
