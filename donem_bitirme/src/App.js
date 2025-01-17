import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import logo from "./projeResim/logo.png";
import YemekKayit from "./Pages/YemekKayit";
import YemekBegeni from "./Pages/YemekBegeni";
import PersonelPerformans from "./Pages/PersonelPerformans";
import GecmisYemek from "./Pages/GecmisYemek";
import Bildirimler from "./Pages/Bildirimler";
import Profil from "./Pages/Profil";
import HomeLayout from "./Pages/HomeLayout";
import NotFound from "./Pages/NotFound";
import YemekOlustur from "./Pages/YemekOlustur";
import { useAuth } from "./Context";
import BildirimOlustur from "./Pages/BildirimOlustur";
import YemekPersonel from "./Pages/YemekPersonel";

function App() {
  const { isAdmin } = useAuth();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage image={logo} />} />
        <Route
          path="/"
          element={<HomeLayout />}
          children={
            <>
              <Route path="/home" element={<HomePage />} />
              {isAdmin ? (
                <>
                  <Route path="/performans" element={<PersonelPerformans />} />
                  <Route path="/yemekOlustur" element={<YemekOlustur />} />
                  <Route path="/bildOlustur" element={<BildirimOlustur />} />
                </>
              ) : null}
              <Route path="/kayit" element={<YemekKayit />} />
              <Route path="/degerlendir" element={<YemekPersonel />} />
              <Route path="/begeni" element={<YemekBegeni />} />
              <Route path="/gecmis" element={<GecmisYemek />} />
              <Route path="/bildirim" element={<Bildirimler />} />
              <Route path="/profil" element={<Profil />} />
            </>
          }
        ></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
