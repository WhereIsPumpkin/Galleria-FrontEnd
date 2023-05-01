import "./app.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Gallery />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
