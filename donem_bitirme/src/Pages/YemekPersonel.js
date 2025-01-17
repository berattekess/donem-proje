import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import Takvim from "../Components/Takvim";
import "../Components/Takvim.css";

function YemekPersonel() {
  // Yıldızlama state'i
  const [ratings, setRatings] = useState({
    lezzet: 0,
    porsiyon: 0,
    temizlik: 0,
    hız: 0,
    personel: {},
  });

  const [selectedDate, setSelectedDate] = useState(null); // Takvimde seçilen tarih
  const [error, setError] = useState(""); // Hata mesajı

  const handleRating = (category, value, personName = null) => {
    if (personName) {
      setRatings((prevRatings) => ({
        ...prevRatings,
        personel: {
          ...prevRatings.personel,
          [personName]: value,
        },
      }));
    } else {
      setRatings((prevRatings) => ({
        ...prevRatings,
        [category]: value,
      }));
    }
  };

  const resetRatings = () => {
    setRatings({
      lezzet: 0,
      porsiyon: 0,
      temizlik: 0,
      hız: 0,
      personel: {},
    });
    setError(""); // Hata mesajını sıfırla
  };

  const handleDateChange = (newDate) => {
    if (newDate !== selectedDate) {
      setSelectedDate(newDate);
      resetRatings(); // Tarih değiştiğinde yıldızları sıfırla
    }
  };

  const validateFoodForm = () => {
    // Yemek kategorileri kontrolü
    if (
      ratings.lezzet === 0 ||
      ratings.porsiyon === 0 ||
      ratings.temizlik === 0 ||
      ratings.hız === 0
    ) {
      setError("Yemek için tüm kategorilere oy verin!");
      return false;
    }
    return true;
  };

  const validatePersonelForm = () => {
    // Personel kategorileri kontrolü
    if (Object.values(ratings.personel).some((rating) => rating === 0)) {
      setError("Personel için tüm kategorilere oy verin!");
      return false;
    }
    return true;
  };

  const handleFoodSubmit = (e) => {
    e.preventDefault();

    if (validateFoodForm()) {
      alert("Yemek Değerlendirmesi Başarılı!");
      resetRatings(); // Yemek değerlendirmesini sıfırla
    }
  };

  const handlePersonelSubmit = (e) => {
    e.preventDefault();

    if (validatePersonelForm()) {
      alert("Personel Değerlendirmesi Başarılı!");
      resetRatings(); // Personel değerlendirmesini sıfırla
    }
  };

  const StarRating = ({ category, personName = null }) => {
    const currentRating = personName
      ? ratings.personel[personName] || 0
      : ratings[category];

    return (
      <div className="d-flex justify-content-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            style={{
              cursor: "pointer",
              fontSize: "1.5rem",
              color: star <= currentRating ? "#f5c518" : "#ddd",
            }}
            onClick={() => handleRating(category, star, personName)}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  const personList = ["Ahmet Yılmaz", "Mehmet Demir", "Ayşe Kaya", "Fatma Çelik"];

  return (
    <Container className="mt-5">
      <Row className="mb-4 text-center">
        <Col>
          <h2 className="text-primary">Yemek ve Personel Değerlendirmesi</h2>
          <p className="text-muted">Yemek ve personel hakkında değerlendirme yapabilirsiniz.</p>
        </Col>
      </Row>

      <Row className="g-4">
        {/* Seçilen Yemek Listesi */}
        <Col lg={4} md={6} sm={12}>
          <Card className="shadow-sm border-light">
            <Card.Header className="bg-warning text-white text-center">
              Seçilen Yemek Listesi
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled">
                <li><strong>Çorba:</strong> Mercimek</li>
                <li><strong>Ana Yemek:</strong> Tavuk Sote</li>
                <li><strong>Yan Yemek:</strong> Pilav</li>
                <li><strong>Tatlı:</strong> Şekerpare</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        {/* Yemek Hakkında Görüşler */}
        <Col lg={4} md={6} sm={12}>
          <Card className="shadow-sm border-light">
            <Card.Header className="bg-success text-white text-center">
              Yemek Hakkında Görüşler
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleFoodSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Yemeğin Lezzetini Beğendiniz mi?</Form.Label>
                  <StarRating category="lezzet" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Porsiyonlar Yeterli miydi?</Form.Label>
                  <StarRating category="porsiyon" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Servis Temiz miydi?</Form.Label>
                  <StarRating category="temizlik" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Servis Hızı Yeterli miydi?</Form.Label>
                  <StarRating category="hız" />
                </Form.Group>
                {/* Hata mesajı */}
                {error && <Alert variant="danger">{error}</Alert>}
                <Button variant="primary" type="submit" className="w-100">
                  Yemek Oy Ver
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Personel Değerlendirme */}
        <Col lg={4} md={6} sm={12}>
          <Card className="shadow-sm border-light">
            <Card.Header className="bg-info text-white text-center">
              Personel Değerlendirme
            </Card.Header>
            <Card.Body>
              {personList.map((person) => (
                <div key={person} className="mb-3">
                  <strong>{person}</strong>
                  <StarRating category="personel" personName={person} />
                </div>
              ))}
              <Form onSubmit={handlePersonelSubmit}>
                {/* Hata mesajı */}
                {error && <Alert variant="danger">{error}</Alert>}
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
                  disabled={personList.some(
                    (person) => ratings.personel[person] === 0
                  )}
                >
                  Personel Oy Ver
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col className="d-flex justify-content-center">
          <Takvim onDateChange={handleDateChange} />
        </Col>
      </Row>
    </Container>
  );
}

export default YemekPersonel;
