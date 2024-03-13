import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { axios} from "axios";
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";
import img1 from "../../assets/img/brand/Web-Synergies-Transparent-Logo-High-resolution-1.png";

const Login = () => {
  useEffect(() => {
    // Store the email "admin@gmail.com" in local storage
  }, []);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loggedUserData, setLoggedUserData] = useState({});
  const [allEmployees, setAllEmployees] = useState([]);

  useEffect(() => {
    // Static data from the backend
    const userData = {
      "loggedUserData": {
        "id": 0,
        "emp_id": "WSINDadmin",
        "first_name": "test_admin",
        "last_name": "string",
        "surname": "string",
        "dob": "2000-01-01T00:00:00",
        "doj": "2010-01-01T00:00:00",
        "gender": "m",
        "reporting_manager": null,
        "phone": "9876543210",
        "personal_email": "admin@gmail.com",
        "employee_email": "admin@websyn.com",
        "address": "hyderabad",
        "blood_group": "O+",
        "job_title": "CEO",
        "about_me": "I am admin",
        "role_id": 1
      },
      "allEmployees": [
        {
          "emp_id": "001",
          "first_name": "John",
          "last_name": "Doe",
          "surname": null,
          "employee_email": "john.doe@example.com",
          "job_title": "Software Engineer",
          "reporting_manager": "Jane Smith",
          "doj": "2023-01-15T00:00:00"
      },
      {
          "emp_id": "002",
          "first_name": "Jane",
          "last_name": "Smith",
          "surname": null,
          "employee_email": "jane.smith@example.com",
          "job_title": "Project Manager",
          "reporting_manager": "Alex Johnson",
          "doj": "2022-09-20T00:00:00"
      },
      {
          "emp_id": "003",
          "first_name": "Michael",
          "last_name": "Brown",
          "surname": null,
          "employee_email": "michael.brown@example.com",
          "job_title": "Data Analyst",
          "reporting_manager": "Jane Smith",
          "doj": "2023-03-10T00:00:00"
      },
      {
          "emp_id": "004",
          "first_name": "Emily",
          "last_name": "Johnson",
          "surname": null,
          "employee_email": "emily.johnson@example.com",
          "job_title": "HR Specialist",
          "reporting_manager": "Alex Johnson",
          "doj": "2022-12-05T00:00:00"
      },
      {
          "emp_id": "005",
          "first_name": "William",
          "last_name": "Anderson",
          "surname": null,
          "employee_email": "william.anderson@example.com",
          "job_title": "Software Engineer",
          "reporting_manager": "Jane Smith",
          "doj": "2023-02-28T00:00:00"
      },
      {
          "emp_id": "006",
          "first_name": "Sarah",
          "last_name": "Martinez",
          "surname": null,
          "employee_email": "sarah.martinez@example.com",
          "job_title": "UI/UX Designer",
          "reporting_manager": "Alex Johnson",
          "doj": "2023-04-18T00:00:00"
      },
      {
          "emp_id": "007",
          "first_name": "David",
          "last_name": "Wilson",
          "surname": null,
          "employee_email": "david.wilson@example.com",
          "job_title": "System Analyst",
          "reporting_manager": "Jane Smith",
          "doj": "2022-11-10T00:00:00"
      },
      {
          "emp_id": "008",
          "first_name": "Jessica",
          "last_name": "Taylor",
          "surname": null,
          "employee_email": "jessica.taylor@example.com",
          "job_title": "Marketing Manager",
          "reporting_manager": "Alex Johnson",
          "doj": "2023-05-05T00:00:00"
      },
      {
          "emp_id": "009",
          "first_name": "Christopher",
          "last_name": "Garcia",
          "surname": null,
          "employee_email": "christopher.garcia@example.com",
          "job_title": "Business Analyst",
          "reporting_manager": "Jane Smith",
          "doj": "2023-03-25T00:00:00"
      },
      {
          "emp_id": "010",
          "first_name": "Amanda",
          "last_name": "Rodriguez",
          "surname": null,
          "employee_email": "amanda.rodriguez@example.com",
          "job_title": "Financial Analyst",
          "reporting_manager": "Alex Johnson",
          "doj": "2022-10-30T00:00:00"
      },
  ]
}

    // Extracting data and updating state variables
    setLoggedUserData(userData.loggedUserData);
    setAllEmployees(userData.allEmployees);
  }, []);


  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        email: values.email,
        password: values.password,
      });
      const userData = response.data;
  
      if (userData.loggedUserData.role_id === 1) {
        setLoggedUserData(userData.loggedUserData);
        setAllEmployees(userData.allEmployees);
        navigate("/admin/user-profile");
      } else if (userData.loggedUserData.role_id > 1) {
        setLoggedUserData(userData.loggedUserData);
        setAllEmployees(userData.allEmployees);
        navigate("/admin/dashboard");
      } else {
        setError("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError("Invalid email or password. Please try again.");
    }
  };
  
  

  return (
    <Col lg="6" md="7">
      <Card className="bg-secondary shadow border-4">
        <CardBody className="px-lg-8">
          <div className="d-flex justify-content-center mb-3">
            <img
              src={img1}
              alt="web synergies logo"
              className="img-fluid"
              style={{ width: "175px", height: "auto" }}
            />
          </div>
          <br />
          <Form role="form" onSubmit={handleSubmit}>
            <FormGroup className="mb-3">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-email-83" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Enter your email"
                  type="email"
                  autoComplete="new-email"
                  value={values.email}
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-lock-circle-open" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Enter your password"
                  type="password"
                  autoComplete="new-password"
                  value={values.password}
                  onChange={(e) =>
                    setValues({ ...values, password: e.target.value })
                  }
                />
              </InputGroup>
            </FormGroup>

            {error && <p className="text-danger">{error}</p>}

            <div className="text-center">
              <Button className="my-4" color="primary" type="submit">
                Login
              </Button>
            </div>
          </Form>
          <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <small>Forgot password?</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <small>Create new account</small>
              </a>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Login;
