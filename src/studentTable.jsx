import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteStudent, editStudent } from './redux/studentSlice';

const StudentTable = () => {
  const { studentList } = useSelector((state) => state.student);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredList = studentList.filter(s => 
    s.hoTen.toLowerCase().includes(searchTerm.toLowerCase()) || s.maSV.includes(searchTerm)
  );

if (studentList.length === 0) {
    return (
      <div className="alert alert-warning mt-3">
        Hiện tại chưa có dữ liệu sinh viên. Vui lòng thêm mới!
      </div>
    );
  }
  
  return (
    <div>
      <input 
        type="text" 
        className="form-control mb-3 w-25" 
        placeholder="Tìm kiếm sinh viên..." 
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table className="table">
        <thead className="bg-dark text-white">
          <tr>
            <th>Mã SV</th>
            <th>Họ tên</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((s) => (
            <tr key={s.maSV}>
              <td>{s.maSV}</td>
              <td>{s.hoTen}</td>
              <td>{s.soDienThoai}</td>
              <td>{s.email}</td>
              <td>
                <button onClick={() => dispatch(editStudent(s))} className="btn btn-info me-2 text-white">Sửa</button>
                <button onClick={() => dispatch(deleteStudent(s.maSV))} className="btn btn-danger">Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;