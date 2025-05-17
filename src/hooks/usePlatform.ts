import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data: platforms } = usePlatforms();

  return id ? platforms?.results.find((p) => p.id === id) : undefined;
};

export default usePlatform;
