import React from "react";

export default function PersonResult(props) {
  const displayPersons = (props) => {
    const { hits } = props;

    if (hits.length > 0) {
      return hits.map((hit, index) => {
        console.log(hit);

        return (
          <div className="item" key={hit.id}>
            <p>{hit.name}</p>
          </div>
        );
      });
    } else {
      return <h2>Ingen info enda</h2>;
    }
  };
  return <>{displayPersons(props)}</>;
}
