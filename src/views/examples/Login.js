import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = values;
    console.log(values,email,password);
    //const storedEmail = localStorage.getItem("adminEmail");
    // Check if the email and password match the hardcoded values
    if (email === "admin@gmail.com" && password === "password") {
     
      localStorage.clear();
      // Navigate to the admin dashboard if the login is successful
      localStorage.setItem("currentLoginUserEmail", values.email);
      navigate("/admin/dashboard");
    } else if (email === "employee@gmail.com" && password === "123456") {
      localStorage.clear();
      // Navigate to the admin dashboard if the login is successful
      localStorage.setItem("currentLoginUserEmail", values.email);
      // Navigate to the employee profile if the login is successful
      navigate("/admin/user-profile");
    } else {
      // Set an error message if the login fails
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
