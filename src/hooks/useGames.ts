import { GameQuery } from "@/App";
import { Platform } from "./usePlatform";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "@/services/api.client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClient<Game>("/games");

const fetchData = async ({ pageParam = 0 }) => {
  return await fetch(`.../?page=${pageParam}`).then((res) => res.json());
};

// const useInfiniteGames = (gameQuery: GameQuery) => {
//   useInfiniteQuery<FetchResponse<Game>, Error>({
//     queryKey: ["infiniteScroll", gameQuery],
//     queryFn: () =>
//       apiClient.getAll({
//         params: {
//           genres: gameQuery.genreId,
//           parent_platforms: gameQuery.platformId,
//           ordering: gameQuery.sortOrder,
//           search: gameQuery.searchText,
//         },
//       }),
//   });
// };

const useGames = (gameQuery: GameQuery) => {
  return useInfiniteQuery<FetchResponse<Game>, Error>({
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
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, //24 hours
  });
};

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
