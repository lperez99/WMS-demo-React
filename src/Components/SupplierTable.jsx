import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SupplierCreate from './SupplierCreate';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { PencilIcon, TrashIcon } from '@heroicons/react/outline';


function SupplierTable() {
  const [supplier, setSupplier] = useState([]);
  const [editingSupplier, setEditingSupplier] = useState(null);
  const [editedSupplier, setEditedSupplier] = useState({});
  const columnHelper = createColumnHelper();
// CREATE COLUMNS IN TABLE
  const columns = [
    columnHelper.accessor('Id', {
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('Name', {
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('Addres', {
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('Phone', {
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('Mail', {
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('Actions', {
      cell: ({row}) => (
        <div>
          <button onClick={() => handleEdit(supplier)}>Editar</button>
                <button onClick={() => handleDelete(supplier)}>Eliminar</button>
      </div>
      )
    })
  ];

  const table = useReactTable({
    supplier, 
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const updateSupplierList = async () => {
    try {
      const response = await axios.get('http://localhost:5070/api/supplier');
      setSupplier(response.data);
    } catch (error) {
      console.error("Solicitud fallida", error);
    }
  };
  useEffect(() => {
    updateSupplierList();

  }, []);

  const handleEdit = (supplier) => {
    // Set the editingProveedor state to the selected proveedor
    setEditingSupplier(supplier);
    // Set the editedProveedor state to a copy of the selected proveedor
    setEditedSupplier({ ...supplier });
  };

  const handleSaveEdit = () => {
    // Make a PUT request to update the selected proveedor
    axios.put(`http://localhost:5070/api/supplier/${editingSupplier.id}`, editedSupplier)
      .then(response => {
        // Update the local state with the edited proveedor
        setSupplier(supplier.map(supplier => {
          if (supplier.id === editingSupplier.id) {
            return { ...supplier, ...editedSupplier };
          }
          return supplier;
        }));
        // Clear the editing state
        setEditingSupplier(null);
      })
      .catch(err => console.error("Failed to update proveedor", err));
  };

  const handleCancelEdit = () => {
    // Clear the editing state
    setEditingSupplier(null);
  };

  const handleDelete = (supplierToDelete) => {
    console.log(supplierToDelete);
    axios.delete(`http://localhost:5070/api/supplier/${supplierToDelete.id}`)
      .then(response => {
        console.log(`Deleted post with ID ${supplierToDelete.id}`);
        setSupplier(currentSupplierList => currentSupplierList.filter(supplier => supplier.id !== supplierToDelete.id));
      })
      .catch(err => console.error("Failed to delete proveedor", err));
  };

  return (
    <div>
      {/* Renderiza el componente ProveedorForm y pasa updateProveedorList como prop */}
      <SupplierCreate updateSupplierList={updateSupplierList} />
      {/* Table*/}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-8  
      sm:ml-1 sm:mr-1 md:ml-2 md:mr-2 lg:ml-4 lg:mr-4">
        <table className=" w-full text-sm text-left rtl:text-right  dark:text-gray-400 ">
          <thead className=" bg-gradient-to-r from-headTable1 to-headTable2 
          text-xs uppercase bg-header-bg dark:text-gray-400
          ">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className="border-b text-gray-800 uppercase">
                {headerGroup.headers.map(header => (
                  <th key={header.id} className={`px-6 py-3 ${header.column.id === 'Actions' ? 'flex justify-center text-center text-white' : 'text-white'}`}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 border-2 border-gray-300">
                {supplier.map((supplier, index) => (
                 <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} border-b dark:border-gray-300`}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{supplier.id}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{supplier.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{supplier.direction}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{supplier.phone}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{supplier.mail}</div>
                    </td>
                    <td >
                      <div className='flex items-center justify-center'>
                        <button onClick={() => handleEdit(supplier)}>
                          <PencilIcon className="h-5 w-5 text-gray-500 hover:text-gray-700" />
                        </button>
                        <button onClick={() => handleDelete(supplier)}>
                          <TrashIcon className="h-5 w-5 text-gray-500 hover:text-gray-700" />
                        </button>
                      </div>

                    </td>
                 </tr>
                ))}
              </tbody>
              </table>

      </div>


      {/* Table */}

      
    </div>
  );
}

export default SupplierTable;