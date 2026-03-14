import React from 'react';
import Ghe from './ghe';
import data from './data.json';

const DanhSachGhe = () => {
    return (
        <div className="d-flex flex-column align-items-center">
            {data.map((hang, index) => {
                return (
                    <div key={index} className="d-flex align-items-center justify-content-center mb-2">
                        {/* Hiển thị chữ cái đầu hàng (A, B, C...) */}
                        <div className="firstChar" style={{ width: '35px' }}>{hang.hang}</div>
                        
                        {/* Duyệt danh sách ghế trong hàng */}
                        <div className="d-flex">
                            {hang.danhSachGhe.map((ghe) => (
                                <Ghe key={ghe.soGhe} ghe={ghe} indexHang={index} />
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default DanhSachGhe;