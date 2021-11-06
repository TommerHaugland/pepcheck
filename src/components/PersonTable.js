import React from "react";
import Table from "./Table";
import { SelectColumnFilter } from "./Table";

function PersonTable({ tableData }) {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        Filter: SelectColumnFilter, // new
        filter: "includes", // new
      },
      {
        Header: "id",
        accessor: "id",
        Filter: SelectColumnFilter, // new
        filter: "includes", // new
      },
      {
        Header: "Aliases",
        accessor: "aliases",
        Filter: SelectColumnFilter, // new
        filter: "includes", // new
      },
      {
        Header: "Countries",
        accessor: "countries",
        Filter: SelectColumnFilter, // new
        filter: "includes", // new
      },
      {
        Header: "Dataset",
        accessor: "dataset",
        Filter: SelectColumnFilter, // new
        filter: "includes", // new
      },
      {
        Header: "Last_Seen",
        accessor: "last_seen",
        Filter: SelectColumnFilter, // new
        filter: "includes", // new
      },
      {
        Header: "First_Seen",
        accessor: "first_seen",
        Filter: SelectColumnFilter, // new
        filter: "includes", // new
      },
    ],
    []
  );

  //Sjekker tableData blir endret
  const data = React.useMemo(() => tableData, [tableData]);

  return (
    <>
      <div>
        <Table columns={columns} data={data} />
      </div>
    </>
  );
}

export default PersonTable;
