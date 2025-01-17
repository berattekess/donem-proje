import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BildirimOlustur = () => {
  const [formData, setFormData] = useState({
    baslik: "",
    aciklama: "",
    tarih: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form verisini burada işleyin (örneğin, bir API'ye gönderin)
    console.log("Bildirim Verileri:", formData);

    // Form temizleme işlemi
    setFormData({
      baslik: "",
      aciklama: "",
      tarih: "",
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Bildirim Oluştur</h2>
      <form onSubmit={handleSubmit}>
        {/* Başlık */}
        <div className="mb-3">
          <label htmlFor="baslik" className="form-label">
            Bildirim Başlığı
          </label>
          <input
            type="text"
            className="form-control"
            id="baslik"
            name="baslik"
            placeholder="Bildirim başlığını girin"
            value={formData.baslik}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Açıklama */}
        <div className="mb-3">
          <label htmlFor="aciklama" className="form-label">
            Açıklama
          </label>
          <textarea
            className="form-control"
            id="aciklama"
            name="aciklama"
            rows="4"
            placeholder="Bildirim açıklamasını girin"
            value={formData.aciklama}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        {/* Tarih */}
        <div className="mb-3">
          <label htmlFor="tarih" className="form-label">
            Tarih
          </label>
          <input
            type="date"
            className="form-control"
            id="tarih"
            name="tarih"
            value={formData.tarih}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Submit Butonu */}
        <button type="submit" className="btn btn-primary w-100">
          Bildirimi Kaydet
        </button>
      </form>
    </div>
  );
};

export default BildirimOlustur;
