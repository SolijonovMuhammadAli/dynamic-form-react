import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { CircularProgress } from "@mui/material";
import PropertiesStatus from "./PropertiesGroupStatus";

function PropertiesGroupTable({ data }) {
  const navigate = useNavigate();

  if (data?.length === 0) return <CircularProgress color="secondary" />;

  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow className="bg-gray-100">
            <TableCell>#</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Maydoni</TableCell>
            <TableCell>Holati</TableCell>
            <TableCell>Tavsifi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="relative">
          {data?.map(({ id, status, name, feilds, description }, index) => (
            <TableRow
              key={id}
              className="cursor-pointer"
              onDoubleClick={() => {
                navigate(`/admin/properties-groups/${id}`);
              }}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{feilds?.length}</TableCell>
              <TableCell>
                <PropertiesStatus status={status} />
              </TableCell>
              <TableCell>{description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PropertiesGroupTable;

PropertiesGroupTable.propTypes = {
  data: PropTypes.array,
};
