import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Bildirimler = () => {
  // Örnek bildirim verileri (API'den gelecek verilere göre güncellenebilir)
  const [bildirimler, setBildirimler] = useState([]);

  useEffect(() => {
    // Örnek veri simülasyonu (Gerçek bir API isteği yapılabilir)
    const fetchData = async () => {
      // Örnek olarak statik veri kullanıldı
      const mockData = [
        {
          id: 1,
          baslik: "Haftalık Yemek Menüsü",
          aciklama: "Bu haftanın yemek menüsü güncellenmiştir.",
          tarih: "2025-01-15",
        },
        {
          id: 2,
          baslik: "Öğrenci Toplantısı",
          aciklama: "20 Ocak tarihinde toplantı yapılacaktır.",
          tarih: "2025-01-18",
        },
        {
          id: 3,
          baslik: "Yeni Duyuru",
          aciklama: "Yeni bildirimler sistemde mevcuttur.",
          tarih: "2025-01-19",
        },
      ];
      setBildirimler(mockData);
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Bildirimleri Görüntüle</h2>

      {bildirimler.length > 0 ? (
        <div className="row">
          {bildirimler.map((bildirim) => (
            <div className="col-md-4 mb-4" key={bildirim.id}>
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{bildirim.baslik}</h5>
                  <p className="card-text">{bildirim.aciklama}</p>
                  <p className="card-text text-muted">
                    <small>{new Date(bildirim.tarih).toLocaleDateString()}</small>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">Henüz bir bildirim bulunmamaktadır.</p>
      )}
    </div>
  );
};

export default Bildirimler;
