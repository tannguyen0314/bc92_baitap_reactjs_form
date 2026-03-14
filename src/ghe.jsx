import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Ghe = ({ ghe, indexHang }) => {
    const dispatch = useDispatch();

    const { danhSachGheDangDat } = useSelector(state => state.movieReducer);

    let cssGheDaDat = '';
    let disabled = false;

    if (ghe.daDat) {
        cssGheDaDat = 'gheDuocChon';
        disabled = true;
    }


    let cssGheDangChon = '';
    let indexGheDangChon = danhSachGheDangDat.findIndex(g => g.soGhe === ghe.soGhe);
    if (indexGheDangChon !== -1) {
        cssGheDangChon = 'gheDangChon';
    }


    if (indexHang === 0) {
        return <span className="rowNumber">{ghe.soGhe}</span>;
    }

    return (
        <button
            disabled={disabled}
            className={`ghe ${cssGheDaDat} ${cssGheDangChon}`}
            onClick={() => dispatch({ type: 'DAT_GHE', ghe })}
        >
            {ghe.soGhe}
        </button>
    );
};

export default Ghe;