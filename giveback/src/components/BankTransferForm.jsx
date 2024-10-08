import React from 'react';
import { useForm } from 'react-hook-form';

const BankTransferForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <>
      <div className="bg-gray-100 p-3 mb-4 text-sm">
        <ul className="list-disc pl-5">
          <li>WIRE/ Bank transfer from an international account may take 1-2 weeks to be credited. Hence, donation acknowledgment will be issued within 2-3 working days</li>
          <li>Upon receipt of funds.Please share the transaction details with dora@iitj.ac.in</li>
        </ul>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
        {/* Left column */}
        <div className="col-span-2 md:col-span-1">
          <input {...register("name", { required: true })} className="w-full p-2 border rounded" placeholder="Name *" />
          <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} className="w-full p-2 border rounded mt-3" placeholder="Your Email *" />
          <input {...register("phone")} className="w-full p-2 border rounded mt-3" placeholder="Your Phone" />
          <select {...register("category", { required: true })} className="w-full p-2 border rounded mt-3">
            <option value="">Select Category *</option>
          </select>
          <select {...register("currency", { required: true })} className="w-full p-2 border rounded mt-3">
            <option value="">Select Currency *</option>
          </select>
          <input {...register("amount", { required: true })} className="w-full p-2 border rounded mt-3" placeholder="Amount *" />
          <input {...register("payeeBank", { required: true })} className="w-full p-2 border rounded mt-3" placeholder="Payee Bank *" />
          <div className="mt-3">
            <label className="block mb-1 text-left">Date of transaction*</label>
            <input {...register("transactionDate", { required: true })} className="w-full p-2 border rounded" type="date" />
          </div>
          <input {...register("transactionReference", { required: true })} className="w-full p-2 border rounded mt-3" placeholder="Transaction Reference Number *" />
        </div>

        {/* Right column */}
        <div className="col-span-2 md:col-span-1">
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="font-bold mb-2">Bank transfer</h3>
            <table className="w-full">
              <tbody>
                <tr>
                  <td>Account Name:</td>
                  <td>Indian Institute of Technology Jodhpur</td>
                </tr>
                <tr>
                  <td>Account Number:</td>
                  <td>[Account number for IIT Jodhpur]</td>
                </tr>
                <tr>
                  <td>SWIFT Code:</td>
                  <td>[SWIFT code for IIT Jodhpur's bank]</td>
                </tr>
                <tr>
                  <td>IFSC Code:</td>
                  <td>[IFSC code for IIT Jodhpur's bank]</td>
                </tr>
                <tr>
                  <td>Bank:</td>
                  <td>State Bank of India</td>
                </tr>
                <tr>
                  <td>Branch:</td>
                  <td>IIT Jodhpur</td>
                </tr>
                <tr>
                  <td>Branch Code:</td>
                  <td>[Branch code for IIT Jodhpur's bank]</td>
                </tr>
                <tr>
                  <td>Branch Address:</td>
                  <td>NH 62, Nagaur Road, Karwar, Jodhpur 342030, Rajasthan</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-gray-200 p-2 text-center mt-4">
            Annual-Gift-Programme
          </div>
          
          <div className="mt-4">
            <p>Mark this donation as Anonymous*</p>
            <div className="mt-2">
              <label className="inline-flex items-center mr-4">
                <input type="radio" {...register("anonymous")} value="yes" className="form-radio" />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" {...register("anonymous")} value="no" className="form-radio" defaultChecked />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
        </div>

        <button type="submit" className="col-span-2 bg-primary text-white py-2 px-4 rounded mt-4">
          Submit
        </button>
      </form>
    </>
  );
};

export default BankTransferForm;