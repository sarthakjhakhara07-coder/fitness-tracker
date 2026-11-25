import { Link } from "react-router-dom";
import { workoutRoutines } from "../data/routines.js";
import "./Routines.css";

function Routines() {
  return (
    <div className="container">
      <section>
        <h1>Workout Routines</h1>
        <p className="page-intro">
          Pick a split below to see the full list of exercises.
        </p>

        <div className="routines-grid">
          
          {workoutRoutines.map((routine) => (
            
            <Link
              key={routine.id}
              to={`/routines/${routine.id}`}
              className="routine-card card"
            >
              <h2>{routine.name}</h2>
              <p className="routine-focus">{routine.focus}</p>
              <p>{routine.description}</p>
              <span className="routine-cta">View exercises →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Routines;
