import React, { Fragment } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { MasterCards } from "./MasterCards";
import { Modal } from "./Modal";

export const View = () => {
  const [info, setInfo] = useState([]);
  const [stateModal, setStateModal] = useState(false);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character?page=1")
      .then((response) => {
        setInfo(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <MasterCards info={info} setStateModal={setStateModal}/>
      {stateModal && <Modal/>}
      {/* {stateModal && <Modal/>} */}      
    </>
  );
};
