import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genreID?: number;
  platformID?: number;
  sort: string | null;
  searchText: string | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
        // onSearchInput={(searchText) =>
        //   setGameQuery({ ...gameQuery, searchText })
        // }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelectGenre={(selectedGenreID) =>
              setGameQuery({ ...gameQuery, genreID: selectedGenreID })
            }
            selectedGenreID={gameQuery.genreID}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector
              onSelectPlatform={(selectedPlatformID) =>
                setGameQuery({ ...gameQuery, platformID: selectedPlatformID })
              }
              selectedPlatformID={gameQuery.platformID}
            ></PlatformSelector>
            <SortSelector
              onSelectSort={(sort) => setGameQuery({ ...gameQuery, sort })}
              selectedSort={gameQuery.sort}
            ></SortSelector>
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
