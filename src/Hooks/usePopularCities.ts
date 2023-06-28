import { useQuery } from "@tanstack/react-query";
import apiClient from "../Services/api-client";

// interface Cities {
//   id: number;
//   unique_name: string;
// }

export interface PopulatCities {
  id: number;
  unique_name: string;
}

const usePopularCities = () =>
  useQuery<PopulatCities[]>({
    queryKey: ["popular cities"],
    queryFn: () => apiClient.get("/popular/5").then((res) => res.data),
  });

export default usePopularCities;
