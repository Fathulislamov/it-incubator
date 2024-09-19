import React, { useEffect } from 'react'
import './App.css'
import { TodolistsList } from '../features/TodolistsList/TodolistsList'
import { useAppDispatch, useAppSelector } from './store'
import { RequestStatusType } from './app-reducer'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import { Menu } from '@mui/icons-material';
import { ErrorSnackbar } from '../components/ErrorSnackbar/ErrorSnackbar'
import { Outlet } from 'react-router-dom'
import { logOutTC, meTC } from '../features/Login/auth-reduser'


function App() {
  const dispatch = useAppDispatch()
  const status = useAppSelector<RequestStatusType>((state) => state.app.status)
  const isInitialized = useAppSelector<boolean>((state) => state.app.isInitialized)
  const isLoggedIn = useAppSelector<boolean>((state) => state.auth.isLoggedIn)

  useEffect(() => {
    dispatch(meTC())
  }, [])

  let logout = () => dispatch(logOutTC())

  if (!isInitialized) return <div>Loading</div>
  return (
    <div className="App">
      <ErrorSnackbar />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography variant="h6">
            News
          </Typography>
          {isLoggedIn && <Button color="inherit" onClick={logout}>LogOut</Button>}
        </Toolbar>
        {status === 'loading' && <LinearProgress />}
      </AppBar>
      <Container fixed>
        <Outlet />
      </Container>
    </div>
  )
}

export default App
