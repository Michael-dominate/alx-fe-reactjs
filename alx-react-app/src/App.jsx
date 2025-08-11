import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';



import UserProfile from './components/UserProfile';


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





function App() {
  return (
    <div className="App">
      <UserProfile 
        name="Alice" 
        age={25} 
        bio="Loves hiking and photography" 
      />
      {/* Keep other existing components */}
    </div>
  );
}

export default App;