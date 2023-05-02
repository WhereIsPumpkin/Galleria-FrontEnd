import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import "./app.scss";
import Gallery from "./pages/Gallery";
import Picture from "./pages/Picture";

function App() {
  return (
    <div className="mainWrap">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/:id" element={<Picture />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
