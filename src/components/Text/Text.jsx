import styles from "./text.module.css";

function Text(props) {
  const { type, children, style } = props;

  switch (type) {
    case "h1":
      return (
        <h1 className={`${styles.common} ${styles.heading1}`} style={style}>
          {children}
        </h1>
      );

    case "h2":
      return (
        <h2 className={`${styles.common} ${styles.heading2}`} style={style}>
          {children}
        </h2>
      );

    case "h3":
      return (
        <h3 className={`${styles.common} ${styles.heading3}`} style={style}>
          {children}
        </h3>
      );

    case "h4":
      return (
        <h4 className={`${styles.common} ${styles.heading4}`} style={style}>
          {children}
        </h4>
      );

    case "h5":
      return (
        <h5 className={`${styles.common} ${styles.heading5}`} style={style}>
          {children}
        </h5>
      );

    case "body1":
      return (
        <p className={`${styles.common} ${styles.body1}`} style={style}>
          {children}
        </p>
      );

    case "body2":
      return (
        <p className={`${styles.common} ${styles.body2}`} style={style}>
          {children}
        </p>
      );

    default:
      return <p className={styles.common}>{children}</p>;
  }
}

export default Text;
