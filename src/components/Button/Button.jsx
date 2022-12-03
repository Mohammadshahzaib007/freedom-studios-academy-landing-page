import styles from "./button.module.css";

function Button(props) {
  const { children } = props;

  return <button className={styles.btn}>{children}</button>;
}

export default Button;
