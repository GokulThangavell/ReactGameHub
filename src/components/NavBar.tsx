import { ColorModeScript, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearchInput: (searchText: string) => void;
}

const NavBar = ({ onSearchInput }: Props) => {
  return (
    <HStack padding="10pxq">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearchInput={onSearchInput}></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
