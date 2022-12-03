import Chevron from "../icons/ChevronIcon";
import styles from "./button.module.css";

function Button(props) {
  const { children } = props;

  return (
    <button className={styles.btn}>
      {children} <Chevron />
    </button>
  );
}

export default Button;
