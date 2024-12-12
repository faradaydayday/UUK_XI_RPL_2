/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { useState } from 'react';
import Sidebar from '@/Components/Sidebar';
import Link from 'next/link';
const page = () => {
  const [activeTab, setActiveTab] = useState('all');
  return (

    <div className="flex h-screen  z-50">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <main className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-semibold  text-black">Inventory</h2>
          </div>

          <div className=" mt-16">
            <div className=' flex justify-between   '>
              <div className="px-7 py-2 grid grid-cols-2 text-xl text-black">
                <h1
                  className={`cursor-pointer ${activeTab === 'all' ? 'underline' : ''}`}
                  onMouseEnter={() => setActiveTab('all')}
                >
                   <Link href="/Data-aset">All</Link>
                </h1>
                <h1
                  className={`cursor-pointer ${activeTab === 'warehouse' ? 'underline' : ''}`}
                  onMouseEnter={() => setActiveTab('warehouse')}
                >
                 <Link href="/Data-aset-bengkel">Warehouse</Link>
                </h1>
              </div>
              <button className=" text-primary px-7 py-2  border  border-primary mb-2  justify-end">Add</button>
            </div>
            <table className="w-full bg-white text-gray-600  border-1 rounded-xl shadow-xl   ">
              <thead>
                <tr className="bg-slate-300 rounded-lg">
                  <th className=" py-5 text-left"></th>
                  <th className=" py-5 text-left">Product Name</th>
                  <th className=" py-5 text-left">Series No</th>
                  <th className=" py-5 text-left">Category</th>
                  <th className=" py-4 text-left">Condition</th>
                  <th className=" py-4 text-left">Storage Location</th>
                </tr>
              </thead>
              <tbody>
                {[
                     { productName: 'Kapal Selam', seriesNo: 'TJ0001' },
                     { productName: 'Pesawat Tempur', seriesNo: 'TJ0002' },
                     { productName: 'Helikoper ', seriesNo: 'TJ0015' },
                     { productName: 'Tank Samsung', seriesNo: 'TJ1212' },
                     { productName: 'Riot ', seriesNo: 'TJ0021' },
                 
                ].map((user, index) => (
                  <tr key={index} className="border-b hover:bg-gray-100">
                    <td className="px-4 py-3 flex space-x-2">
                      <button className="text-black hover:text-gray-800">
                        <span className="material-icons"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen-fill" viewBox="0 0 16 16">
                          <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001" />
                        </svg></span>
                      </button>
                      <button className="text-black hover:text-gray-800">
                        <span className="material-icons"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                          <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                        </svg></span>
                      </button>
                    </td>
                    <td className="px-2 py-3">{user.productName}</td>
                    <td className="px-2 py-3">{user.seriesNo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default page;
