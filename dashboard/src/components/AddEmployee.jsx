import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    EmployeeID: "",
    ApplicantID: "",
    DepartmentID: "",
    HireDate: "",
    Salary: "",
    Status: "Active",
  });

  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    // Fetch departments
    axios
      .get("http://localhost:3000/auth/departments")
      .then((res) => {
        if (res.data.Status) {
          setDepartments(res.data.Data);
        } else {
          alert(res.data.Error);
        }
      })
      .catch((err) => console.error("Error fetching departments:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/add_employee",
        {
          EmployeeID: employee.EmployeeID,
          ApplicantID: employee.ApplicantID,
          DepartmentID: parseInt(employee.DepartmentID),
          HireDate: employee.HireDate,
          Salary: parseFloat(employee.Salary),
          Status: employee.Status,
        }
      );

      if (response.data.Status) {
        alert(response.data.Message);
        navigate("/dashboard/employees");
      } else {
        alert(response.data.Error);
      }
    } catch (error) {
      console.error("Error adding employee:", error);
      alert(error.response?.data?.Error || "Failed to add employee");
    }
  };

  return (
    <div className="d-flex justify-content-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h2 className="text-center">Add Employee</h2>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-6">
            <label htmlFor="EmployeeID" className="form-label">
              Employee ID
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="EmployeeID"
              placeholder="Enter Employee ID"
              onChange={(e) =>
                setEmployee({ ...employee, EmployeeID: e.target.value })
              }
              required
            />
          </div>

          <div className="col-6">
            <label htmlFor="ApplicantID" className="form-label">
              Applicant ID
            </label>
            <input
              type="text"
              className="form-control"
              id="ApplicantID"
              placeholder="Enter Applicant ID"
              onChange={(e) =>
                setEmployee({ ...employee, ApplicantID: e.target.value })
              }
              required
            />
          </div>

          <div className="col-6">
            <label htmlFor="DepartmentID" className="form-label">
              Department
            </label>
            <select
              id="DepartmentID"
              className="form-select"
              value={employee.DepartmentID}
              onChange={(e) =>
                setEmployee({ ...employee, DepartmentID: e.target.value })
              }
              required
            >
              <option value="">Select Department</option>
              {departments.map((dept) => (
                <option key={dept.DepartmentID} value={dept.DepartmentID}>
                  {dept.DepartmentName}
                </option>
              ))}
            </select>
          </div>

          <div className="col-6">
            <label htmlFor="HireDate" className="form-label">
              Hire Date
            </label>
            <input
              type="date"
              className="form-control"
              id="HireDate"
              onChange={(e) =>
                setEmployee({ ...employee, HireDate: e.target.value })
              }
              required
            />
          </div>

          <div className="col-6">
            <label htmlFor="Salary" className="form-label">
              Salary
            </label>
            <input
              type="number"
              className="form-control"
              id="Salary"
              placeholder="Enter Salary"
              step="0.01"
              min="0"
              onChange={(e) =>
                setEmployee({ ...employee, Salary: e.target.value })
              }
              required
            />
          </div>

          <div className="col-6">
            <label htmlFor="Status" className="form-label">
              Status
            </label>
            <select
              id="Status"
              className="form-select"
              value={employee.Status}
              onChange={(e) =>
                setEmployee({ ...employee, Status: e.target.value })
              }
              required
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
