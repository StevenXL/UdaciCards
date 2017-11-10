import { StackNavigator } from "react-navigation";

import DeckList from "./DeckList";
import Deck from "./Deck";

const StackNavigation = StackNavigator({
  Home: { screen: DeckList },
  Deck: { screen: Deck }
});

export default StackNavigation;
