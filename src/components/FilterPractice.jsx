import React, { useState } from 'react';

const FilterPractice = () => {
    const [data, setData] = useState([])
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [searchQuery, setSearchQuery] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = { firstName, lastName, email };
        setData([...data, newData]);
    };
    const filterData = data.filter((item) => {
        const query = searchQuery;
        return (
            item.firstName.includes(query)
    )
})
    return (
        <div className='flex flex-col justify-center items-center min-h-screen bg-black'>
            <form className='md:max-w-[400px] max-w-[350px] mx-auto md:p-10 p-4' onSubmit={handleSubmit}>
                <input type="text" placeholder='First-name' required className='border border-white placeholder:text-white text-white bg-transparent outline-none p-4 rounded-xl mb-4 w-full' onChange={(e) => setFirstName(e.target.value)} />
                <input type="text" placeholder='Last-name' required className='border border-white placeholder:text-white text-white outline-none p-4 bg-transparent rounded-xl mb-4 w-full' onChange={(e) => setLastName(e.target.value)} />
                <input type="email" placeholder='Email' required className='border border-white placeholder:text-white text-white outline-none p-4 bg-transparent rounded-xl mb-4 w-full' onChange={(e) => setEmail(e.target.value)} />
                <button className='px-7 py-3  rounded-xl text-white hover:text-black flex mx-auto hover:bg-white border border-white transition-all duration-500 ease-in-out'> ADD</button>
            </form>
            <input type="text" placeholder="Search" className='border md:max-w-[400px] max-w-[300px] mx-auto border-white placeholder:text-white text-white outline-none p-4 mt-10 bg-transparent rounded-xl mb-5 w-full' onChange={(e) => setSearchQuery(e.target.value)} />
            <table className='mt-10 text-white'>
                <thead>
                    <tr>
                        <th className='px-4 py-2'>First Name</th>
                        <th className='px-4 py-2'>Last Name</th>
                        <th className='px-4 py-2'>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {filterData.length > 0 ? (
                        data.map((item, index) => (
                            <tr key={index}>
                                <td className='text-center px-4 py-2'>{item.firstName}</td>
                                <td className='text-center px-4 py-2'>{item.lastName}</td>
                                <td className='text-center px-4 py-2'>{item.email}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td className='text-center px-4 py-2'>No found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default FilterPractice;