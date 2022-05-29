import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.email;
    const currentUser = { email: email };
    if (email) {
      fetch(`https://dry-reaches-86494.herokuapp.com/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("inside", data);
          const accessToken = data.token;
          setToken(accessToken);
          localStorage.setItem("accessToken", accessToken);
        });
    }
    console.log(user);
  }, [user]);
  return [token];
};

export default useToken;
