import { useParams, Link } from "react-router-dom";
import { workoutRoutines } from "../data/routines.js";
import "./RoutineDetail.css";

function RoutineDetail() {
  
  const { id } = useParams();

  const routine = workoutRoutines.find((item) => item.id === id);

  if (!routine) {
    return (
      <div className="container">
        <h1>Routine not found</h1>
        <p>We couldn't find a routine called "{id}".</p>
        <Link to="/routines" className="btn">
          Back to Routines
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <Link to="/routines" className="back-link">
        ← Back to all routines
      </Link>

      <section className="routine-detail card">
        <h1>{routine.name}</h1>
        <p className="detail-focus">{routine.focus}</p>
        <p>{routine.description}</p>

        <h2>Exercises</h2>
        <ul className="exercise-list">
         
          {routine.exercises.map((exercise, index) => (
            <li key={index} className="exercise-item">
              <span className="exercise-name">{exercise.name}</span>
              <span className="exercise-sets">{exercise.sets}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default RoutineDetail;
