import APIClient, { FetchResponse } from "@/services/api.client";
import { useQuery } from "@tanstack/react-query";
import { convertHoursToMilliSeconds } from "../utils/timeConverter";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatform = () => useData<Platform>("/platforms");

const apiClient = new APIClient<Platform>("/platforms");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: convertHoursToMilliSeconds(24),
  });

export default usePlatforms;
