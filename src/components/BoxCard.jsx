import React from "react";

const BoxCard = ({ plan }) => {
  const {
    planData,
    planName,
    monthlyCost,
    dataAllowance,
    networkCoverage,
    callAndTextAllowance,
  } = plan;

  return (
    <div className="border-8 border-white p-6 mb-4 rounded-xl bg-black">
        <div className="border-4 border-white rounded-xl bg-gray-300 p-4 size-fit">
            <h1 className="text-black">{planData}</h1>
        </div>
      <div className="space-y-10 text-gray-400 text-xl m-6">
        <h1 className="text-white text-xl font-bold mb-2">
          {planName}
        </h1>
        <p>
          <strong>Monthly Cost:</strong> {monthlyCost}
        </p>
        <p>
          <strong>Data Allowance:</strong> {dataAllowance}
        </p>
        <p>
          <strong>Network Coverage:</strong> {networkCoverage}
        </p>
        <p>
          <strong>Call and Text Allowance:</strong> {callAndTextAllowance}
        </p>
      </div>
    </div>
  );
};

export default BoxCard;
