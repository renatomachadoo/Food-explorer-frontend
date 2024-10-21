import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

import { useAuth } from "../hooks/auth";

import { api } from "../services/api";

export function Routes(){
  const { user, signOut } = useAuth()

  useEffect(() => {
    api.get("/users/validate").catch((error) => {
      signOut()
    })
  }, [])

  return (
    <BrowserRouter>
    {
      user ? <AppRoutes /> : <AuthRoutes />
    }
    </BrowserRouter>
  )
}