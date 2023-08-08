import { DataContextProvider } from "./Context/DataContext";

import Header from "./Components/Header";
import Sidenav from "./Components/Sidenav";
import Resume from "./Pages/Resume";
import Vendas from "./Pages/Vendas";

import "./styles/global.css";

function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <Sidenav />
        <main>
          <Header />
          <Resume />
          <Vendas />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
