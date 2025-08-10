
export const greetings = {
  welcome: "Hello and welcome to our ALX React App!",
  farewell: "Goodbye, see you next time!",
  currentDate: () => new Date().toLocaleDateString()
};


export function showWelcome() {
  return greetings.welcome;
}