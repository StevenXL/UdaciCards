import { StackNavigator } from "react-navigation";

import DeckList from "./DeckList";
import Deck from "./Deck";
import Quiz from "./Quiz";
import CardForm from "./CardForm";
import NewDeckForm from "./NewDeckForm";

const StackNavigation = StackNavigator({
  Home: { screen: DeckList },
  Deck: { screen: Deck },
  Quiz: { screen: Quiz },
  CardForm: { screen: CardForm },
  NewDeckForm: { screen: NewDeckForm }
});

export default StackNavigation;
