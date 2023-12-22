import IMAGES from "@/assets";
import Image from "next/image";
import React from "react";

export const RadioGroup = ({ setPrize, prize }) => {
  const handleChange = (e) => setPrize(e.target.value);
  return (
    <div
      className="flex flex-col"
      style={{ marginLeft: -200, marginTop: 30, gap: 20 }}
    >
      <div>
        <label>
          <input
            type="radio"
            name="radioGroup"
            value="100000"
            onChange={handleChange}
            defaultChecked
          />
          <Image src={IMAGES.image100} alt="Option 1" width={150} />
        </label>
        <span className="neonText" style={{ fontSize: 60, padding: 20 }}>
          x
        </span>
        <span className="neonText" style={{ fontSize: 80 }}>
          4
        </span>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="radioGroup"
            value="200000"
            onChange={handleChange}
          />
          <Image src={IMAGES.image200} alt="Option 1" width={150} />
        </label>
        <span className="neonText" style={{ fontSize: 60, padding: 20 }}>
          x
        </span>
        <span className="neonText" style={{ fontSize: 80 }}>
          1
        </span>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="radioGroup"
            value="250000"
            onChange={handleChange}
          />
          <Image src={IMAGES.image250} alt="Option 1" width={150} />
        </label>{" "}
        <span className="neonText" style={{ fontSize: 60, padding: 20 }}>
          x
        </span>
        <span className="neonText" style={{ fontSize: 80 }}>
          1
        </span>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="radioGroup"
            value="300000"
            onChange={handleChange}
          />
          <Image src={IMAGES.image300} alt="Option 1" width={150} />
        </label>
        <span className="neonText" style={{ fontSize: 60, padding: 20 }}>
          x
        </span>
        <span className="neonText" style={{ fontSize: 80 }}>
          1
        </span>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="radioGroup"
            value="350000"
            onChange={handleChange}
          />
          <Image src={IMAGES.image350} alt="Option 1" width={150} />
        </label>
        <span className="neonText" style={{ fontSize: 60, padding: 20 }}>
          x
        </span>
        <span className="neonText" style={{ fontSize: 80 }}>
          1
        </span>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="radioGroup"
            value="500000"
            onChange={handleChange}
          />
          <Image src={IMAGES.image500} alt="Option 1" width={150} />
        </label>
        <span className="neonText" style={{ fontSize: 60, padding: 20 }}>
          x
        </span>
        <span className="neonText" style={{ fontSize: 80 }}>
          2
        </span>
      </div>
    </div>
  );
};
