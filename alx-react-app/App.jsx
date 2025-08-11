import { greetings, showWelcome } from './welcome';
import WelcomeMessage from './components/WelcomeMessage';  // Add this import at the top

function App() {
  return (
    <div className="App">
      <WelcomeMessage />  {/* Add this component */}
      {/* Existing content remains below */}
    </div>
  );
}

export default App;
function App() {
  return (
    <div className="App">
      <p>{showWelcome()}</p>
      <p>Today is: {greetings.currentDate()}</p>
      <WelcomeMessage />
    </div>
  );
}