import { useEffect } from "react";
import { useRequest } from "../../hooks/useRequest";
import Router from "next/router";

export default () => {
  const { dorequest } = useRequest({
    url: "/api/users/signout",
    method: "post",
    body: {},
    onSuccess: () => Router.push("/"),
  });

  useEffect(() => {
    dorequest();
  }, []);
  
  return <div>Signing you out...</div>;
};
