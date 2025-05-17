import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "@/services/api.client";
import { convertHoursToMilliSeconds } from "../utils/timeConverter";
// import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

// const useGenres = () => ({ data: genres, error: null, isLoading: null });
// const useGenres = () => useData<Genre>("/genres");
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: convertHoursToMilliSeconds(24), //24 hrs
    // initialData:
  });

export default useGenres;
