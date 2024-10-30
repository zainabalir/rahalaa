import React, { useEffect, useState } from 'react';
import './searchbar.css';

import Button from '../Button/Button'

const Searchbar = () => {
  const [destinations, setDestinations] = useState([]); // حالة لتخزين الوجهات
  const [loading, setLoading] = useState(true); // حالة لتتبع التحميل
  const backNumber = 1; // رقم الباك الثابت، يمكنك تغييره حسب الحاجة

  useEffect(() => {
    // يمكنك استدعاء API لجلب الوجهات، لكن هنا سأستخدم قائمة ثابتة للوجهات
    const staticDestinations = [
      { id: 'baghdad', name: 'Baghdad' },
      { id: 'erbil', name: 'Erbil' },
      { id: 'sulaimani', name: 'Sulaimani' },
      { id: 'basra', name: 'Basra' },
      { id: 'korek-mountains', name: 'Korek Mountains' },
      // أضف المزيد من الوجهات حسب الحاجة
    ];
    setDestinations(staticDestinations);
    setLoading(false); // تغيير حالة التحميل بعد إضافة الوجهات
  }, []); // تفعيل مرة واحدة عند تحميل المكون

  return (
    <section className="tour-search">
      <div className="searchcontainer">
        <form action="" className="tour-search-form">
          <div className="input-wrapper">
            <label htmlFor="destination" className="input-label">Any Where</label>
            {loading ? (
              <p>Loading...</p> // عرض نص التحميل إذا كانت البيانات لم تُحمّل بعد
            ) : (
              <select 
                name="destination" 
                id="destination" 
                required 
                className="input-field"
              >
                <option value="" disabled selected>Select a destination</option>
                {destinations.map(destination => (
                  <option key={destination.id} value={destination.id}>{destination.name}</option> // عرض الوجهات
                ))}
              </select>
            )}
          </div>

          <div className="input-wrapper">
            <label htmlFor="people" className="input-label">Pax Number*</label>
            <input 
              type="number" 
              name="people" 
              id="people" 
              required 
              placeholder="No. of People" 
              className="input-field" 
              value={backNumber} // تعيين رقم الباك
              readOnly // جعله للقراءة فقط
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="dateRange" className="input-label">Date (Checkin - Checkout)*</label>
            <input 
              type="date" 
              name="dateRange" 
              id="dateRange" 
              required 
              className="input-field" 
            />
          </div>

          <Button label="Login" width='142px' height='40px'  className="button-lo" fontSize='2rem'/>
          </form>
      </div>
    </section>
  );
};

export default Searchbar;
