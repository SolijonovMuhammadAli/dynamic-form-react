import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import PropertiesStatus from "./PropertiesStatus";

function PropertiesTable({ data }) {
  const navigate = useNavigate();
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow className="bg-gray-100">
            <TableCell>#</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Turi</TableCell>
            <TableCell>Holati</TableCell>
            <TableCell>Majbury</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="relative">
          {data?.map(({ id, status, name, is_required, type }, index) => (
            <TableRow
              key={id}
              className="cursor-pointer"
              onDoubleClick={() => {
                navigate(`/admin/property/${id}`);
              }}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{type.label}</TableCell>
              <TableCell>
                <PropertiesStatus status={status} />
              </TableCell>
              <TableCell>{is_required ? "Ha" : "Yo'q"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PropertiesTable;

PropertiesTable.propTypes = {
  data: PropTypes.array,
};
