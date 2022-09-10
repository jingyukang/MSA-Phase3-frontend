import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import StoragePage from "./page/StoragePage";
import { useAppDispatch } from "./app/hooks";
import { getItemsAsync } from "./slice/items/index";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getItemsAsync());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path={"/"} element={<StoragePage />} />
          <Route path={"*"} element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
