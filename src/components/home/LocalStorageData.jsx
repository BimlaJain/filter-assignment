import { useState, useEffect } from "react";

export default function Form() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: ""
    });

    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("userTableData")) || [];
        setTableData(storedData);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
         {
            const newData = [...tableData, formData];
            setTableData(newData);
            localStorage.setItem("userTableData", JSON.stringify(newData));
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                address: ""
            });
        } 
    };

    const handleDelete = () => {
        localStorage.removeItem("userTableData");
        setTableData([]);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-gray-700">User Form</h2>
                <form onSubmit={handleSubmit}>
                    {["firstName", "lastName", "email", "address"].map(
                        (field, index) => (
                            <div key={index} className="mb-4">
                                <label className="block mb-2 capitalize text-gray-600">
                                    {field.replace("text", "text")}
                                </label>
                                <input
                                    type={field === "email" ? "email" : "text"}
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                />
                            </div>
                        )
                    )}
                    <div className="flex gap-4">
                        <button
                            type="submit"
                            className="flex mx-auto text-center items-center justify-center bg-blue-500 text-black border-black border w-44 py-3 rounded-lg hover:bg-black hover:text-white transition-all duration-300 ease-linear"
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={handleDelete}
                            className="flex mx-auto text-center items-center justify-center bg-red-500 text-white w-44 py-3 rounded-lg hover:bg-red-700 transition-all duration-300 ease-linear"
                        >
                            Delete
                        </button>
                    </div>
                </form>
            </div>
            {tableData.length > 0 && (
                <div className="mt-10 bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">User Data Table</h3>
                    <table className="w-full table-auto border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border p-2">First Name</th>
                                <th className="border p-2">Last Name</th>
                                <th className="border p-2">Email</th>
                                <th className="border p-2">Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((data, index) => (
                                <tr key={index} className="text-center">
                                    <td className="border p-2">{data.firstName}</td>
                                    <td className="border p-2">{data.lastName}</td>
                                    <td className="border p-2">{data.email}</td>
                                    <td className="border p-2">{data.address}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
