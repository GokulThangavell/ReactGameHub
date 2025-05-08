import { GameQuery } from "@/App";
import { Platform } from "./usePlatform";
import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "@/services/api.client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sort,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
  });

// useData<Game>(
//   "/games",
//   {
// params: {
//   genres: gameQuery.genre?.id,
//   platforms: gameQuery.platform?.id,
//   ordering: gameQuery.sort,
//   search: gameQuery.searchText,
// },
//   },
//   [gameQuery]
// );

export default useGames;
