import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStudent, updateStudent } from './redux/studentSlice';

const StudentForm = () => {

  const { studentEdit, studentList } = useSelector((state) => state.student);
  const dispatch = useDispatch();

  const [values, setValues] = useState({ maSV: '', hoTen: '', soDienThoai: '', email: '' });
  const [errors, setErrors] = useState({ maSV: '', hoTen: '', soDienThoai: '', email: '' });

//lifecycle
  useEffect(() => {
    if (studentEdit) {
      setValues(studentEdit);
      setErrors({ maSV: '', hoTen: '', soDienThoai: '', email: '' });
    }
  }, [studentEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    let mess = '';
    if (value.trim() === '') {
      mess = `${name} không được bỏ trống!`;
    } else {
      if (name === 'email' && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        mess = 'Email không đúng định dạng!';
      }
      if (name === 'soDienThoai' && !/^\d+$/.test(value)) {
        mess = 'Số điện thoại phải là số!';
      }
    }
    setErrors({ ...errors, [name]: mess });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Kiểm tra lỗi trước khi submit
    const hasError = Object.values(errors).some(err => err !== '');
    const hasEmpty = Object.values(values).some(val => val === '');

    if (!hasError && !hasEmpty) {
      if (studentEdit) {
        dispatch(updateStudent(values));
      } else {
        // Kiểm tra trùng mã SV khi thêm mới
        if (studentList.some(s => s.maSV === values.maSV)) {
          alert("Mã sinh viên đã tồn tại!");
          return;
        }
        dispatch(addStudent(values));
      }
      // Reset form sau khi thành công
      setValues({ maSV: '', hoTen: '', soDienThoai: '', email: '' });
    } else {
      alert("Vui lòng điền đầy đủ và đúng thông tin!");
    }
  };

  return (
    <div className="card mb-4">
      <div className="card-header bg-dark text-white">
        <h3 className="mb-0">Thông tin sinh viên</h3>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6 mb-3">
              <label className="form-label font-weight-bold">Mã SV</label>
              <input 
                disabled={!!studentEdit} 
                name="maSV" 
                value={values.maSV} 
                onChange={handleChange} 
                className="form-control" 
              />
              <span className="text-danger small">{errors.maSV}</span>
            </div>
            <div className="col-6 mb-3">
              <label className="form-label font-weight-bold">Họ tên</label>
              <input 
                name="hoTen" 
                value={values.hoTen} 
                onChange={handleChange} 
                className="form-control" 
              />
              <span className="text-danger small">{errors.hoTen}</span>
            </div>
            <div className="col-6 mb-3">
              <label className="form-label font-weight-bold">Số điện thoại</label>
              <input 
                name="soDienThoai" 
                value={values.soDienThoai} 
                onChange={handleChange} 
                className="form-control" 
              />
              <span className="text-danger small">{errors.soDienThoai}</span>
            </div>
            <div className="col-6 mb-3">
              <label className="form-label font-weight-bold">Email</label>
              <input 
                name="email" 
                value={values.email} 
                onChange={handleChange} 
                className="form-control" 
              />
              <span className="text-danger small">{errors.email}</span>
            </div>
          </div>
          
          <button type="submit" className={`btn ${studentEdit ? 'btn-primary' : 'btn-success'}`}>
            {studentEdit ? 'Cập nhật' : 'Thêm sinh viên'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;