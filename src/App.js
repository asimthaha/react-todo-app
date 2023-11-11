import logo from "./logo.svg";
import "./App.css";
import ToDoAdd from "./components/ToDoAdd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ToDoSearch from "./components/ToDoSearch";
import ToDoDelete from "./components/ToDoDelete";
import ToDoView from "./components/ToDoView";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<ToDoAdd />}></Route>
        <Route path="search" element={<ToDoSearch />}></Route>
        <Route path="delete" element={<ToDoDelete />}></Route>
        <Route path="view" element={<ToDoView />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
