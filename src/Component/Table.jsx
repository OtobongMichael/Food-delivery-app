import React from 'react';

function ProductTable() {
    return (

        <div className="relative overflow-x-auto px-[1] mr-[29rem] bg-[#FAFAFA] ">
            <table className="w-full text-sm text-left rtl:text-right  ">
                <thead className="text-base text-[#1A1A1A]   border-t border-b ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Item
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Order number
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Address
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Statue
                        </th>
                    </tr>
                </thead>

                <tbody className='text-[#666666]   '>
                    <tr className="bg-[#FAFAFA] border-b">
                        <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                            Fresh salad bowl(2)
                        </th>
                        <td className="px-6 py-4">
                            #1022322032
                        </td>
                        <td className="px-6 py-4">
                            18 Main street, Lagos NG
                        </td>
                        <td className="px-6 py-4">
                            <button className='bg-[#ECFDF5] px-4'>Completed</button>
                        </td>
                    </tr>
                    <tr className=" border-b bg-[#FAFAFA]">
                        <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                            Fresh salad bowl(2)
                        </th>
                        <td className="px-6 py-4">
                            #1022322032
                        </td>
                        <td className="px-6 py-4">
                            18 Main street, Lagos NG
                        </td>
                        <td className="px-6 py-4">
                            <button className='bg-[#FEF2F2] px-3'>Pending</button>
                        </td>
                    </tr>
                    <tr className="bg-[#FAFAFA] border-b ">
                        <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                            Fresh salad bowl(2)
                        </th>
                        <td className="px-6 py-4">
                            #1022322032
                        </td>
                        <td className="px-6 py-4">
                            18 Main street, Lagos NG
                        </td>
                        <td className="px-6 py-4">
                            <button className='bg-[#ECFDF5] px-4'>Completed</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ProductTable;
