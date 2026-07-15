import React from "react";
import { useSheetData } from "../context/SheetDataContext";

export function Logo({ className = "h-12", showText = true }) {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src="https://i.postimg.cc/d37ndZRq/Western-Study-Logo.jpg"
        alt="Western Study Logo"
        referrerPolicy="no-referrer"
        className="h-full w-auto object-contain rounded-lg"
      />
    </div>
  );
}
export function CeoImage() {
  const { ceoImage } = useSheetData();
  console.log(ceoImage);
  return (
    <img
      src={ceoImage}
      alt="Western Study Ceo Image"
      referrerPolicy="no-referrer"
      className="h-full w-auto object-contain rounded-lg"
    />
  );
}
