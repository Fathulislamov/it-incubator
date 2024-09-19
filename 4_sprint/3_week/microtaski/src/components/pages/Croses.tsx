import { Outlet } from "react-router-dom"

export const Croses = (props: {}) => {
  return (
    <div>

      <div>Header</div>
			<Outlet />
      <div>Footer</div>
    </div>
  )
}
