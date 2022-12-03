import styles from "./heroSection.module.css";
import logo from "../../../assets/logo.png";
import Text from "../../../components/Text/Text";
import Button from "../../../components/Button/Button";
import CalendarIcon from "../../../components/icons/CalendarIcon";
import GroupIcon from "../../../components/icons/GroupIcon";
import LaptopIcon from "../../../components/icons/LaptopIcon";

function HeroSection() {
  return (
    <>
      <section className={styles.section}>
        <div className={`container ${styles.contentContainer}`}>
          <img src={logo} alt="logo" />

          <div className={styles.textContainer}>
            <Text type="h4" style={{ marginBottom: "0.3125rem" }}>
              first semester
            </Text>
            <Text type="h1" style={{ marginBottom: "0.625rem" }}>
              freedom studios academy
            </Text>
            <Text type="body1" style={{ marginBottom: "1.875rem" }}>
              Taking the message of freedom to the end of the earth through
              media and representing christ in every way.
            </Text>

            <Button>Select a membership plan</Button>
          </div>
        </div>
      </section>

      <section className={styles.benefitsContainer}>
        <div className="container">
          <div className={styles.benefitsContent}>
            <div>
              <Text type="h2">
                members <br /> benefits
              </Text>
            </div>

            <div>
              <CalendarIcon />
              <div>
                <Text type="h2">2 weeks</Text>
                <Text type="h3">internship</Text>
              </div>
            </div>

            <div>
              <GroupIcon />
              <div>
                <Text type="h2">24/7</Text>
                <Text type="h3">mentorhip</Text>
              </div>
            </div>

            <div>
              <LaptopIcon />
              <div>
                <Text type="h2">2 free</Text>
                <Text type="h3">e-books</Text>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
