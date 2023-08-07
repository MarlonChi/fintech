import Header from "./Components/Header";
import Sidenav from "./Components/Sidenav";
import Resume from "./Pages/Resume";
import "./styles/global.css";

function App() {
  return (
    <div>
      <Sidenav />
      <main>
        <Header />
        <Resume />
      </main>
    </div>
  );
}

export default App;
