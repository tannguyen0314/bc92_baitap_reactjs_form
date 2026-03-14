import React from 'react';
import './App.css';
import DanhSachGhe from './danhSachGhe';
import TableVes from './tableVes';

function App() {
  return (
    <div className="booking-container">
      <div className="overlay" style={{ backgroundColor: 'rgba(228, 206, 206, 0.8)', padding: '20px' }}>
        <h1>MOVIE SEAT SELECTION</h1>

        <div className="content-wrapper">

          <div className="input-section">
            <p className="subtitle"></p>
            <div className="form-group d-flex">
              <div className="input-item mr-3">
                <label>Name <span>*</span></label>
                <input type="text" id="name" className="form-control" />
              </div>
              <div className="input-item">
                <label>Number of Seats <span>*</span></label>
                <input type="number" id="numSeats" className="form-control" />
              </div>
            </div>
            <button className="btn-start btn btn-light mt-2">Start Selecting</button>
          </div>

          {/* Sơ đồ ghế */}
          <div className="seat-map mt-5 text-center">
            <div className="screen mx-auto mb-4">SCREEN THIS WAY</div>
            <DanhSachGhe />
            <button className="btn-confirm btn btn-light mt-4">Confirm Selection</button>
          </div>

          {/* Bảng kết quả */}
          <TableVes />
        </div>
      </div>
    </div>
  );
}

export default App;