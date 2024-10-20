import { Routes, Route, Navigate } from "react-router-dom";

import { Details } from "../pages/Details";
import { EditDish } from "../pages/EditDish";
import { NewDish } from "../pages/NewDish";
import { Home } from "../pages/Home";


export function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/new" element={<NewDish/>} />
      <Route path="/edit" element={<EditDish/>} />
      <Route path="/details/" element={<Details/>} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}