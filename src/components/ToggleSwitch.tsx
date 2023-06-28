const ToggleSwitch = () => {
  return (
    <div className="flex items-end gap-2 italic text-sm">
      <label
        htmlFor="check"
        className="bg-gray-100 mt-2 block w-20 h-10 rounded-full cursor-pointer relative"
      >
        <input type="checkbox" className="sr-only peer" id="check" />
        <span className="w-2/5 h-4/5 bg-white absolute rounded-full left-1 top-1 peer-checked:bg-sky-600 peer-checked:left-11 transition-all duration-200"></span>
      </label>
      <p>Find my accomodation.</p>
    </div>
  );
};

export default ToggleSwitch;
