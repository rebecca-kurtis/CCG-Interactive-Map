import styles from "../styles/HomePageIndex.module.css";
import GardenSectionOne from "./GardenSections/GardenSectionOne";
import GardenSectionThree from "./GardenSections/GardenSectionThree";
import GardenSectionTwo from "./GardenSections/GardenSectionTwo";
import TopPathVertical from "./Paths/TopPathVertical";

export default function HomePageIndex() {
  return (
    <div className={styles.homePageContainer}>
      Home Page
      <div className={styles.mapContainer}>
        <div className={styles.mapContainerRow}>
          <GardenSectionOne />
          <TopPathVertical />
          <GardenSectionTwo />
        </div>
        <hr className={styles.dividerLine}></hr>
        <div className={styles.mapContainerRow}>
          <div className={styles.spaceBlocker} />
          <hr className={styles.dividerLineVertical}></hr>
          <GardenSectionThree />
        </div>
      </div>
    </div>
  );
}
