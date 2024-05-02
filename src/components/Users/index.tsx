import axios from "axios";
import React, { useEffect, useState } from "react";
import { IUsers } from "../../Types";

const Users = () => {
  const [user, setUser] = useState<IUsers[]>([]);
  const GetUser = async () => {
    const res = await axios<IUsers[]>(
      `https://jsonplaceholder.typicode.com/users`
    );
    const { data } = res;
    setUser(data);
  };
  console.log(user);

  useEffect(() => {
    GetUser();
  }, []);
  return (
    <div className="">
      <center>
        {user.map((el:IUsers, idx: number) => (
          <div className="" key={idx}>
            <h1>{el.name}</h1>
            <h4>{el.email}</h4>
            <h3>{el.id}</h3>
            <h3>{el.addres?.city}</h3>
          </div>
        ))}
      </center>
    </div>
  );
};

export default Users;
