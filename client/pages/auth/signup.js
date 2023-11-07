import { useState } from "react";
import axios from "axios";
import { useRequest } from "../../hooks/useRequest";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {dorequest, errors} = useRequest({
    url: '/api/users/signup',
    method: 'post',
    body: {
        email, password
    }
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    dorequest();
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign Up</h1>
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

      <button className="btn btn-primary">Sign Up</button>
    </form>
  );
};

export default SignUp;
