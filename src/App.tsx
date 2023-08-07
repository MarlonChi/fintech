import { DataContextProvider } from "./Context/DataContext";

import Header from "./Components/Header";
import Sidenav from "./Components/Sidenav";
import Resume from "./Pages/Resume";

import "./styles/global.css";

function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <Sidenav />
        <main>
          <Header />
          <Resume />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
