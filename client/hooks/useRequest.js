import axios from "axios";
import { useState } from "react";

const useRequest = ({ url, method, body }) => {
  const [errors, setErrors] = useState(null);

  const dorequest = async () => {
    try {
      setErrors(null);
      const response = await axios[method](url, body);
      return response.data;
    } catch (error) {
      setErrors(
        <div className="alert alert-danger">
          <h4>Something went wrong</h4>
          <ul className="my-0">
            {error.response.data.errors.map((err, i) => (
              <li key={i}>{err.message}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return { dorequest, errors };
};

export { useRequest };
