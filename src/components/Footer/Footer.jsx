import styles from "./footer.module.css";
import logo from "../../assets/logo.png";
import TwitterIcon from "../icons/TwitterIcon";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <img src={logo} alt="logo" />

        <div className={styles.icons}>
          <TwitterIcon />
          <FacebookIcon />
          <InstagramIcon />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
