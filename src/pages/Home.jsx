import { Link } from "react-router-dom";
import "./Home.css";


const features = [
  {
    id: 1,
    icon: "💪",
    title: "Structured Routines",
    text: "Follow simple Push, Pull and Leg day splits built for steady progress.",
  },
  {
    id: 2,
    icon: "🍎",
    title: "Calorie Tracking",
    text: "Log the food you eat and instantly see your total calories for the day.",
  },
  {
    id: 3,
    icon: "💾",
    title: "Saved Automatically",
    text: "Your calorie entries are stored in the browser and survive page refreshes.",
  },
  {
    id: 4,
    icon: "📱",
    title: "Works Everywhere",
    text: "A responsive, mobile-first design that looks great on phones and laptops.",
  },
  {
    id: 5,
    icon: "🎯",
    title: "Beginner Friendly",
    text: "Clean, simple layouts that make it easy to start and stay motivated.",
  },
  {
    id: 6,
    icon: "⚡",
    title: "Fast & Lightweight",
    text: "Built with React and Vite for a snappy, smooth browsing experience.",
  },
];

const stats = [
  { id: 1, number: "3", label: "Workout Splits" },
  { id: 2, number: "12", label: "Exercises" },
  { id: 3, number: "∞", label: "Foods You Can Log" },
  { id: 4, number: "100%", label: "Free to Use" },
];

const steps = [
  {
    id: 1,
    number: "1",
    title: "Pick a Routine",
    text: "Choose a Push, Pull or Leg day split and view its exercises.",
  },
  {
    id: 2,
    number: "2",
    title: "Log Your Food",
    text: "Add the meals you eat and let the tracker sum your calories.",
  },
  {
    id: 3,
    number: "3",
    title: "Stay Consistent",
    text: "Come back daily — your data is saved so you can track your progress.",
  },
];

function FeatureCard({ icon, title, text }) {
  return (
    <article className="feature-card card">
      <span className="feature-icon">{icon}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function StepCard({ number, title, text }) {
  return (
    <article className="step-card">
      <span className="step-number">{number}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function Home() {
  return (
    <div className="container">
  
      <section className="hero">
        <h1>Welcome to Fitness Club</h1>
        <p className="hero-subtitle">
          Your simple companion for planning workouts and tracking daily calories.
          Stay consistent, stay strong, and reach your goals one day at a time.
        </p>
        <div className="hero-buttons">
          <Link to="/routines" className="btn">
            Browse Workout Routines
          </Link>
          <Link to="/calories" className="btn btn-outline">
            Track Calories
          </Link>
        </div>
      </section>

     
      <section className="stats">
        {stats.map((stat) => (
          <div key={stat.id} className="stat-item">
            <span className="stat-number">{stat.number}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </section>

     
      <section className="features">
        <h2>What We Offer</h2>
        <p className="section-subtitle">
          Everything you need to plan your training and eat with intention.
        </p>
        <div className="features-grid">
         
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              text={feature.text}
            />
          ))}
        </div>
      </section>

     
      <section className="how-it-works">
        <h2>How It Works</h2>
        <p className="section-subtitle">Get started in three easy steps.</p>
        <div className="steps-grid">
          {steps.map((step) => (
            <StepCard
              key={step.id}
              number={step.number}
              title={step.title}
              text={step.text}
            />
          ))}
        </div>
      </section>

 
      <section className="cta">
        <h2>Ready to Start Your Fitness Journey?</h2>
        <p>Join Fitness Club today and take the first step toward a healthier you.</p>
        <Link to="/routines" className="btn">
          Get Started Now
        </Link>
      </section>
    </div>
  );
}

export default Home;
