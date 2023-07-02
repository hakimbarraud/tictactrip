import { BeatLoader } from "react-spinners";

interface Prop {
  loading: boolean;
}

const Loader = ({ loading }: Prop) => {
  return (
    <div className="mx-auto text-center">
      <BeatLoader color="#f25c54" loading={loading} size={5} margin={0} />
    </div>
  );
};

export default Loader;
