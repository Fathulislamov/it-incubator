import * as React from "react"
import { ReactNode } from "react"
import { Navigate } from "react-router-dom"

type ProtectedRoutePropsType = {
  children: ReactNode
}
export const ProtectedRoute = ({ children }: ProtectedRoutePropsType) => {
  const logged = false
  return logged ? <>{children}</> : <Navigate to={'/login'} />
}
