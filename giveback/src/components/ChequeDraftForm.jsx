import React from "react";
import { useForm } from "react-hook-form";

const ChequeDraftForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <>
      <div className="bg-gray-100 p-3 mb-4 text-sm">
        Donation acknowledgment will be shared upon realization of the cheque/
        draft, which may take 2-3 weeks, after the receipt of the cheque/ draft.
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-4"
      >
        {/* Left column */}
        <div className="col-span-2 md:col-span-1">
          <input
            {...register("name", { required: true })}
            className="w-full p-2 border rounded"
            placeholder="Name *"
          />
          <input
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            className="w-full p-2 border rounded mt-3"
            placeholder="Your Email *"
          />
          <input
            {...register("phone")}
            className="w-full p-2 border rounded mt-3"
            placeholder="Your Phone"
          />
          <select
            {...register("category", { required: true })}
            className="w-full p-2 border rounded mt-3"
          >
            <option value="">Select Category*</option>
            <option value="Alumni">Alumni</option>
            <option value="Non Alumni">Non Alumni</option>
            <option value="Organization">Organization</option>
          </select>
          <select
            {...register("currency", { required: true })}
            className="w-full p-2 border rounded mt-3"
          >
            <option value="">Select Currency *</option>
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
          <input
            {...register("amount", { required: true })}
            className="w-full p-2 border rounded mt-3"
            placeholder="Amount *"
          />
          <input
            {...register("payeeBank", { required: true })}
            className="w-full p-2 border rounded mt-3"
            placeholder="Payee Bank *"
          />
          <div className="mt-3">
            <label className="block mb-1 text-left">Cheque Date*</label>
            <input
              {...register("chequeDate", { required: true })}
              className="w-full p-2 border rounded"
              type="date"
            />
          </div>
          <input
            {...register("chequeNumber", { required: true })}
            className="w-full p-2 border rounded mt-3"
            placeholder="Cheque Number *"
          />
        </div>

        {/* Right column */}
        <div className="col-span-2 md:col-span-1">
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="font-bold mb-2">Cheque/Draft</h3>
            <p>Payable to 'Indian Institute of Technology Jodhpur'</p>
            <p className="font-bold mt-4">Dispatch Address-</p>
            <p>Office of Dean of Resources and Alumni (DORA)</p>
            <p>Faculty Building</p>
            <p>Indian Institute of Technology Jodhpur</p>
            <p>NH 62, Nagaur Road, Karwar</p>
            <p>Jodhpur 342030 (Rajasthan)</p>
            <p>Phone: +91-291-2801036</p>
            <p className="mt-2">
              Please send scanned copy of Cheque at dora@iitj.ac.in
            </p>
          </div>

          <div className="bg-gray-200 p-2 text-center mt-4">
            Annual-Gift-Programme
          </div>

          <div className="mt-4">
            <p>Mark this donation as Anonymous*</p>
            <div className="mt-2">
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  {...register("anonymous")}
                  value="yes"
                  className="form-radio"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  {...register("anonymous")}
                  value="no"
                  className="form-radio"
                  defaultChecked
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="col-span-2 bg-primary text-white py-2 px-4 rounded mt-4"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ChequeDraftForm;
