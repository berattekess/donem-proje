import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Takvim from '../Components/Takvim';
import "../Components/Cards.css"
function Cards({ showButtons = true }) {
  const navigate = useNavigate();

  // const handleNavigateToCreatePage = () => {
  //   // Kullanıcıdan kullanıcı adı ve şifre al
  //   const username = prompt('Kullanıcı Adı:');
  //   const password = prompt('Şifre:');

  //   // Giriş bilgilerini kontrol et
  //   if (username === 'admin' && password === '12345') {
  //     alert('Giriş başarılı! Yeni sayfaya yönlendiriliyorsunuz.');
  //     navigate('/yemekOlustur'); // Yeni sayfaya yönlendir
  //   } else {
  //     alert('Giriş bilgileri hatalı! Lütfen tekrar deneyin.');
  //   }
  // };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100 deneme" >
      <Row className="w-100">
        {/* Üstteki buton */}
        <Col md={12} className="mb-4">
          {/* <Button variant="primary" onClick={handleNavigateToCreatePage}>
            Yemek Listesi Oluştur
          </Button> */}
          {/* {showButtons && (
                <Button variant="primary" onClick={handleNavigateToCreatePage}>Yemek Listesi Oluştur</Button>
              )} */}
        </Col>

        {/* Yan yana iki Card */}
        <Col md={6} className="mb-4 ">
          <Card>
            <Card.Body>
              <Card.Title>Menü 1</Card.Title>
              <Card.Text>
                Domates Çorbası (161 cal.) <br />
                Izgara Köfte + Pilav (450 cal.)<br />
                Zeytinyağlı Fasulye (250 cal.)<br />
                Yoğurt (80 cal.)<br />
                100 gr Ekmek + 200 ml Bardak Su
              </Card.Text>
              {showButtons && (
                <Button variant="primary">Menü 1 Yemek Kaydı Oluştur</Button>
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Menü 2</Card.Title>
              <Card.Text>
                Domates Çorbası (161 cal.) <br />
                Izgara Köfte + Pilav (450 cal.)<br />
                Zeytinyağlı Fasulye (250 cal.)<br />
                Yoğurt (80 cal.)<br />
                100 gr Ekmek + 200 ml Bardak Su
              </Card.Text>
              {showButtons && (
                <Button variant="primary">Menü 2 Yemek Kaydı Oluştur</Button>
              )}
            </Card.Body>
          </Card>
        </Col>

        {/* Alt kısımda tek bir takvim kartı */}
        {/* <Col md={12}>
          <Card>
            <Card.Body>
              <Card.Title>Takvim</Card.Title>
              <Takvim />
            </Card.Body>
          </Card>
        </Col> */}
        <div className="mt-4 d-flex justify-content-center">
            <Takvim />
          </div>
      </Row>
    </Container>
  );
}

export default Cards;
