import React, { useState } from 'react';
import axios from 'axios';

// permite crear un nuevo proveedor
function SupplierCreate({ onAddSupplier, updateSupplierList  }) {
  const [newSupplier, setNewSupplier] = useState({
    name: '',
    direction: '',
    phone: '',
    mail: '',
  });

  const handleSubmit = async () => {
    if (!newSupplier.name || !newSupplier.direction || !newSupplier.phone || !newSupplier.mail) {
      alert("Please fill all fields");
      return; 
   }
    axios
    .post('http://localhost:5070/api/supplier', newSupplier)
    .then((response) => {
        setNewSupplier({
          name: '',
          direction: '',
          phone: '',
          mail: ''});
         // setNewSupplier(response.data);
      updateSupplierList();
      console.log("Proveedor creado:", newSupplier);
    })
    .catch((err) => console.log(err));
  };  

  return (
    <div className="flex flex-col items-center justify-center mt-4 ">
      <div className=" flex-col  md:max-w-xl lg:max-w-2xl  bg-white rounded-lg shadow-md p-6  border-2 border-gray-300">
      <div className="text-center text-lg">
        <h2 className="mb-2 -mt-1">Create new Supplier</h2>
      </div>
      <div className="relative overflow-x-auto my-8 ">
      <form className="flex flex-col lg:ml-10 lg:mr-10 sm:mr-1 sm:ml-1">
        <input
          type="text"
          name="name"
          required
          className='w-full px-3 py-2 mt-1 mb-1 placeholder-gray-300 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 '
          placeholder="Name new supplier"
          value={newSupplier.name}
          onChange={(e) =>  setNewSupplier((prevState) => ({
            ...prevState,
            name: e.target.value,
          }))}
        />
        <input
          type="text"
          placeholder="Addres"
          required
          className='w-full px-3 py-2  mb-1 placeholder-gray-300 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 '
          value={newSupplier.direction}
          onChange={(e) =>  setNewSupplier((prevState) => ({
            ...prevState,
            direction: e.target.value,
          }))}
        />
        <input
          type="text"
          required
          className='w-full px-3 py-2 mb-1 placeholder-gray-300 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 '
          placeholder="Phone"
          value={newSupplier.phone}
          onChange={(e) =>  setNewSupplier((prevState) => ({
            ...prevState,
            phone: e.target.value,
          }))}
        />
        <input
          type="email"
          required
          className='w-full px-3 py-2 mb-1 placeholder-gray-300 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 '
          placeholder="Email"
          value={newSupplier.mail}
          onChange={(e) =>  setNewSupplier((prevState) => ({
            ...prevState,
            mail: e.target.value,
          }))}
        />
        <button type="button" className=" mt-4 mb-1 text-white bg-buttons w-full px-3 py-2 bg-header-bg rounded-lg focus:outline-none focus:ring-2 " onClick={handleSubmit}>Guardar Proveedor</button>
      </form>
      </div>
    </div>
  </div>
  );
}

export default SupplierCreate;
