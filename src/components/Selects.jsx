import React from "react";
import BoraBora from "../assets/images/borabora.jpg";
import BoraBora2 from "../assets/images/borabora2.jpg";
import Maldives from "../assets/images/maldives.jpg";
import Maldives2 from "../assets/images/maldives2.jpg";
import Maldives3 from "../assets/images/maldives3.jpg";
import KeyWest from "../assets/images/keywest.jpg";
import SelectsCard from "./SelectsCard";

const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SelectsCard bg={BoraBora} title="Bora Bora" />
      <SelectsCard bg={BoraBora2} title="Maldives" />
      <SelectsCard bg={Maldives} title="Antigua" />
      <SelectsCard bg={Maldives2} title="Cozumel" />
      <SelectsCard bg={Maldives3} title="Jamaica" />
      <SelectsCard bg={KeyWest} title="Key West" />
    </div>
  );
};

export default Selects;
