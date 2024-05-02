import axios from "axios";
import React, { useEffect, useState } from "react";
import { ICountries } from "../../Types";

const Countries = () => {
  const [count, setCount] = useState<ICountries[]>([]);
  const GetCount = async () => {
    const res = await axios<ICountries[]>(`https://restcountries.com/v3.1/all`);
    const { data } = res;
    setCount(data);
  };
  console.log(count);

  useEffect(() => {
    GetCount();
  }, []);
  return (
    <div className="">
      <div className="container">
        <div
          className=""
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
          {count.map((el) => (
            <div
              className=" df "
              style={{
                width: "350px",
                height: "300px",
                background: "#fafafa",
                borderRadius: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "column",
                border: "solid black 2px",
                boxShadow: "10px black",
              }}
            >
              <img
                style={{
                  width: "350px",
                  height: "200px",
                  borderTopLeftRadius: "30px",
                 borderTopRightRadius:"30px"
                }}
                src={el.flags.png}
                alt="img"
              />
              <h1>{el.name.common}</h1>
              <h3>{el.area}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;
