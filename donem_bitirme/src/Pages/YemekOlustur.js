import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

function YemekListesiOlustur() {
  const [menu, setMenu] = useState({
    corba: { ad: '', kalori: '' },
    anaYemek: { ad: '', kalori: '' },
    yanYemek: { ad: '', kalori: '' },
    tatli: { ad: '', kalori: '' },
    meyve: { ad: '', kalori: '' },
    suEkmek: false,
  });

  const [error, setError] = useState('');

  const handleInputChange = (event, type, field) => {
    const { value } = event.target;
    setMenu((prevMenu) => ({
      ...prevMenu,
      [type]: { ...prevMenu[type], [field]: value },
    }));
  };

  const handleCheckboxChange = (event) => {
    const { checked } = event.target;
    setMenu((prevMenu) => ({
      ...prevMenu,
      suEkmek: checked,
    }));
  };

  const handleSubmit = () => {
    const { corba, anaYemek, yanYemek, tatli, meyve } = menu;

    // Boş alanları kontrol et
    if (
      !corba.ad ||
      !corba.kalori ||
      !anaYemek.ad ||
      !anaYemek.kalori ||
      !yanYemek.ad ||
      !yanYemek.kalori ||
      !tatli.ad ||
      !tatli.kalori ||
      !meyve.ad ||
      !meyve.kalori
    ) {
      setError('Lütfen tüm yemek adlarını ve kalorilerini doldurunuz!');
      return;
    }

    setError(''); // Hata yoksa error mesajını temizle

    const yemekListesi = `
      Çorba: ${corba.ad} (${corba.kalori} kalori)
      Ana Yemek: ${anaYemek.ad} (${anaYemek.kalori} kalori)
      Yan Yemek: ${yanYemek.ad} (${yanYemek.kalori} kalori)
      Tatlı: ${tatli.ad} (${tatli.kalori} kalori)
      Meyve: ${meyve.ad} (${meyve.kalori} kalori)
      Su + Ekmek: ${menu.suEkmek ? 'Eklendi' : 'Eklenmedi'}
    `;

    alert(`Oluşturulan Yemek Menüsü:\n${yemekListesi}`);
  };

  return (
    <Container className="mt-5">
      <h2>Yemek Listesi Oluştur</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form>
        {['corba', 'anaYemek', 'yanYemek', 'tatli', 'meyve'].map((type, index) => (
          <Row className="mb-3" key={index}>
            <Col md={6}>
              <Form.Group controlId={`form${type}`}>
                <Form.Label>{type === 'corba' ? 'Çorba' : type.replace(/([A-Z])/g, ' $1')}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={`${type === 'corba' ? 'Çorba' : type.replace(/([A-Z])/g, ' $1')} adını giriniz`}
                  value={menu[type].ad}
                  onChange={(event) => handleInputChange(event, type, 'ad')}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId={`form${type}Kalori`}>
                <Form.Label>Kalori</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Kalori (örneğin: 150)"
                  value={menu[type].kalori}
                  onChange={(event) => handleInputChange(event, type, 'kalori')}
                />
              </Form.Group>
            </Col>
          </Row>
        ))}

        <Row className="mb-3">
          <Col md={12} className="d-flex align-items-center">
            <Form.Check
              type="checkbox"
              id="suEkmekCheckbox"
              label="Su + Ekmek Ekle"
              name="suEkmek"
              checked={menu.suEkmek}
              onChange={handleCheckboxChange}
            />
          </Col>
        </Row>

        <Button variant="primary" onClick={handleSubmit}>
          Yemek Listesini Oluştur
        </Button>
      </Form>
    </Container>
  );
}

export default YemekListesiOlustur;
