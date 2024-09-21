import React, { useEffect, useState } from "react";
import axios from "axios";
var bien = 0;
const GetALLUser = async () => {
  const token = await GetToken();
  console.log("token");
  console.log(token);
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  axios
    .get("http://14.225.217.118:8080/demo1/users", config)
    .then((response) => {
      console.log(bien);
      console.log(response);
      bien++;
    })
    .catch(() => {});
};

const GetToken = async () => {
  try {
    const response = await axios.post(
      "http://14.225.217.118:8080/demo1/auth/token",
      {
        userName: "admin",
        passWord: "admin",
      }
    );
    console.log("rs");
    console.log(response);
    console.log(response.data.result.token);
    return response.data.result.token; // Trả về token
  } catch (error) {
    console.log(error);
    return null; // Xử lý lỗi và trả về null nếu có lỗi
  }
};

const Photo = () => {
  useEffect(() => {
    document.title = "welcome";
    GetALLUser();
  }, []);
  return <div>Photo</div>;
};

export default Photo;
