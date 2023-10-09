import React, { useState } from "react";
import { MdClose } from "react-icons/md";

interface AddEmployeeModelProps {
  onClose: () => void; // Define the type of onClose prop
}
interface EmployeesType {
  name: string;
  id: string;
  email: string;
  phone: string;
  role: string;
  city: string;
}

const AddEmployeeModel: React.FC<AddEmployeeModelProps> = ({ onClose }) => {
  const [employees, setEmployees] = useState<EmployeesType[]>([]);
  const [empData, setEmpData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    role: "",
    city: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setEmpData({ ...empData, [name]: value });
  };

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    setEmployees([...employees, empData]);
    setEmpData({
      name: "",
      id: "",
      email: "",
      phone: "",
      role: "",
      city: "",
    });
  };

  return (
    <div className="flex justify-center ">
      <div
        className="fixed bg-zinc-500 top-0 left-0 right-0 bottom-0"
        onClick={onClose}
      ></div>
      <div className="fixed w-[700px] max-w-[700px] min-h-[600px] bg-white rounded-xl p-3">
        <div className="flex justify-between mb-5">
          <h3 className="w-auto font-bold text-3xl">Add Employee Details</h3>
          <button className="text-red-500 text-2xl" onClick={onClose}>
            <MdClose />
          </button>
        </div>
        <form onSubmit={onSubmitHandler}>
          <div className="flex justify-center items-center h-[500px]">
            <div className="text-right w-[380px]">
              <div className="mb-2">
                <label className="text-[1rem] text-slate-600 w-[100px]">
                  Name :{" "}
                </label>
                <input
                  className="text-lg border border-slate-300 rounded-lg w-[20rem] h-9 p-1 text-gray-500"
                  name="name"
                  value={empData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-2">
                <label className="text-[1rem] text-slate-600 w-[100px]">
                  ID :{" "}
                </label>
                <input
                  className="text-lg border border-slate-300 rounded-lg w-[20rem] h-9 p-1 text-gray-500"
                  name="id"
                  value={empData.id}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-2">
                <label className="text-[1rem] text-slate-600 w-[100px]">
                  Email :{" "}
                </label>
                <input
                  className="text-lg border border-slate-300 rounded-lg w-[20rem] h-9 p-1 text-gray-500"
                  name="email"
                  value={empData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-2 text-lg">
                <label className="text-[1rem] text-slate-600 w-[100px]">
                  Phone :{" "}
                </label>
                <input
                  className="text-lg border border-slate-300 rounded-lg w-[20rem] h-9 p-1 text-gray-500"
                  name="phone"
                  value={empData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-2 text-lg">
                <label className="text-[1rem] text-slate-600 w-[100px]">
                  Role :{" "}
                </label>
                <input
                  className="text-lg border border-slate-300 rounded-lg w-[20rem] h-9 p-1 text-gray-500"
                  name="role"
                  value={empData.role}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-2 text-lg">
                <label className="text-[1rem] text-slate-600 w-[100px]">
                  City :{" "}
                </label>
                <input
                  className="text-lg border border-slate-300 rounded-lg w-[20rem] h-9 p-1 text-gray-500"
                  name="city"
                  value={empData.city}
                  onChange={handleInputChange}
                />
              </div>
              <button
                type="submit"
                className="w-[7rem] h-auto p-1 text-white bg-emerald-500 rounded-[10px] hover:bg-emerald-600"
                disabled={
                  empData.name &&
                  empData.id &&
                  empData.email &&
                  empData.phone &&
                  empData.role &&
                  empData.city
                    ? false
                    : true
                }
              >
                ADD
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployeeModel;
