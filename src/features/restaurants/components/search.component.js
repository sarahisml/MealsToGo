import React, { useContext, useState } from "react";
import styled from "styled-components";
import { View } from "react-native";
import { LocationContext } from "../../../services/location/location.context";
import { Searchbar } from "react-native-paper";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  //console.log("searchKeyword is %s ", searchKeyword);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
          console.log("searchKeyword is %s ", searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
          console.log("text is $s ", text);
        }}
      />
    </SearchContainer>
  );
};
