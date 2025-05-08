import apiClient, { FetchResponse } from "@/services/api.client";
import { useQuery } from "@tanstack/react-query";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatform = () => useData<Platform>("/platforms");

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24 hrs
  });

export default usePlatform;
