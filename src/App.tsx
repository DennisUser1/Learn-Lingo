import Layout from "components/Layout";
import Loader from "components/Loader/Loader";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("pages/Home/HomePage"));
const TeachersPage = lazy(() => import("pages/Teachers/TeachersPage"));
const FavoritesPage = lazy(() => import("pages/Favorites/FavoritesPage"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route index element={<FavoritesPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
