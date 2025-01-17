// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import ReactDOM from "react-dom";
// import "../Components/Takvim.css";
// function Takvim() {
//   // Array to store month string values
//   const allMonthValues = [
//     "Ocak",
//     "Şubat",
//     "Mart",
//     "Nisan",
//     "Mayıs",
//     "Haziran",
//     "Temmuz",
//     "Ağustos",
//     "Eylül",
//     "Ekim",
//     "Kasım",
//     "Aralık"
//   ];

//   // State for date selected by user
//   const [selectedDate, setSelectedDate] = useState();

//   // State for text above calander
//   const [calendarText, setCalendarText] = useState(`Tarih Seçilmedi`);

//   // Function to update selected date and calander text
//   const handleDateChange = (value) => {
//     setSelectedDate(value);
//     setCalendarText(`Seçilen Tarih ${value.toDateString()}`);
//   };

//   // Function to handle selected Year change
//   const handleYearChange = (value) => {
//     const yearValue = value.getFullYear();
//     setCalendarText(`${yearValue} Yıl Seçildi`);
//   };

//   // Function to handle selected Month change
//   const handleMonthChange = (value) => {
//     const monthValue = allMonthValues[value.getMonth()];
//     setCalendarText(`${monthValue} Ay Seçildi`);
//   };

//   return (
//     <div className="app">
//       <h2 className="calander-details">{calendarText}</h2>
//       <Calendar
//         onClickMonth={handleMonthChange}
//         onClickYear={handleYearChange}
//         onChange={handleDateChange}
//         value={selectedDate}
//       />
//     </div>
//   );
// }

// export default Takvim;

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Takvimi stilize etmek için
import '../Components/Takvim.css';


function Takvim() {
  const [date, setDate] = useState(new Date());
  const [meal, setMeal] = useState('');

  // Herhangi bir güne tıklanıldığında çalışacak fonksiyon
  const handleDateClick = (date) => {
    setDate(date);

    // Örnek yemek listeleri (gerçek veritabanı yerine burada sabit veri kullandık)
    const meals = {
      '2025-01-13': 'Pasta ve Salata',
      '2025-01-14': 'Köfte ve Pilav',
      '2025-01-15': 'Pizza',
    };

    // Seçilen tarihe göre yemek listesini ayarlama
    const dateString = date.toISOString().split('T')[0]; // Tarih formatını "YYYY-MM-DD" olarak alır
    setMeal(meals[dateString] || 'Bu gün için yemek listesi yok');
  };

  return (
    <div className="App">
      {/* Takvim Bileşeni */}
      <Calendar
        onChange={handleDateClick}
        value={date}
        className="custom-calendar" // Özelleştirilmiş stil (isteğe bağlı)
      />

      <div className="meal-info">
        <h2>Seçilen Tarih: {date.toLocaleDateString()}</h2>
        <p>Yemek Listesi: {meal}</p>
      </div>
    </div>
  );
}

export default Takvim;
