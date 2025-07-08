import React from "react";

const QuickInfoCard = () => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-300 flex flex-col gap-3">
      <h3 className="font-semibold text-xl mb-2">Quick Info</h3>
      <div className="grid grid-cols-2 gap-3 text-sm text-gray-800">
        <div>
          <p className="font-medium">Years of Experience</p>
          <p>5+ years</p>
        </div>
        <div>
          <p className="font-medium">Shoots Completed</p>
          <p>500+</p>
        </div>
        <div>
          <p className="font-medium">Response Time</p>
          <p>Within 2 hours</p>
        </div>
        <div>
          <p className="font-medium">Booking Advance</p>
          <p>2-3 weeks</p>
        </div>
      </div>
    </div>
  );
};

export default QuickInfoCard;
