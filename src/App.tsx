import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataContextProvider } from "./Context/DataContext";

import Header from "./Components/Header";
import Sidenav from "./Components/Sidenav";
import Resume from "./Pages/Resume";
import Vendas from "./Pages/Vendas";
import Venda from "./Pages/Venda";

import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <Sidenav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Resume />} />
              <Route path="/vendas" element={<Vendas />} />
              <Route path="/vendas/:id" element={<Venda />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
}

export default App;
