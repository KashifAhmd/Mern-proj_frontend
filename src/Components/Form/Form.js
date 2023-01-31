import "./FormStyle.css";

import axios from "axios";
import { useContext } from "react";

import { useAuthContext } from "../../Hooks/useAuthContext";
import { Data } from "../../Context/WorkoutContext";

export const Form = () => {
  const { user } = useAuthContext();
  const {
    workouts,
    setWorkouts,
    getWorkouts,
    form,
    setForm,
    updateForm,
    setUpdateForm,
  } = useContext(Data);

  //CREATE FORM FUNCTION
  const updateFormField = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const createWorkout = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `${process.env.REACT_APP_API}api/workouts`,form,{
        headers: {
          Authorization: `Bearer ${user.token}`
        },
      }
    );

    setWorkouts([...workouts, response.data]);
    setForm({
      title: "",
      reps: "",
      load: "",
    });
    getWorkouts();
  };

  const handleUpdateFieldChange = (e) => {
    const { name, value } = e.target;

    setUpdateForm({
      ...updateForm,
      [name]: value,
    });
  };

  const updateWorkout = async (e) => {
    e.preventDefault();

    const { _id, title, reps, load } = updateForm;

    await axios.patch(
      `${process.env.REACT_APP_API}api/workouts/${_id}`,
      {
        title,
        reps,
        load,
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    getWorkouts();

    setUpdateForm({
      _id: null,
      title: "",
      reps: "",
      load: "",
    });
  };

  return (
    <>
      {/* CREATE FORM */}
      {!updateForm._id && (
        <div className="form">
          <h1>Create Record</h1>
          <form onSubmit={createWorkout}>
            <div className="field">
              <label htmlFor="">Title</label>
              <input
                type="text"
                name="title"
                id=""
                value={form.title}
                onChange={updateFormField}
              />
            </div>

            <div className="field">
              <label htmlFor="">Reps</label>
              <input
                type="number"
                name="reps"
                id=""
                value={form.reps}
                onChange={updateFormField}
              />
            </div>

            <div className="field">
              <label htmlFor="">Load</label>
              <input
                type="number"
                name="load"
                id=""
                value={form.load}
                onChange={updateFormField}
              />
            </div>

            <button>Submit</button>
          </form>
        </div>
      )}

      {/* UPDATE FORM */}
      {updateForm._id && (
        <div className="form">
          <h1>Edit Record</h1>
          <form onSubmit={updateWorkout}>
            <div className="field">
              <label htmlFor="">Title</label>
              <input
                type="text"
                name="title"
                id=""
                value={updateForm.title}
                onChange={handleUpdateFieldChange}
              />
            </div>

            <div className="field">
              <label htmlFor="">Reps</label>
              <input
                type="number"
                name="reps"
                id=""
                value={updateForm.reps}
                onChange={handleUpdateFieldChange}
              />
            </div>

            <div className="field">
              <label htmlFor="">Load</label>
              <input
                type="number"
                name="load"
                id=""
                value={updateForm.load}
                onChange={handleUpdateFieldChange}
              />
            </div>

            <button>Update</button>
          </form>
        </div>
      )}
    </>
  );
};
