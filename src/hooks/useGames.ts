import { GameQuery } from "@/App";
import { Platform } from "./usePlatform";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import APIClient from "@/services/api.client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
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
