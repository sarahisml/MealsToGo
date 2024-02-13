import React, { useContext } from "react";
import styled from "styled-components";
import { View, FlatList } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { RestaurantsInfo } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingIndicator = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainter = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainter>
          <LoadingIndicator
            size={50}
            animating={true}
            color={MD2Colors.blue300}
          />
        </LoadingContainter>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <RestaurantsInfo restaurant={item} />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
