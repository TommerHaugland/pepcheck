import React, { useState, useEffect, useCallback, useRef } from "react";

import axios from "axios";
import PersonResult from "./PersonResult";
import Loader from "react-loader-spinner";

export default function Person() {
  const [hits, setHits] = useState(undefined);
  const [name, setName] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);
  //Run only on render depedency
  const didLoad = useRef(false);
  //Hent data fra API
  //Will return a memoized version of the callback that only changes if one of the dependencies has changed.
  const getAllHits = useCallback(() => {
    //Setter loading til true
    setLoading(true);
    //GET hits basert på navn > lagre responsen i Allhits
    axios
      .get(`${url}pep?name=${name}`)
      .then((response) => {
        const allHits = response.data.hits;
        setHits(allHits);
        setLoading(false);
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
        setLoading(false);
        setErrorMessage(error);
      });
  }, [name]);
  //useEffect må bli kalt etter funksjonen getAllHits
  //Gjør at hver gang name value endres skal getAllHits kjøres på nytt
  useEffect(() => {
    //Iffen gjør slik at den ikke søker ved mount, dvs ikke kjør on første load
    if (didLoad.current) {
      const timeOutId = setTimeout(() => getAllHits(), 500);
      return () => clearTimeout(timeOutId);
    }
    didLoad.current = true;
  }, [getAllHits]);

  //api url
  const url = "https://stacc-code-challenge-2021.azurewebsites.net/api/";

  return (
    <>
      <div>
        <form>
          <div className="input-field">
            <label>
              Navn:
              <input
                type="text"
                name="name"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    getAllHits();
                  }
                }}
                //Hver gang en skriver inn blir value laget i setName
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <input type="button" value="Submit" onClick={() => getAllHits()} />
          </div>
        </form>
        {/* Hvis treff og ikke loader, render hits */}
        {hits && !loading && <PersonResult hits={hits} />}

        {loading && (
          <Loader
            type="Grid"
            color="#00BFFF"
            height={300}
            width={300}
            timeout={7000} //7 secs
          />
        )}
        {/* Hvis error og loading er false vis melding */}

        {errorMessage &&
          !loading &&
          (console.log(errorMessage),
          (<div>No such name exists in the dataset</div>))}
      </div>
    </>
  );
}
