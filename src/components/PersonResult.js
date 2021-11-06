import React from "react";
import PersonTable from "./PersonTable";

export default function PersonResult(props) {
  const displayPersons = (props) => {
    const { hits } = props;

    if (hits.length > 0) {
      return (
        <div>
          <PersonTable tableData={hits} />
        </div>
      );
    } else {
      return <h2>Ingen info enda</h2>;
    }
  };
  return <>{displayPersons(props)}</>;
}
