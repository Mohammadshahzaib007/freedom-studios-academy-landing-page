import styles from "./sectionThree.module.css";
import img from "../../../../assets/3.png";
import Text from "../../../../components/Text/Text";

function SectionThree() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <Text type="h5" style={{ marginBottom: "0.3125rem" }}>
            meet our leader
          </Text>
          <Text type="h2" style={{ marginBottom: "0.625rem" }}>lord josh</Text>
          <Text type="body2">
            He is an oscar award scriptwritter, director of a movie titles sons
            of sceva. He is a farher of a beautiful daughter and the huband of
            Mrs olan.
          </Text>
        </div>

        <img src={img} alt="section img" />
      </div>
    </section>
  );
}

export default SectionThree;
