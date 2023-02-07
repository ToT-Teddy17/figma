import "./App.css";

import TimersDashboard from "./components/TimersDashboard";
import { TimerContext, TimerContextProvider } from "./context/TimerContext";

export default function App() {
  return (
    <div>
      <h1>Timer App</h1>
      <TimerContextProvider>
        <TimersDashboard></TimersDashboard>
      </TimerContextProvider>
    </div>
  );
}
