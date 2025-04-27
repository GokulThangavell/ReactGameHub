import useData from "./useData";
// import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => ({ data: genres, error: null, isLoading: null });
const useGenres = () => useData<Genre>("/genres");

export default useGenres;
