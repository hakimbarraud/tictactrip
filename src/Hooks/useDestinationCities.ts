import { useQuery } from "@tanstack/react-query";
import apiClient from "../Services/api-client";

export interface DestinationType {
  id: number;
  unique_name: string;
}

const useDestinationCities = (searchText: string) =>
  useQuery<DestinationType[]>({
    queryKey: ["destination", searchText],
    queryFn: () =>
      apiClient.get(`/popular/from/${searchText}/5`).then((res) => res.data),
  });

export default useDestinationCities;
