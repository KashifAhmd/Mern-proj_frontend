import axios from "axios";
import { useAuthContext } from "../Hooks/useAuthContext";
import React, { createContext, useState } from "react";

export const Data = createContext();

const WorkoutContext = ({ children }) => {
  const { user } = useAuthContext();

  //GET REQUEST STATE
  const [workouts, setWorkouts] = useState(null);

  //GET REQUEST FUNCTION
  const getWorkouts = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API}api/workouts`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    const data = response.data;

    setWorkouts(data);
  };

  //POST REQUEST STATE
  const [form, setForm] = useState({
    title: "",
    reps: "",
    load: "",
  });

  //DELETE REQUEST
  const deleteWorkout = async (_id) => {
    await axios.delete(`${process.env.REACT_APP_API}api/workouts/${_id}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    getWorkouts();
  };

  //UPDATE REQUEST
  const [updateForm, setUpdateForm] = useState({
    _id: null,
    title: "",
    reps: "",
    load: "",
  });

  const toggleUpdate = (item) => {
    setUpdateForm({
      _id: item._id,
      title: item.title,
      reps: item.reps,
      load: item.load,
    });
  };

  return (
    <>
      <Data.Provider
        value={{
          workouts,
          setWorkouts,
          getWorkouts,
          form,
          setForm,
          deleteWorkout,
          updateForm,
          setUpdateForm,
          toggleUpdate,
        }}
      >
        {children}
      </Data.Provider>
    </>
  );
};

export default WorkoutContext;
