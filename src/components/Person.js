import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonResult from "./PersonResult";

export default function Person() {
  const [hits, getHits] = useState("");

  //Hent data fra API
  const url = "https://stacc-code-challenge-2021.azurewebsites.net/api/";

  useEffect(() => {
    getAllHits();
  }, []);

  const getAllHits = () => {
    axios
      .get(`${url}pep?name=Knut%20Arild%20Hareide`)
      .then((response) => {
        const allHits = response.data.hits;
        getHits(allHits);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return <PersonResult hits={hits} />;
}
