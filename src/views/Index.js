import CloseIcon from "@mui/icons-material/Close";
import BootstrapDialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { MDBDataTable } from "mdbreact";
import Button from "@mui/material/Button";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

const Employee = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event, employeeId) => {
    setAnchorEl(event.currentTarget);
    setSelectedEmployee(employeeData.find((emp) => emp.id === employeeId));
    setOpenDialog(true); // Open the dialog when a new employee is selected
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  
  const handleEditClick = () => {
    handleClose();
    // Add your logic for handling edit action here
  };

  const handleDeleteClick = () => {
    handleClose();
    // Add your logic for handling delete action here
  };
  const handleViewMoreClick = (employeeId) => {
    console.log("Selected Employee ID:", employeeId);
    setSelectedEmployee(employeeData.find((emp) => emp.id === employeeId));
    setOpenDialog(false);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState(null);

  const handleDropdownSelect = (selectedItem) => {
    setSelectedStatus(selectedItem);

    const filteredEmployee = employeeData.filter(
      (emp) => emp.work_mode === selectedItem
    );

    setFilteredEmployees(filteredEmployee);
  };

  const employeeData = [
    {
      id: "WS1000",
      employee_name: "John Doe",
      client_name: "ABC Corp",
      email: "john@example.com",
      image: (
        <img
          src="https://via.placeholder.com/50"
          alt="John Doe"
          style={{ width: "50px", height: "50px" }}
        />
      ),
      address: "123 Main St, City",
      salary: "$50,000",
      work_mode: "Hybrid",
    },
    {
      id: "WS2000",
      employee_name: "Rishie",
      client_name: "Shimming",
      email: "rishie@example.com",
      image: (
        <img
          src="https://via.placeholder.com/50"
          alt="John Doe"
          style={{ width: "50px", height: "50px" }}
        />
      ),
      address: "123  St, City",
      salary: "$50,000",
      work_mode: "Hybrid",
    },
    {
      id: "WS3000",
      employee_name: "Mukesh ",
      client_name: "Tripanzee",
      email: "mukesh@example.com",
      image: (
        <img
          src="https://via.placeholder.com/50"
          alt="John Doe"
          style={{ width: "50px", height: "50px" }}
        />
      ),
      address: "123 Main St, City",
      salary: "$50,000",
      work_mode: "Hybrid",
    },
    {
      id: "WS4000",
      employee_name: "Shiva",
      client_name: "Gim",
      email: "shiva@example.com",
      image: (
        <img
          src="https://via.placeholder.com/50"
          alt="John Doe"
          style={{ width: "50px", height: "50px" }}
        />
      ),
      address: "123 Main St, City",
      salary: "$50,000",
      work_mode: "Hybrid",
    },
    // Add more employee data as needed
  ];

  const data = {
    columns: [
      {
        label: "Employee ID",
        field: "id",
        sort: "asc",
        width: 200,
      },
      {
        label: "Employee Name",
        field: "client_name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 200,
      },
      {
        label: "Address",
        field: "address",
        sort: "asc",
        width: 100,
      },

      {
        label: "Work Mode",
        field: "work_mode",
        sort: "asc",
        width: 100,
      },
      {
        label: "Action",
        field: "editButton",
        width: 100,
      },
    ],
    rows: filteredEmployees.length ? filteredEmployees : employeeData.map((employee) => ({
      ...employee,
      editButton: (
        <>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={(event) => handleClick(event, employee.id)} // Pass employee.id to handleClick
          >
            <IconButton color="inherit" aria-label="more">
              <MoreVertIcon />
            </IconButton>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleEditClick}>Edit</MenuItem>
            <MenuItem onClick={handleDeleteClick}>Delete</MenuItem>
            <MenuItem onClick={() => handleViewMoreClick(employee.id)}> {/* Pass employee.id to handleViewMoreClick */}
              View More
            </MenuItem>
          </Menu>
        </>
      ),
    })),
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="px-5 mt-6">
            {/* <Link to="/admin/addemployee" className="btn btn-success">
              Add Employee
            </Link> */}
            <div className="mb-3"></div>
            <div className="row align-items-center">
              <div className="col-md-4"></div>
              {/* <div className="col-md-8 mr-2">
                <Dropdown onSelect={handleDropdownSelect}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {selectedStatus || "Select Work Mode"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="Hybrid">Hybrid</Dropdown.Item>
                    <Dropdown.Item eventKey="Work From Home">
                      Work From Home
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="Remote Location">
                      Remote Location
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row justify-content-center">
        <div className="col-12">
          <MDBDataTable striped bordered small data={data} sorting="false" />
        </div>
      </div>

      <BootstrapDialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>Employee Details</Grid>
            <Grid item>
              <IconButton
                onClick={handleCloseDialog}
                color="inherit"
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Field</TableCell>
                  <TableCell>Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedEmployee &&
                  Object.entries(selectedEmployee).map(([key, value]) => (
                    <TableRow key={key}>
                      <TableCell>{key}</TableCell>
                      <TableCell>{value}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default Employee;
