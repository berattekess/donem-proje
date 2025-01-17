import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, Outlet } from "react-router-dom";
import "./Header.css"; // Header için özel CSS
import { useAuth } from "../Context";

function Header() {
  const { isAdmin } = useAuth();

  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          Yemekhane Otomasyonu
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="SEÇENEKLER" id="basic-nav-dropdown" className="dd">
              <NavDropdown.Item className="dd" as={Link} to="/kayit">
                Yemek Kaydı Oluştur
              </NavDropdown.Item>

              <NavDropdown.Item className="dd" as={Link} to="/begeni">
                Yemek Beğeni Grafiği
              </NavDropdown.Item>
              <NavDropdown.Item className="dd" as={Link} to="/gecmis">
                Geçmiş Yemek Kayıtlarını Görüntüle
              </NavDropdown.Item>
              <NavDropdown.Item className="dd" as={Link} to="/degerlendir">
                Yemek ve Personel Değerlendir
              </NavDropdown.Item>
              <NavDropdown.Item className="dd" as={Link} to="/bildirim">
                Bildirimler
              </NavDropdown.Item>
              {isAdmin ? (
                <>
                <NavDropdown.Divider />
                  <NavDropdown.Item className="dd" as={Link} to="/yemekOlustur">
                    Yemek Listesi Oluştur
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dd" as={Link} to="/bildOlustur">
                    Bildirim Oluştur
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dd" as={Link} to="/performans">
                    Personel Performans Grafiği
                  </NavDropdown.Item>
                </>
              ) : null}
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link className="dd" as={Link} to="/profil">
              Profil
            </Nav.Link>
            <Nav.Link className="dd" as={Link} to="/">
              Çıkış Yap
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
