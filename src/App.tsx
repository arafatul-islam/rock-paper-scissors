import "./App.css";
import styles from "./App.module.css";
import ChooseAndPlay from "./section/ChooseAndPlay";
import ScoresAndResults from "./section/ScoresAndResults";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1>Roct, Paper, Scissors</h1>
        <p>React-TypeScript-Testing Library</p>
      </div>
      <ScoresAndResults />
      <ChooseAndPlay />
    </div>
  );
}

export default App;
