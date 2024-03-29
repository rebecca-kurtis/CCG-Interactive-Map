import styles from '../../styles/HomePage/MediumPlotElementHorizontal.module.css';

export default function MediumPlotElementHorizontal(props) {
  // console.log('plot props', props)
  const array = props.icons;
  const onClickFunc = props.onclick;
  // console.log('plants test', props.plants)

  const mappedIcons = array.map((url, index) => <img className={styles.iconImage} key={index} src={require('../../images/PlantIcons/' + url + '.png')} alt="icon" />)
  return (
    <div className={styles.mediumPlotElementContainer}>
      <div className={styles.mediumPlotElement} onClick={() => onClickFunc(props.plotID)}>
        <div className={styles.iconElement}>
        {/* <p className={styles.plotnum}>1</p> */}
        {mappedIcons}</div>
      </div>
    </div>
  );
}