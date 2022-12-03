import Button from "../../../../components/Button/Button";
import Text from "../../../../components/Text/Text";
import styles from "./sectionFour.module.css";

function SectionFour() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <Text type="h4" style={{ marginBottom: "0.3125rem" }}>
            first semester
          </Text>
          <Text type="h1" style={{ marginBottom: "0.625rem" }}>
            freedom studios academy
          </Text>
          <Text type="body1" style={{ marginBottom: "1.875rem" }}>
            Taking the message of freedom to the end of the earth through media
            and representing christ in every way.
          </Text>

          <Button>Select a membership plan</Button>
        </div>
      </div>
    </section>
  );
}

export default SectionFour;
