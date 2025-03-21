import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Outlet, Route, Routes } from "react-router";
import MainPage from "./pages/MainPage/MainPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import SearchPage from "./pages/SearchPage/SearchPage";

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<MainPage />}></Route>
          <Route path=":movieId" element={<DetailPage />}></Route>
          <Route path="search" element={<SearchPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
