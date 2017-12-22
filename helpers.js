import styles from "./styles";

export const centerAll = [
  styles.flexOne,
  styles.justifyCenter,
  styles.alignCenter
];

export const calculatePercent = (correct, attempts) =>
  Math.round(correct / attempts * 100);
