import Greeting from "./components/Greeting";
import UserStatus from "./components/UserStatus";
import Weather from "./components/Weather";

function App() {
  return (
    <div>
      <Weather temperature={10}/>
      <UserStatus loggedIn={true} isAdmin={false} />
      <Greeting timeOfDay="morning" />
    </div>
  );
}

export default App;
