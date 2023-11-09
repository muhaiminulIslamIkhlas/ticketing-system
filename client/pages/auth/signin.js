import { useState } from "react";
import { useRequest } from "../../hooks/useRequest";
import Router from "next/router";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dorequest, errors } = useRequest({
    url: "/api/users/signin",
    method: "post",
    body: {
      email,
      password,
    },
    onSuccess: (response) => Router.push("/"),
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    await dorequest();
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign In</h1>
      <div className="form-group">
        <label>Email Address</label>
        <input
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {errors}

      <button className="btn btn-primary">Sign In</button>
    </form>
  );
};

export default SignUp;
