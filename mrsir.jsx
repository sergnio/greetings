import React, { useState, useEffect } from "react";
import axios from "axios";
​
async function GreetingsComp() {
  const [greeting, setGreeting] = useState("");
  const getData = async () => {
    const url = "https://postman-echo.com/get?message=Mr.%20Sir";
    const {
      data: {
        args: { message }
      },
      status
    } = axios(url);
​
    setGreeting(message);
  };
​
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <h1>{greeting}</h1>>
    </>
  );

