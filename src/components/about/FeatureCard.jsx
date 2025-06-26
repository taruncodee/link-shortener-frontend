import React from "react";

const FeatureCard = ({ feature }) => {
  const { icon, title, description } = feature;
  return (
    <div className="flex gap-2">
      <div className="w-12 text-2xl pb-0">{icon}</div>
      <div className="">
        <h2 className="text-2xl leading-6 mb-2 pb-0 italic font-semibold">
          {title}
        </h2>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
