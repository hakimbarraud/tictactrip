const ToggleSwitch = () => {
  return (
    <div className="flex items-center gap-2 italic text-sm">
      <label
        htmlFor="check"
        className="bg-gray-100 mt-2 block w-12 h-7 border-2 rounded-full cursor-pointer relative"
      >
        <input type="checkbox" className="sr-only peer" id="check" />
        <span className="w-1/2 h-4 border-2 bg-white absolute rounded-full left-1 top-1 bottom-1 right-1 peer-checked:bg-sky-600 peer-checked:left-4 transition-all duration-200 flex items-center"></span>
      </label>
      <p className="text-xs">Find my accommodation.</p>
    </div>
  );
};

export default ToggleSwitch;
