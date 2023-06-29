import { useQuery } from "@tanstack/react-query";
import apiClient from "../Services/api-client";

interface DestinationType {
  id: number;
  unique_name: string;
}

const useDestinationCities = () =>
  useQuery<DestinationType[]>({
    queryKey: ["destination"],
    queryFn: () =>
      apiClient.get(`/popular/from/paris/5`).then((res) => res.data),
  });

export default useDestinationCities;
