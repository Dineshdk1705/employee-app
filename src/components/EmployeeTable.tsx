import { MdEdit, MdDelete } from "react-icons/md";

const employeeData = [
  {
    id: 1,
    name: "Dinesh Kumar",
    email: "dinesh123@gmail.com",
    phone: "9900332211",
    role: "FullStack",
    state: "Ranchi",
    city: "Ranchi",
  },
  {
    id: 2,
    name: "Harish Satnami",
    email: "harish.hk69@gmail.com",
    phone: "9900332211",
    role: "Manager",
    state: "Tamilnadu",
    city: "Chennai",
  },
  {
    id: 3,
    name: "Brijbhan Maravi",
    email: "bhaado01@gmail.com",
    phone: "9900332211",
    role: "DevOps",
    state: "Karnataka",
    city: "Bangalore",
  },
  {
    id: 4,
    name: "Durga Prasad",
    email: "dp360@gmail.com",
    phone: "9900332211",
    role: "Data Scientist",
    state: "Maharashtra",
    city: "Mumbai",
  },
  {
    id: 5,
    name: "Divyank Ranjput",
    email: "divyank.singh@gmail.com",
    phone: "9900332211",
    role: "Backend",
    state: "Chhattisgarh",
    city: "Bilaspur",
  },
  {
    id: 1,
    name: "Dinesh Kumar",
    email: "dinesh123@gmail.com",
    phone: "9900332211",
    role: "FullStack",
    state: "Ranchi",
    city: "Ranchi",
  },
  {
    id: 2,
    name: "Harish Satnami",
    email: "harish.hk69@gmail.com",
    phone: "9900332211",
    role: "Manager",
    state: "Tamilnadu",
    city: "Chennai",
  },
  {
    id: 3,
    name: "Brijbhan Maravi",
    email: "bhaado01@gmail.com",
    phone: "9900332211",
    role: "DevOps",
    state: "Karnataka",
    city: "Bangalore",
  },
  {
    id: 4,
    name: "Durga Prasad",
    email: "dp360@gmail.com",
    phone: "9900332211",
    role: "Data Scientist",
    state: "Maharashtra",
    city: "Mumbai",
  },
  {
    id: 5,
    name: "Divyank Ranjput",
    email: "divyank.singh@gmail.com",
    phone: "9900332211",
    role: "Backend",
    state: "Chhattisgarh",
    city: "Bilaspur",
  },
  {
    id: 1,
    name: "Dinesh Kumar",
    email: "dinesh123@gmail.com",
    phone: "9900332211",
    role: "FullStack",
    state: "Ranchi",
    city: "Ranchi",
  },
  {
    id: 2,
    name: "Harish Satnami",
    email: "harish.hk69@gmail.com",
    phone: "9900332211",
    role: "Manager",
    state: "Tamilnadu",
    city: "Chennai",
  },
  {
    id: 3,
    name: "Brijbhan Maravi",
    email: "bhaado01@gmail.com",
    phone: "9900332211",
    role: "DevOps",
    state: "Karnataka",
    city: "Bangalore",
  },
  {
    id: 4,
    name: "Durga Prasad",
    email: "dp360@gmail.com",
    phone: "9900332211",
    role: "Data Scientist",
    state: "Maharashtra",
    city: "Mumbai",
  },
  {
    id: 5,
    name: "Divyank Ranjput",
    email: "divyank.singh@gmail.com",
    phone: "9900332211",
    role: "Backend",
    state: "Chhattisgarh",
    city: "Bilaspur",
  },
];

const EmployeeTable = () => {
  return (
    <>
      <div className=" mt-5 w-full flex justify-center text-center">
        <table className="w-[80rem] h-auto  mr-2">
          <thead>
            <tr className="bg-slate-200">
              <th className="p-3">ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>ROLE</th>
              {/* <th>STATE</th> */}
              <th>CITY</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {employeeData.map((emp, i) => {
              return (
                <tr key={i} className="text-slate-500 border-b-[1px]">
                  <td className="p-3">{emp?.id}</td>
                  <td>{emp?.name}</td>
                  <td>{emp?.email}</td>
                  <td>{emp?.phone}</td>
                  <td>{emp?.role}</td>
                  {/* <td>{emp?.state}</td> */}
                  <td>{emp?.city}</td>
                  <td>
                    <button className="text-emerald-500 mr-3 text-xl hover:scale-125">
                      <MdEdit />
                    </button>
                    <button className="text-red-500 text-xl hover:scale-125">
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmployeeTable;
