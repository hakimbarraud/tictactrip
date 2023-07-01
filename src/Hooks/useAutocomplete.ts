import { useQuery } from "@tanstack/react-query";
import apiClient from "../Services/api-client";

export interface AutocompleteType {
  city_id: number;
  unique_name: string;
}

const useAutocomplete = (value?: string) =>
  useQuery<AutocompleteType[]>({
    queryKey: ["value", value],
    queryFn: () =>
      apiClient
        .get("/autocomplete", { params: { q: value } })
        .then((res) => res.data),
  });

export default useAutocomplete;
