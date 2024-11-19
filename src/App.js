import "./App.css";
import NavRoutes from "./Components/NavRoutes";
import MyEffect from "./Components/MyEffect";
import MyComponent from "./Components/MyComponent";
import Mycomponent2 from "./Components/Mycomponent2";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div className="App">
      <MyComponent />
      <Mycomponent2/>
      <MyEffect/>
      <UserProfile/>
      <NavRoutes />
    </div>
  );
}

export default App;
