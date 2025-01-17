import React, { useState } from 'react';

const ProfilSayfasi = () => {
  const [studentData] = useState({
    name: 'Ahmet Yılmaz',
    schoolNumber: '123456',
    tcNo: '12345678901',
    birthPlace: 'İstanbul',
    birthDate: '2000-01-01',
    gender: 'Erkek',
    department: 'Bilgisayar Mühendisliği',
    balance: 1000, // Örnek bakiye
  });

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h3>Profil Bilgileriniz</h3>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="profile-balance">
              <strong>Bakiye:</strong> {studentData.balance} TL
            </div>
          </div>
          
          <div className="mb-3">
            <label className="form-label">Ad ve Soyad:</label>
            <div>{studentData.name}</div>
          </div>

          <div className="mb-3">
            <label className="form-label">Okul Numarası:</label>
            <div>{studentData.schoolNumber}</div>
          </div>

          <div className="mb-3">
            <label className="form-label">TC Kimlik No:</label>
            <div>{studentData.tcNo}</div>
          </div>

          <div className="mb-3">
            <label className="form-label">Doğum Yeri:</label>
            <div>{studentData.birthPlace}</div>
          </div>

          <div className="mb-3">
            <label className="form-label">Doğum Tarihi:</label>
            <div>{studentData.birthDate}</div>
          </div>

          <div className="mb-3">
            <label className="form-label">Cinsiyet:</label>
            <div>{studentData.gender}</div>
          </div>

          <div className="mb-3">
            <label className="form-label">Okuduğu Bölüm:</label>
            <div>{studentData.department}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilSayfasi;
