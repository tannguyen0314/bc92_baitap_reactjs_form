import React from 'react';
import { useSelector } from 'react-redux';

const TableVes = () => {
    // Lấy dữ liệu từ store
    const { danhSachGheDangDat } = useSelector(state => state.movieReducer);

    return (
        <div className="result-table mt-4">
            <table className="table table-bordered text-center" border="1" style={{width: '100%', backgroundColor: '#fff', color: '#000'}}>
                <thead>
                    <tr style={{fontSize: '15px'}}>
                        <th>Name</th>
                        <th>Number of Seats</th>
                        <th>Seats</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{danhSachGheDangDat.length}</td>
                        <td>
                            {danhSachGheDangDat.map((ghe, index) => {
                                return <span key={index} className="text-danger"> {ghe.soGhe},</span>
                            })}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TableVes;