import styles from '../../styles/LargePlotElement.module.css';


export default function LargePlotElement() {
  return (
    <div className={styles.LargePlotElementContainer}>
      LargePlotElement
      <div className={styles.LargePlotElement}>
        <div className={styles.iconElement}>icon</div>
      </div>
    </div>
  );
}