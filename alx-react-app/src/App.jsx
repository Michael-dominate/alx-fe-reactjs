import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';


import WelcomeMessage from './components/WelcomeMessage';
function App() {
  return (
    <div className="App">
      <WelcomeMessage />
      {/* Any other existing content can stay below */}
    </div>
  );
}function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;