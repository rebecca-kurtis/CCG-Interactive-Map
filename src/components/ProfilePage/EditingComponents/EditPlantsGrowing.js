import styles from "../../styles/ProfilePage/PlantsGrowing.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import getAllPlants from "../../../helpers/getAllPlants";

export default function EditPlantsGrowing(props) {
  const plantsArray = props.plants;
  const [plantInfoArray, setPlantInfoArray] = useState(props.plantInfo);
  const plantIconsArray = [];
  // const [plantsIcons, setPlantIcons] = useState([]);
  let plantIcons = [];

  // const [plantsIcons, setPlantIcons] = useState([plantIconsArray]);
  const plotID = parseInt(props.plotID);

  const [mode, setMode] = useState(true);
  const [addNewMode, setAddNewMode] = useState(false);
  // const [plantsGrowingState, setPlantsGrowingState] = useState(plantIcons);
  // const [deletePPValue, setDeletePPValue] = useState(null);

  //collect all of the plantedPlants
  for (let plotObject in plantsArray) {
    for (let plantInfoObject in plantInfoArray) {
      if (
        plantsArray[plotObject].plot_id === plotID &&
        plantsArray[plotObject].plant_id ===
          plantInfoArray[plantInfoObject].plant_id
      ) {
        const name = plantInfoArray[plantInfoObject].name;
        const photo_url = plantInfoArray[plantInfoObject].photo_url;
        const plantedPlants_id = plantsArray[plotObject].plantedplants_id;
        plantIcons.push([name, photo_url, plantedPlants_id]);
      }
    }
  }
  // console.log("plantIcons above state", plantIcons);
  const [plantsGrowingState, setPlantsGrowingState] = useState(plantIcons);

  // const [plantsGrowingState, setPlantsGrowingState] = useState(plantIcons);
  // console.log("plantsgrowingstate below state", plantsGrowingState);

  // setPlantIcons(plantIconsArray);
  // const [plantsIcons, setPlantIcons] = useState([]);

  // console.log("plantinfoarray", plantInfoArray);
  const [form, setForm] = useState({
    plotID: plotID,
  });

  // const [mode, setMode] = useState(true);
  // const [addNewMode, setAddNewMode] = useState(false);
  // const [plantsGrowingState, setPlantsGrowingState] = useState(plantIcons);

  // Set the value of a single element of the object
  const setValue = (key, value) => {
    setForm({ ...form, [key]: value });
  };
  const aboutEditRoute =
    process.env.REACT_APP_SERVER +
    ":" +
    process.env.REACT_APP_SERVER_PORT +
    "/updateAbout/:id";

  const handleUserSubmit = (e) => {
    e.preventDefault();
    setForm(form);
    setMode(true);

    // axios.post(usersRoute, form)
    // .then((response) => {
    //   console.log('response', response);
    //   const data = response.data.loginKey;

    //   // updateUserStorage(data[0]);

    //   setForm(data[0]);
    //   // toggleAccount();
    //   // setForm(data[0]);
    //   // getUserOrderInfo(response.data.cartKey)
    //   console.log("formData", form);

    //   return response.data
    // })
    // .catch((error) => {
    //   if (error.response) {
    //     alert(`Error! ${error.message}`);
    //   } else if (error.request) {
    //     console.log("network error");
    //   } else {
    //     console.log(error);
    //   }
    // });
  };

  const handleClick = () => {
    // console.log("click");
    setMode(false);
  };

  const handleClickUpdate = () => {
    // console.log("click");
    setMode(true);
  };

  const handleClickAddNew = () => {
    // console.log("click");
    // setMode(false);
    // setMode(false);

    setAddNewMode(true);
    // console.log("state", addNewMode);
  };

  // console.log("state", addNewMode);

  const [deletePPValue, setDeletePPValue] = useState(null);

  const plantedPlantDeleteRoute =
    process.env.REACT_APP_SERVER +
    ":" +
    process.env.REACT_APP_SERVER_PORT +
    "/deletePlantedPlant";

    // console.log('plantIcons', plantIcons);

  const plantedPlantDeleteHandler = (e, num) => {
    // console.log("delete");

    e.preventDefault();

    axios
      .post(plantedPlantDeleteRoute, {
        deleteValue: num,
        plotID: form.plotID,
      })
      .then((response) => {
        console.log('response from delete', response);

        plantIcons = [];

        for (let plotObject in response.data) {
          // console.log('data', response.data[plotObject]);
          for (let plantInfoObject in plantInfoArray) {
          // console.log('data2',plantInfoArray[plantInfoObject]);
          // console.log('data2', response.data[plotObject].plot_id);
          // console.log('data3',response.data[plotObject].plant_id);
          // console.log('data4', plantsArray[plotObject]);
          // console.log('data5', plantsArray[plotObject].plantedplants_id);
          


            if (
              response.data[plotObject].plot_id === plotID &&
              response.data[plotObject].plant_id ===
                plantInfoArray[plantInfoObject].plant_id
            ) {
              // console.log('Found');
              const name = plantInfoArray[plantInfoObject].name;
              const photo_url = plantInfoArray[plantInfoObject].photo_url;
              const plantedPlants_id = response.data[plotObject].plantedplants_id;
              plantIcons.push([name, photo_url, plantedPlants_id]);
              // console.log('plantIcons', plantIcons)
              // console.log('id',plantedPlants_id )
            }
          }
        }

        setPlantsGrowingState(plantIcons);

        return response.data;
      })
      .catch((error) => {
        if (error.response) {
          alert(`Error! ${error.message}`);
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
  };

  const addPlantRoute =
    process.env.REACT_APP_SERVER +
    ":" +
    process.env.REACT_APP_SERVER_PORT +
    "/addPlant";

    const [addNewPlant, setAddNewPlant] = useState({});

  const handleAddPlantButton = (e) => {
    e.preventDefault();
    // console.log('test', addNewPlant);

    axios
      .post(addPlantRoute, {
        plotID: form.plotID,
        name: addNewPlant.name,
      })
      .then((response) => {
        // console.log('response for add', response);
        
        plantIcons = [];

        for (let plotObject in response.data) {
          // console.log('data', plotObject);
          for (let plantInfoObject in plantInfoArray) {
            if (
              response.data[plotObject].plot_id === plotID &&
              response.data[plotObject].plant_id ===
                plantInfoArray[plantInfoObject].plant_id
            ) {
              const name = plantInfoArray[plantInfoObject].name;
              const photo_url = plantInfoArray[plantInfoObject].photo_url;
              const plantedPlants_id = plantsArray[plotObject].plantedplants_id;
              plantIcons.push([name, photo_url, plantedPlants_id]);
            }
          }
        }

        setPlantsGrowingState(plantIcons);
        setAddNewPlant({});

        return response.data;
      })
      .catch((error) => {
        if (error.response) {
          alert(`Error! ${error.message}`);
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
  };

  const createPlantRoute =
    process.env.REACT_APP_SERVER +
    ":" +
    process.env.REACT_APP_SERVER_PORT +
    "/createPlant";

    const [createNewPlant, setCreateNewPlant] = useState({});

  const handleCreatePlantButton = (e) => {
    e.preventDefault();

    axios
      .post(createPlantRoute, {
        plotID: form.plotID,
        name: createNewPlant.name
      })
      .then((response) => {

        getAllPlants()
        .then((data) => {
          setPlantInfoArray(data);
        }).then(() => {
          plantIcons = [];

        for (let plotObject in response.data) {
          for (let plantInfoObject in plantInfoArray) {
            if (
              response.data[plotObject].plot_id === plotID &&
              response.data[plotObject].plant_id ===
                plantInfoArray[plantInfoObject].plant_id
            ) {
              const name = plantInfoArray[plantInfoObject].name;
              const photo_url = plantInfoArray[plantInfoObject].photo_url;
              const plantedPlants_id = response.data[plotObject].plantedplants_id;
              plantIcons.push([name, photo_url, plantedPlants_id]);
            }
          }
        }

        setPlantsGrowingState(plantIcons);
        setCreateNewPlant({
          name: ""
        });

        return response.data;
        });
      })
      .catch((error) => {
        if (error.response) {
          alert(`Error! ${error.message}`);
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
  };

  const mappedIcons = plantsGrowingState.map((array, index) => (
    <li className={styles.plantsGrowingLiContainer} key={index}>
      <span className={styles.roundCircleLi}>&#9679;</span>
      <img
        className={styles.plantsGrowingIconImage}
        src={require(".././../images/PlantIcons/" + array[1] + ".png")}
        alt="icon"
      ></img>
      <p>{array[0]}</p>
    </li>
  ));

  const editMappedIcons = plantsGrowingState.map((array, index) => (
    <li className={styles.plantsGrowingLiContainer} key={index}>
      <button
        type="submit"
        onClick={(e) => {
          plantedPlantDeleteHandler(e, array[2]);
          console.log("deleteValue", array);
        }}
        className={styles.xDeleteLI}
      >
        &#10005;
      </button>

      <img
        className={styles.plantsGrowingIconImage}
        src={require(".././../images/PlantIcons/" + array[1] + ".png")}
        alt="icon"
      ></img>
      <p>{array[0]}</p>
    </li>
  ));

  const selectOptions = [];

  for (const keyID in plantInfoArray) {

    selectOptions.push(
      <option key={keyID} value={plantInfoArray[keyID].name}>
        {plantInfoArray[keyID].name}
      </option>
    );
  }

  if (mode === true) {
    return (
      <div className={styles.plantsGrowingContainer}>
        <div className={styles.editPlantsHeader}>
          <h2 className={styles.plantsGrowingContainerH2}>Plants Growing:</h2>
          <button
            type="create"
            className={styles.editPlantsButton}
            onClick={handleClick}
          >
            Edit
          </button>
        </div>
        <ul>{mappedIcons}</ul>
        {/* <button
            type="submit"
            className={styles.editPlantsButton}
            onClick={handleClickAddNew}
          >
            Add New Plant
          </button> */}
      </div>
    );
  }

  if (mode === false) {
    return (
      <div className={styles.plantsGrowingContainer}>
        <h2 className={styles.plantsGrowingContainerH2}>Plants Growing:</h2>
        <button
          type="create"
          className={styles.editPlantsButton}
          onClick={handleClickUpdate}
        >
          Update
        </button>
        <ul>
          {editMappedIcons}
        </ul>
        <form
            className={styles.addNewTipsSectionForm}
          >
            <div className={styles.addNewPlantDivContainer}>
            <label className="form-label">Add A New Plant:</label>
              <select
                name={"new-plant"}
                onChange={(e) => {
                  setAddNewPlant({ name: e.target.value });
                }}
                required
              >
                {selectOptions}
              </select>
              <div className={styles.editButtonRow}>
              <button 
              type="submit" 
              className={styles.tipsButton}
              onClick={handleAddPlantButton}>
                Add Plant
              </button>
              {/* <button
                type="delete"
                // onClick={handleAddPlantButton}
                className={styles.tipsButton}
              >
                Cancel
              </button> */}
            </div>
              <label className="form-label">Create New Plant:</label>
              <input
                className={styles.inputTextName}
                type="text"
                name="first_name"
                value={createNewPlant.name}
                placeholder="Enter plant name"
                onChange={(e) => {
                  setCreateNewPlant({name: e.target.value})
                }}
                required
              ></input>
            </div>

            <div className={styles.editButtonRow}>
              <button 
              type="submit" 
              className={styles.tipsButton}
              onClick={handleCreatePlantButton}>
                Create Plant
              </button>
              <button
                type="delete"
                className={styles.tipsButton}
                onClick={() => {
                  setCreateNewPlant({
                    name: ""
                  });
                }}
              >
                Cancel
              </button>
            </div>
          </form>
      </div>
    );
  }
}
