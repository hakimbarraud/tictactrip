import { useQuery } from "@tanstack/react-query";
import apiClient from "../Services/api-client";

export interface AutocompleteType {
  city_id: number;
  unique_name: string;
}

const useAutocomplete = (searchText?: string) =>
  useQuery<AutocompleteType[]>({
    queryKey: ["value", searchText],
    queryFn: () =>
      apiClient
        .get("/autocomplete", { params: { q: searchText } })
        .then((res) => res.data),
  });

export default useAutocomplete;
 