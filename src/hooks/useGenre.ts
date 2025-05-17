import useGenres from "./useGenres";

const useGenre = (id?: number) => {
  const { data: genres } = useGenres();
  return id ? genres?.results.find((g) => g.id === id) : undefined;
};

export default useGenre;
