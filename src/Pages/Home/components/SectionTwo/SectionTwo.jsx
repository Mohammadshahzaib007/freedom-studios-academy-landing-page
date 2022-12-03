import styles from "./sectionTwo.module.css";
import img from "../../../../assets/2.png";
import Text from "../../../../components/Text/Text";
import CheckMarkIcon from "../../../../components/icons/CheckMarkIcon";

function SectionTwo() {
  return (
    <section className={styles.section}>
      <div className="container">
        <img src={img} alt="section img" />

        <div className={styles.content}>
          <Text type="h5" style={{ marginBottom: "5px" }}>
            facilities
          </Text>
          <Text type="h2" style={{ marginBottom: "1.5625rem" }}>
            world class trainning
          </Text>

          <div>
            <CheckMarkIcon /> <Text type="h5">acces to Wifi</Text>
          </div>

          <div>
            <CheckMarkIcon /> <Text type="h5">fully airconditioned</Text>
          </div>

          <div>
            <CheckMarkIcon /> <Text type="h5">over 100 classes monthly</Text>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
