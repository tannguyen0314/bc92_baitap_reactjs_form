import React from 'react';
import StudentForm from './studentForm';
import StudentTable from './studentTable';

const App = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Hệ thống quản lý sinh viên</h1>
      
      {/* Form nhập liệu */}
      <section className="row mb-5">
        <div className="col-12">
          <StudentForm />
        </div>
      </section>

      {/*  Danh sách sinh viên */}
      <section className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header bg-dark text-white">
              <h4 className="mb-0">Danh sách sinh viên</h4>
            </div>
            <div className="card-body">
              <StudentTable />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;