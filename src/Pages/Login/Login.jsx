import React from "react";

import { useEffect, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <input id="userName"></input>
      <input id="password"></input>
    </div>
  );
};

export default Login;
