import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";



export default function Basictable({ filteredData }) {
    return (
        <div className="container">
            <Paper sx={{ width: "70%", overflow: "hidden" }}>
                <TableContainer sx={{ maxHeight: 600 }}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {/* <TableCell>S.No</TableCell> */}
                                <TableCell align="center">Title</TableCell>
                                <TableCell align="center">year</TableCell>
                                <TableCell align="left">Description</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredData.map((ele, id) => (
                                <TableRow key={id}>
                                    {/* <TableCell component="th" scope="row">
                                        {row.number}
                                    </TableCell> */}
                                    <TableCell align="center">{ele.title}</TableCell>
                                    <TableCell align="center">{ele.year}</TableCell>
                                    <TableCell align="left">{ele.description}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper >
        </div>
    );
}
