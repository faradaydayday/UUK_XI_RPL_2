"use client"

import React from 'react';
import Sidebar from '@/Components/Sidebar';

const UpdateAccountPage = () => {
 

  return (
    <div className="min-h-screen">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-gray-0 mt-9">
          <div className="max-w-5xl mx-auto p-8">
            <div className="bg-white mt-8 rounded-lg shadow-md p-12">
            <div className="text-center mb-12">
                <h1 className="text-5xl text-primary font-semibold mb-6">Add Product</h1>
                <div className="w-full border-b border-gray-500"></div>
              </div>
              
              <div className="flex justify-center gap-32">
                <div className="w-40 pt-1">
                  <h2 className="text-3xl font-medium text-primary">Product</h2>
                </div>
                
                <form className="w-[500px]">
                  <div className="space-y-5">
                    <div>
                      <input
                        type="text"
                        name="Nama"
                        placeholder="Name"
                        className="w-full p-3 border border-gray-200 rounded-lg bg-gray-300"
                
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        name="Nama"
                        placeholder="Number of items"
                        className="w-full p-3 border border-gray-200 rounded-lg bg-gray-300"
                     
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        name="date"
                        placeholder="Purchase Date"
                        className="w-full p-3 border border-gray-200 rounded-lg bg-gray-300"
                  
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        name="unit"
                        placeholder="Unit price"
                        className="w-full p-3 border border-gray-200 rounded-lg bg-gray-300"
               
                      />
                    </div>


                    <div className="mt-6">
                      <p className="mb-3 text-gray-700">Type</p>
                      <div className="flex gap-8">
                        <label className="flex items-center text-primary">
                          <input
                           
                            type="radio"
                            name="type"
                            value="Good"
                         
                            className="mr-2 "
                          />
                          Good
                        </label>
                        <label className="flex items-center text-primary">
                          <input
                            type="radio"
                            name="type"
                            value="Damaged"
                     
                            className="mr-2 "
                          />
                          Bad
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div className="mt-10 flex justify-center">
                <button
                
                  className="w-64 bg-primary text-white py-2 text-2xl rounded-full px-12"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateAccountPage;