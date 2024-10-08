import React, { useState } from "react";
import { CreditCard } from "lucide-react";
import ChequeDraftForm from "./ChequeDraftForm";
import BankTransferForm from "./BankTransferForm";

const DonationForm = () => {
  const [activeTab, setActiveTab] = useState("cheque");

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
      <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg">
        <div className="flex mb-4">
          <button
            className={`flex-1 py-2 px-4 rounded-l ${
              activeTab === "cheque"
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("cheque")}
          >
            <CreditCard className="inline mr-2" size={20} />
            Cheque/Draft
          </button>
          <button
            className={`flex-1 py-2 px-4 rounded-r ${
              activeTab === "bank"
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("bank")}
          >
            <CreditCard className="inline mr-2" size={20} />
            Bank Transfer
          </button>
        </div>

        {activeTab === "cheque" ? <ChequeDraftForm /> : <BankTransferForm />}
      </div>
    </div>
  );
};

export default DonationForm;
