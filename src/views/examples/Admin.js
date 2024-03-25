import { useEffect, useMemo, useState } from "react";
import useUser from "./UserProvider.js";
//Date Picker Imports - these should just be in your Context Provider
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import axios from "axios";
//MRT Imports
import {
  MRT_GlobalFilterTextField,
  MRT_ToggleFiltersButton,
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

//Material UI Imports
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  ListItemIcon,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
  lighten,
} from "@mui/material";

//Icons Imports
import { Delete, Edit, Visibility } from "@mui/icons-material";

//Mock Data
import intialData from "../examples/makeData.js"

const Example = () => {
  const [data, setData] = useState(intialData);

  const [allEmployees, setAllEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null); // State to store the selected employee data
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [editedEmployee, setEditedEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    jobTitle: "",
    startDate: "",
    // Add other properties here
  });

  // Function to handle the "View More" button click
  const handleViewMoreClick = (row) => {
    setSelectedEmployee(row.original); // Store the selected employee data in state
    setIsPopupOpen(true); // Open the pop-up
  };

  useEffect(() =>{
    const fetchData = async () => {
      try{
        const response = await axios.get("https://localhost:7221/api/Employee/GetAllEmployees");
        
        const userData = response.data;
      
        console.log(userData);
        setAllEmployees(userData);
      } catch (error) {
         console.error("Error fetching user data:", error);
    }
    };
    fetchData();
  },[]);

  const handleSaveEdit = () => {
    // Find the index of the edited employee in the data array
    const index = data.findIndex((item) => item.id === editedEmployee.id);
    if (index !== -1) {
      // Update the data with the edited employee details
      const newData = [...data];
      newData[index] = editedEmployee;
      setData(newData); // Assuming you have setData function to update the data state
      setIsEditPopupOpen(false); // Close the edit popup
    }
  };

  const handleEditClick = (row) => {
    setEditedEmployee(row.original); // Store the edited employee data
    setIsEditPopupOpen(true); // Open the edit popup
  };

  const renderPopup = () => (
    <Dialog open={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
      <DialogTitle>Employee Details</DialogTitle>
      <DialogContent>
        {/* Display the selected employee data in a table */}
        <TableContainer>
          <Table>
            <TableBody>
              {selectedEmployee &&
                Object.entries(selectedEmployee).map(([key, value]) => (
                  <TableRow key={key}>
                    <TableCell>{key}</TableCell>
                    <TableCell>
                      {key === "startDate" && value instanceof Date
                        ? value.toLocaleString()
                        : value}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
    </Dialog>
  );

  const renderEditPopup = () => (
    <Dialog open={isEditPopupOpen} onClose={() => setIsEditPopupOpen(false)}>
      <DialogContent>
        <Box sx={{ mb: 2 }}>
          {" "}
          {/* Add margin bottom for Employee Details */}
          <Typography variant="h6"> Edit Employee Details</Typography>
        </Box>
        {/* Render a form with employee details */}
        <TextField
          label="First Name"
          variant="outlined"
          fullWidth
          sx={{ mb: 4 }} // Add margin bottom
          value={editedEmployee.firstName}
          onChange={(e) =>
            setEditedEmployee({ ...editedEmployee, firstName: e.target.value })
          }
        />
        <TextField
          label="Last Name"
          variant="outlined"
          fullWidth
          sx={{ mb: 4 }} // Add margin bottom
          value={editedEmployee.lastName}
          onChange={(e) =>
            setEditedEmployee({ ...editedEmployee, lastName: e.target.value })
          }
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          sx={{ mb: 4 }} // Add margin bottom
          value={editedEmployee.email}
          onChange={(e) =>
            setEditedEmployee({ ...editedEmployee, email: e.target.value })
          }
        />
        <TextField
          label="Address"
          variant="outlined"
          fullWidth
          sx={{ mb: 4 }} // Add margin bottom
          value={editedEmployee.address}
          onChange={(e) =>
            setEditedEmployee({ ...editedEmployee, address: e.target.value })
          }
        />

        <TextField
          label="Job Title"
          variant="outlined"
          fullWidth
          sx={{ mb: 4 }} // Add margin bottom
          value={editedEmployee.jobTitle}
          onChange={(e) =>
            setEditedEmployee({ ...editedEmployee, jobTitle: e.target.value })
          }
        />

        <TextField
          label="Start Date"
          variant="outlined"
          fullWidth
          sx={{ mb: 4 }} // Add margin bottom
          value={editedEmployee.startDate}
          onChange={(e) =>
            setEditedEmployee({ ...editedEmployee, startDate: e.target.value })
          }
        />

        {/* Add text fields for other employee details */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleSaveEdit} // Call the handleSaveEdit function when Save is clicked
        >
          Save
        </Button>
      </DialogContent>
    </Dialog>
  );

  const columns = useMemo(
    () => [
      {
        id: "employee", //id used to define `group` column
        header: "Employee",
        columns: [
          {
            accessorFn: (row) => `${row.firstName} ${row.lastName}`, //accessorFn used to join multiple data into a single cell
            id: "name", //id is still required when using accessorFn instead of accessorKey
            header: "Name",
            size: 250,
            Cell: ({ renderedCellValue, row }) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                {/* <img
                  alt="avatar"
                  height={30}
                  src={row.original.avatar}
                  loading="lazy"
                  style={{ borderRadius: "50%" }}
                /> */}
                {/* using renderedCellValue instead of cell.getValue() preserves filter match highlighting */}
                <span>{renderedCellValue}</span>
              </Box>
            ),
          },
          {
            accessorKey: "employee_email", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            enableClickToCopy: true,
            filterVariant: "autocomplete",
            header: "Email",
            size: 300,
          },
        ],
      },
      {
        id: "id",
        header: "Job Info",
        columns: [
          {
            accessorKey: "job_title",
            // filterVariant: 'range', //if not using filter modes feature, use this instead of filterFn
            filterFn: "between",
            header: "Address",
            size: 200,
            //custom conditional format and styling
            Cell: ({ cell }) => (
              <Box
                component="span"
                sx={(theme) => ({
                  backgroundColor:
                    cell.getValue() < 50_000
                      ? theme.palette.error.dark
                      : cell.getValue() >= 50_000 && cell.getValue() < 75_000
                      ? theme.palette.warning.dark
                      : theme.palette.success.dark,
                  borderRadius: "0.25rem",
                  color: "#fff",
                  maxWidth: "9ch",
                  p: "0.25rem",
                })}
              >
                {cell.getValue()?.toLocaleString?.("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </Box>
            ),
          },
          {
            accessorKey: "jobTitle", //hey a simple column for once
            header: "Job Title",
            size: 350,
          },
          {
            accessorFn: (row) => new Date(row.startDate), //convert to Date for sorting and filtering
            id: "startDate",
            header: "Start Date",
            filterVariant: "date",
            filterFn: "lessThan",
            sortingFn: "datetime",
            Cell: ({ cell }) => cell.getValue()?.toLocaleDateString(), //render Date as a string
            Header: ({ column }) => <em>{column.columnDef.header}</em>, //custom header markup
            muiFilterTextFieldProps: {
              sx: {
                minWidth: "250px",
              },
            },
          },
        ],
      },
    ],
    []
  );

  console.log(allEmployees);
  const table = useMaterialReactTable({
    columns,
     data: allEmployees,
    //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableColumnFilterModes: true,
    enableColumnOrdering: true,
    enableGrouping: true,
    enableColumnPinning: true,
    enableFacetedValues: true,
    enableRowActions: true,
    enableRowSelection: true,
    initialState: {
      showColumnFilters: true,
      showGlobalFilter: true,
      columnPinning: {
        left: ["mrt-row-expand", "mrt-row-select"],
        right: ["mrt-row-actions"],
      },
    },
    paginationDisplayMode: "pages",
    positionToolbarAlertBanner: "bottom",
    muiSearchTextFieldProps: {
      size: "small",
      variant: "outlined",
    },
    muiPaginationProps: {
      color: "secondary",
      rowsPerPageOptions: [10, 20, 30],
      shape: "rounded",
      variant: "outlined",
    },
    renderDetailPanel: ({ row }) => (
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-around",
          left: "30px",
          maxWidth: "1000px",
          position: "sticky",
          width: "100%",
        }}
      >
        <img
          alt="avatar"
          height={200}
          src={row.original.avatar}
          loading="lazy"
          style={{ borderRadius: "50%" }}
        />
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4">Signature Catch Phrase:</Typography>
          <Typography variant="h1">
            &quot;{row.original.signatureCatchPhrase}&quot;
          </Typography>
        </Box>
      </Box>
    ),
    renderRowActionMenuItems: ({ closeMenu, row }) => [
      <MenuItem
        key={0}
        onClick={() => {
          handleEditClick(row);
          // View profile logic...
          closeMenu();
        }}
        sx={{ m: 0 }}
      >
        <ListItemIcon>
          <Edit />
        </ListItemIcon>
        Edit
      </MenuItem>,
      <MenuItem
        key={1}
        onClick={() => {
          closeMenu();
        }}
        sx={{ m: 0 }}
      >
        <ListItemIcon>
          <Delete />
        </ListItemIcon>
        Delete
      </MenuItem>,
      <MenuItem
        key={2}
        onClick={() => {
          handleViewMoreClick(row);
          closeMenu();
        }}
        sx={{ m: 0 }}
      >
        <ListItemIcon>
          <Visibility />
        </ListItemIcon>
        View More
      </MenuItem>,
    ],
    renderTopToolbar: ({ table }) => {
      const handleDeactivate = () => {
        table.getSelectedRowModel().flatRows.map((row) => {
          alert("deactivating " + row.getValue("name"));
        });
      };

      const handleActivate = () => {
        table.getSelectedRowModel().flatRows.map((row) => {
          alert("activating " + row.getValue("name"));
        });
      };

      const handleContact = () => {
        table.getSelectedRowModel().flatRows.map((row) => {
          alert("contact " + row.getValue("name"));
        });
      };

      return (
        <Box
          sx={(theme) => ({
            backgroundColor: lighten(theme.palette.background.default, 0.05),
            display: "flex",
            gap: "0.5rem",
            p: "8px",
            justifyContent: "space-between",
          })}
        >
          <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            {/* import MRT sub-components */}
            <MRT_GlobalFilterTextField table={table} />
            <MRT_ToggleFiltersButton table={table} />
          </Box>
          <Box></Box>
        </Box>
      );
    },
  });

  return (
    <>
      {/* Material React Table component */}
      <MaterialReactTable table={table} />
      {renderPopup()}
      {renderEditPopup()}
    </>
  );
};



const Admin = () => {
  const { loggedUserData } = useUser();
  console.log(loggedUserData.role_id)
  //App.tsx or AppProviders file
  return (
    <>
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {loggedUserData && loggedUserData.role_id > 1 ? (
          <Example />
        ):(
       <p>No Access</p>
        )}
        
      </LocalizationProvider>
    </div>
    </>
  );
}
  
  

export default Admin;
