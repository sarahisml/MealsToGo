import React from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg"; //scalable vector graph
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  Icon,
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  Rating,
  OpenOrClosed,
  Address,
} from "../components/restaurant-info-card.styles";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

export const RestaurantsInfo = ({ restaurant = {} }) => {
  //deconstructuring
  //restaurant is an object that contains properties that we want to take
  const {
    name = "Super Saigon",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 Some Random Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating))); //always round up rating
  //source using photos[0], so that it can run through all the photos in the API

  return (
    <View>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover source={{ uri: photos[0] }} />
        <Info>
          <Text>{name}</Text>
          <Section>
            <Rating>
              {ratingArray.map((_, i) => (
                <SvgXml
                  key={`star-${placeId}-${i}}`}
                  xml={star}
                  width={20}
                  height={20}
                />
              ))}
            </Rating>
            <OpenOrClosed>
              {isClosedTemporarily && (
                <Text variant="error">CLOSED TEMPORARILY</Text>
              )}
              <Spacer position="left" size="large">
                {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              </Spacer>
            </OpenOrClosed>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </Section>
          <Address>{address}</Address>
        </Info>
      </RestaurantCard>
    </View>
  );
};
