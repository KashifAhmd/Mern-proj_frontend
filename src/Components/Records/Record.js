import { useEffect, useContext } from "react";
import { useAuthContext } from "../../Hooks/useAuthContext";

import { Data } from "../../Context/WorkoutContext";

import "./RecordStyle.css";

export const Record = () => {
  const {user} = useAuthContext();

  //State for getting the data
  const { workouts, getWorkouts , deleteWorkout, toggleUpdate } = useContext(Data);

  // useEffect(() => {
  //   if(user){
  //     getWorkouts();
  //   }
  // }, [user, getWorkouts]);

  useEffect(()=>{
    getWorkouts();
  },[])

  return (
    <div>
    {workouts &&
        workouts.map((item) => {
          return (
            <div className="record" key={item._id}>
             
             <h1> {item.title} </h1>
              <p>Reps: {item.reps} </p>
              <p>Load(in Kg): {item.load} </p>
             
              <div className="btn">
              <button className="btn1" onClick={() => toggleUpdate(item)}>Edit</button>{" "}
              <button className="btn2" onClick={() => deleteWorkout(item._id)}>Delete</button> 
              </div>
            </div>
          );
        })} 
    </div>
  );
};
