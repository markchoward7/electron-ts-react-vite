import React, { useEffect, useState } from "react";
import { getThings, getThingsBasedOnThings } from "./API";

const App: React.FC = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  useEffect(() => {
    getThings().then((response) => {
      setValue1(response.result);
    });
  }, []);

  useEffect(() => {
    getThingsBasedOnThings({ input: "test2" }).then((response) => {
      setValue2(response.result);
    });
  }, []);

  return (
    <>
      <p>{value1}</p>
      <p>{value2}</p>
    </>
  );
};

export default App;
