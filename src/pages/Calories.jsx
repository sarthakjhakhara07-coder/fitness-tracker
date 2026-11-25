import { useState, useEffect, useRef, useMemo } from "react";
import "./Calories.css";

const STORAGE_KEY = "fitness_club_calories";

function Calories() {
   const [foodName, setFoodName] = useState("");
  const [calorieCount, setCalorieCount] = useState("");

   const [foodItems, setFoodItems] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

   const foodInputRef = useRef(null);

  useEffect(() => {
    foodInputRef.current.focus();
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(foodItems));
  }, [foodItems]);
  const totalCalories = useMemo(() => {
    return foodItems.reduce((sum, item) => sum + item.calories, 0);
  }, [foodItems]);

  const handleAddFood = (event) => {
    event.preventDefault(); 

   if (foodName.trim() === "" || calorieCount === "") return;

    const newItem = {
      id: Date.now(),
      name: foodName.trim(),
      calories: Number(calorieCount),
    };

       setFoodItems([...foodItems, newItem]);

     setFoodName("");
    setCalorieCount("");
    foodInputRef.current.focus();
  };


  const handleRemoveFood = (idToRemove) => {
    setFoodItems(foodItems.filter((item) => item.id !== idToRemove));
  };

  return (
    <div className="container">
      <section>
        <h1>Calorie Tracker</h1>
        <p className="page-intro">
          Add the food you eat and watch your daily total update instantly.
        </p>

       
        <form className="calorie-form card" onSubmit={handleAddFood}>
          <div className="form-row">
            <label htmlFor="food">Food item</label>
            <input
              id="food"
              type="text"
              ref={foodInputRef} 
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              placeholder="e.g. Chicken Salad"
            />
          </div>

          <div className="form-row">
            <label htmlFor="calories">Calories</label>
            <input
              id="calories"
              type="number"
              min="0"
              value={calorieCount}
              onChange={(e) => setCalorieCount(e.target.value)}
              placeholder="e.g. 350"
            />
          </div>

          <button type="submit" className="btn">
            Add Food
          </button>
        </form>

       
        {foodItems.length === 0 ? (
          <p className="empty-message">
            No food logged yet. Add your first item above!
          </p>
        ) : (
          <div className="food-list card">
           
            <div className="total-row">
              <span>Total Calories</span>
              <strong>{totalCalories} kcal</strong>
            </div>

            <ul>
              {foodItems.map((item) => (
                <li key={item.id} className="food-item">
                  <span className="food-item-name">{item.name}</span>
                  <span className="food-item-cal">{item.calories} kcal</span>
                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() => handleRemoveFood(item.id)}
                    aria-label={`Remove ${item.name}`}
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
}

export default Calories;
