import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Pages } from './constants/pages';
import { Layout } from './layouts/Layout/Layout';
import { MainPage } from './pages/MainPage/MainPage';

export default function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={Pages.MAIN}
          element={
            <Layout>
              <MainPage />
            </Layout>
          }
        />
        <Route path="*" element={<Navigate replace to={Pages.MAIN} />} />
      </Routes>
    </BrowserRouter>
  );
}
