import React, { useState } from 'react';
import styles from "./components/Site.module.css";
import { Navigate, NavLink, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import { Error404 } from "./components/pages/Error404";
import styled from 'styled-components';
import { S } from './components/pages/_styles'
import { Model } from "./components/pages/Model";
import { Prices } from "./components/pages/Prices";
import { PATH } from './routes/router';



function App() {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate(-1)
  }
  return (
    <div>
      <div className={styles.header}><h1>HEADER</h1></div>
      <div className={styles.body}>
        <div className={styles.nav}>
          <S.NavWrapper><NavLink to={PATH.ADIDAS}>Adidas</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.PUMA}>Puma</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.ABIBAS}>Abibas</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.PRICES}>Цены для оптовиков</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.PROTECTED_PAGE}>Protected page</NavLink></S.NavWrapper>
        </div>
        <div className={styles.HorizontalNavigation}>
        </div>
        <div className={styles.content}>
          <NavLink className={styles.LinkLikeButton} to={'/'}>Главная</NavLink>
          <button onClick={navigateHandler} className={styles.LinkLikeButton}>Назад</button>
          <Outlet />
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}

export default App;



