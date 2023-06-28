import usePopularCities from "./Hooks/usePopularCities";
import SearchBar from "./components/SearchBar";

function App() {
  const { data } = usePopularCities();

  console.log(data);
  return (
    <div className="p-4 bg-white rounded-lg">
      <SearchBar />
    </div>
  );
}

export default App;
