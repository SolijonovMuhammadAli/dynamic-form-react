import React from "react";

function CardContent({ children, title }) {
  return (
    <div className="m-2 bg-white rounded">
      <div className="p-4 border-b-2 border-gray-300 text-lg font-medium">
        {title}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

export default CardContent;
