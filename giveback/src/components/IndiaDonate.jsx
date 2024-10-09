import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import { CreditCard } from "lucide-react";

const CardTab = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const [donationType, setDonationType] = useState("one-time");
  const [other, setOther] = useState(false);
  const [frequency, setFrequency] = useState("Monthly");
  const [duration, setDuration] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [taxReceipt, setTaxReceipt] = useState("email");

  const amount = watch("amount");

  const onSubmit = (data) => {
    console.log(data);
    reset();
    setValue("amount", "");
    // Handle form submission
  };

  const handleAmountClick = (amt) => {
    setValue("amount", amt);
    setOther(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          {...register("name", { required: true })}
          className="p-2 border rounded"
          placeholder="Your Name *"
        />
        <input
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          className="p-2 border rounded"
          placeholder="Your Email *"
        />
        <input
          {...register("phone", { required: true })}
          className="p-2 border rounded"
          placeholder="Your Phone *"
        />
        <select
          {...register("affiliation", { required: true })}
          className="p-2 border rounded"
        >
          <option value="">Select Affiliation*</option>
          <option value="Alumni">Alumni</option>
          <option value="Non Alumni">Non Alumni</option>
          <option value="Organization">Organization</option>
        </select>
      </div>

      <input
        {...register("pan", { required: true })}
        className="p-2 border rounded w-full mb-4"
        placeholder="PAN NUMBER (Mandatory Field for 80G certificate)"
      />

      <div className="bg-gray-100 p-2 text-center mb-4">
        Annual-Gift-Programme
      </div>

      <div className="flex justify-between items-start mb-4 ">
        <div className="w-2/3 pr-4 border p-4 m-4 rounded-lg">
          <div className="flex mb-2">
            <button
              type="button"
              className={`px-4 py-2 rounded-l ${
                donationType === "one-time"
                  ? "bg-primary text-white"
                  : "bg-blue-100 text-blue-600"
              }`}
              onClick={() => setDonationType("one-time")}
            >
              One Time
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-r ${
                donationType === "recurring"
                  ? "bg-primary text-white"
                  : "bg-blue-100 text-blue-600"
              }`}
              onClick={() => setDonationType("recurring")}
            >
              Recurring
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {(donationType === "recurring"
              ? ["1,000", "2,000", "5,000", "10,000", "25,000"]
              : ["5,00,000", "3,00,000", "1,00,000", "51,000", "21,000"]
            ).map((amt) => (
              <button
                key={amt}
                type="button"
                className={`p-2 rounded ${
                  amount === amt ? "bg-orange-300" : "bg-gray-200"
                }`}
                onClick={() => handleAmountClick(amt)}
              >
                ₹ {amt}
              </button>
            ))}
            <button
              type="button"
              className={`p-2 rounded ${
                other ? "bg-orange-300" : "bg-gray-200"
              }`}
              onClick={() => {
                setOther(true);
                setValue("amount", "");
              }}
            >
              Others
            </button>
          </div>
          {other && (
            <input
              {...register("amount", { required: other })}
              className="p-2 border rounded w-full mb-4"
              placeholder="Enter Amount"
            />
          )}
          {!other && (
            <input type="hidden" {...register("amount", { required: true })} />
          )}
          {donationType === "recurring" && (
            <div className="mb-4">
              <div className="bg-gray-100 text-black py-2 px-4 mb-2">
                Frequency
              </div>
              <div className="flex gap-2">
                <select
                  {...register("frequency")}
                  className="flex-1 p-2 border rounded"
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                >
                  <option>Monthly</option>
                  <option>Quarterly</option>
                  <option>Annually</option>
                </select>
                <select
                  {...register("duration")}
                  className="flex-1 p-2 border rounded"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                >
                  <option value="">Select Duration</option>
                  <option>3 months</option>
                  <option>6 months</option>
                  <option>1 year</option>
                </select>
              </div>
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded mt-2"
          >
            Pay Now
          </button>
        </div>
        <div className="border mt-4 p-4 rounded-lg pb-16 w-1/3">
          <div className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register("isAnonymous")}
                checked={isAnonymous}
                onChange={() => setIsAnonymous(!isAnonymous)}
                className="mr-2"
              />
              Mark this donation as Anonymous*
            </label>
          </div>
          <div>
            <p className="mb-1 text-left font-semibold text-lg mt-4">
              Need tax receipt*
            </p>
            {["email", "hard-copy", "both"].map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="radio"
                  {...register("taxReceipt")}
                  checked={taxReceipt === option}
                  onChange={() => setTaxReceipt(option)}
                  className="mr-2"
                />
                {option === "email"
                  ? "Email"
                  : option === "hard-copy"
                  ? "Hard Copy"
                  : "Both"}
              </label>
            ))}
          </div>
        </div>
      </div>
    </form>
  );
};

const ChequeTab = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-gray-100 p-4 rounded mb-4 text-sm">
        All donations qualify for a 100% tax deduction, with tax receipts issued
        upon clearance of the cheque/draft, a process that typically takes 7-10
        working days; please refer to the Tax Exemption tab for more
        information.
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <input
            {...register("name", { required: true })}
            className="p-2 border rounded w-full mb-4"
            placeholder="Name *"
          />
          <input
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            className="p-2 border rounded w-full mb-4"
            placeholder="Your Email *"
          />
          <input
            {...register("phone", { required: true })}
            className="p-2 border rounded w-full mb-4"
            placeholder="Your Phone *"
          />
          <select
            {...register("category", { required: true })}
            className="p-2 border rounded w-full mb-4"
          >
            <option value="">Select Category *</option>
            <option value="Alumni">Alumni</option>
            <option value="Non Alumni">Non Alumni</option>
            <option value="Organization">Organization</option>
          </select>
          <input
            {...register("pan", { required: true })}
            className="p-2 border rounded w-full mb-4"
            placeholder="PAN NUMBER (Mandatory Field for 80G certificate)"
          />
          <input
            {...register("amount", { required: true })}
            className="p-2 border rounded w-full mb-4"
            placeholder="Amount *"
          />
          <input
            {...register("payeeBank", { required: true })}
            className="p-2 border rounded w-full mb-4"
            placeholder="Payee Bank *"
          />
          <input
            {...register("chequeNumber", { required: true })}
            className="p-2 border rounded w-full mb-4"
            placeholder="Cheque Number *"
          />
          <input
            {...register("chequeDate", { required: true })}
            className="p-2 border rounded w-full mb-4"
            placeholder="Cheque Date*"
            type="date"
          />
        </div>
        <div>
          <div className="bg-blue-100 p-4 rounded mb-4">
            <h3 className="font-bold mb-2">
              Payable to "Endowment Fund Account, IIT Jodhpur"
            </h3>
            <p>Office of Dean of Resources and Alumni (DORA)</p>
            <p>Room No. [Not specified in search results]</p>
            <p>Faculty Building</p>
            <p>Indian Institute of Technology Jodhpur</p>
            <p>NH 62, Nagaur Road, Karwar</p>
            <p>Jodhpur 342030 (Rajasthan), INDIA</p>
            <p>Phone: +91-291-2801036</p>
          </div>
          <p className="mb-4">
            Please send scanned copy of Cheque at dora_desk@iitj.ac.in
          </p>
          <div className="bg-gray-100 p-2 text-center mb-4">
            Annual-Gift-Programme
          </div>
          <div className="mb-4">
            <p className="mb-2">Mark this donation as Anonymous*</p>
            <label className="inline-flex items-center mr-4">
              <input type="radio" {...register("anonymous")} value="yes" />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register("anonymous")}
                value="no"
                defaultChecked
              />
              <span className="ml-2">No</span>
            </label>
          </div>
          <div className="mb-4">
            <p className="mb-2">Need tax receipt*</p>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                {...register("taxReceipt")}
                value="email"
                defaultChecked
              />
              <span className="ml-2">Email</span>
            </label>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                {...register("taxReceipt")}
                value="hardCopy"
              />
              <span className="ml-2">Hard Copy</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" {...register("taxReceipt")} value="both" />
              <span className="ml-2">Both</span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

const CreditCardTab = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-gray-100 p-4 rounded mb-4 text-sm">
        All donations qualify for a 100% tax deduction, with tax receipts issued
        upon receipt of funds, typically within 3-4 working days; please refer
        to the Tax Exemption tab for more details.
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <input
            {...register("name", { required: true })}
            className="p-2 border rounded w-full mb-4"
            placeholder="Name *"
          />
          <input
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            className="p-2 border rounded w-full mb-4"
            placeholder="Your Email *"
          />
          <input
            {...register("phone", { required: true })}
            className="p-2 border rounded w-full mb-4"
            placeholder="Your Phone *"
          />
          <select
            {...register("category", { required: true })}
            className="p-2 border rounded w-full mb-4"
          >
            <option value="">Select Category*</option>
            <option value="Alumni">Alumni</option>
            <option value="Non Alumni">Non Alumni</option>
            <option value="Organization">Organization</option>
          </select>
          <input
            {...register("pan", { required: true })}
            className="p-2 border rounded w-full mb-4"
            placeholder="PAN NUMBER (Mandatory Field for 80G certificate)"
          />
          <input
            {...register("amount", { required: true })}
            className="p-2 border rounded w-full mb-4"
            placeholder="Amount *"
          />
          <input
            {...register("payeeBank", { required: true })}
            className="p-2 border rounded w-full mb-4"
            placeholder="Payee Bank *"
          />
          <input
            {...register("transactionRef", { required: true })}
            className="p-2 border rounded w-full mb-4"
            placeholder="Transaction Reference Number *"
          />
          <input
            {...register("transactionDate", { required: true })}
            className="p-2 border rounded w-full mb-4"
            placeholder="Date of transaction*"
            type="date"
          />
        </div>
        <div>
          <div className="bg-blue-100 p-4 rounded mb-4">
            <h3 className="font-bold mb-2">
              Bank Transfer Details : NEFT/RTGS
            </h3>
            <table className="w-full">
              <tbody>
                <tr>
                  <td>Account Name</td>
                  <td>Indian Institute of Technology Jodhpur</td>
                </tr>
                <tr>
                  <td>Account Number</td>
                  <td>[Not specified in search results]</td>
                </tr>
                <tr>
                  <td>Branch Name</td> <td>IIT Jodhpur</td>
                </tr>
                <tr>
                  <td>Bank Name</td> <td>State Bank of India</td>
                </tr>
                <tr>
                  <td>IFS Code</td> <td>[Not specified in search results]</td>
                </tr>
                <tr>
                  <td>SWIFT Code</td> <td>[Not specified in search results]</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gray-100 p-2 text-center mb-4">
            Annual-Gift-Programme
          </div>
          <div className="mb-4">
            <p className="mb-2">Mark this donation as Anonymous*</p>
            <label className="inline-flex items-center mr-4">
              <input type="radio" {...register("anonymous")} value="yes" />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register("anonymous")}
                value="no"
                defaultChecked
              />
              <span className="ml-2">No</span>
            </label>
          </div>
          <div className="mb-4">
            <p className="mb-2">Need tax receipt*</p>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                {...register("taxReceipt")}
                value="email"
                defaultChecked
              />
              <span className="ml-2">Email</span>
            </label>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                {...register("taxReceipt")}
                value="hardCopy"
              />
              <span className="ml-2">Hard Copy</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" {...register("taxReceipt")} value="both" />
              <span className="ml-2">Both</span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

const TaxExemptionTab = () => {
  return (
    <div>
      <table className="w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Contributors</th>
            <th className="border border-gray-300 p-2">Beneficiary</th>
            <th className="border border-gray-300 p-2">Allowed deductions</th>
            <th className="border border-gray-300 p-2">
              Sections/ Classification of IRS
            </th>
            <th className="border border-gray-300 p-2">Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">
              Individual (Indian Residents)
            </td>
            <td className="border border-gray-300 p-2">
              Endowment Fund Account, IIT Jodhpur
            </td>
            <td className="border border-gray-300 p-2">100%</td>
            <td className="border border-gray-300 p-2">
              80G of Income Tax Act, 1961.
            </td>
            <td className="border border-gray-300 p-2">
              <a href="#" className="text-primary">
                Govt. notification
              </a>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">
              Body Corporate (Corporate Donations)
            </td>
            <td className="border border-gray-300 p-2">
              Endowment Fund Account, IIT Jodhpur
            </td>
            <td className="border border-gray-300 p-2">100%</td>
            <td className="border border-gray-300 p-2">
              80G of Income Tax Act, 1961.
            </td>
            <td className="border border-gray-300 p-2">
              <a href="#" className="text-primary">
                Govt. notification
              </a>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">
              Body Corporate (Corporate Donations for stated objective)
            </td>
            <td className="border border-gray-300 p-2">
              Corporate Research Fund Account, IIT Jodhpur
            </td>
            <td className="border border-gray-300 p-2">100%</td>
            <td className="border border-gray-300 p-2">
              35(1)(ii) of Income Tax Act, 1961.
            </td>
            <td className="border border-gray-300 p-2">
              <a href="#" className="text-primary">
                Govt. notification
              </a>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">
              Body Corporate (Corporate Donations for scientific research)
            </td>
            <td className="border border-gray-300 p-2">
              Corporate Research Fund Account, IIT Jodhpur
            </td>
            <td className="border border-gray-300 p-2">100%</td>
            <td className="border border-gray-300 p-2">
              35(2AA) of Income Tax Act,1961.
            </td>
            <td className="border border-gray-300 p-2">
              <a href="#" className="text-primary">
                Form 3CG
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="bg-gray-100 p-4 rounded">
        <h3 className="font-bold mb-2">Corporate Social Responsibility(CSR)</h3>
        <p>
          IIT Jodhpur is eligible to accept funding from Corporate Social
          Responsibility Initiatives for the purpose of education, as mentioned
          under Schedule VII & Section 135 of Companies Act 2013.
        </p>
        <a href="#" className="text-primary">
          Click here to view Pan Card of IIT Jodhpur
        </a>
      </div>
    </div>
  );
};

// Main component
const DonationForm = () => {
  const [activeTab, setActiveTab] = useState("card");

  const tabContent = {
    card: <CardTab />,
    cheque: <ChequeTab />,
    transfer: <CreditCardTab />,
    tax: <TaxExemptionTab />,
  };

  return (
    <div className="p-12">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-medium font-suse">
          Make a <span className="text-primary">Gift</span>
        </h2>
        <p className="text-gray-600">
          We express our gratitude for your generosity.
        </p>
      </div>
      <div className="w-[80%] mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="flex mb-4 space-x-2">
          {[
            {
              id: "card",
              icon: CreditCard,
              label: "Debit / Credit Card / Netbanking / UPI",
            },
            { id: "cheque", icon: CreditCard, label: "Cheque/Draft" },
            { id: "transfer", icon: CreditCard, label: "Bank Transfer" },
            { id: "tax", icon: CreditCard, label: "Tax Exemption" },
          ].map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              className={`flex items-center px-4 py-2 rounded ${
                activeTab === id ? "bg-primary text-white" : "bg-gray-200"
              }`}
              onClick={() => setActiveTab(id)}
            >
              <Icon className="mr-2" size={16} />
              {label}
            </button>
          ))}
        </div>
        {tabContent[activeTab]}
      </div>
    </div>
  );
};

export default DonationForm;
