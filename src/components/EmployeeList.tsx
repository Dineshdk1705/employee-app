import { useState } from "react";
import EmployeeTable from "./EmployeeTable";
import AddEmployeeModel from "./AddEmployeeModel";

const EmployeeList = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);

  const toggleModel = () => {
    setIsModelOpen(!isModelOpen);
  };

  return (
    <>
      <div>
        {isModelOpen && <AddEmployeeModel onClose={toggleModel} />}
        <h2 className="flex justify-center items-center text-white bg-slate-700 w-full h-10 text-xl">
          Employee List
        </h2>
        <div className="flex justify-end">
          <button
            className="w-[10rem] h-auto p-1 text-white m-3 bg-emerald-500 rounded-[10px] hover:bg-emerald-600"
            onClick={toggleModel}
          >
            + Add Employee
          </button>
        </div>
        <div>
          <EmployeeTable />
        </div>
      </div>
    </>
  );
};

export default EmployeeList;
