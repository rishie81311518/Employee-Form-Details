import { useState } from "react";
import axios from "axios";
import useUser from "./UserProvider.js";
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
  const [values, setValues] = useState({
    loginId: "",
    password: "",
  });

  //const { setUserData } = useUser();
  const { setLoggedUserData} = useUser();


  //const [loggedUserData, setLoggedUserData] = useState({});
  //const [allEmployees, setAllEmployees] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("https://localhost:7221/login", {
        loginId: values.loginId,
        password: values.password,
      });
      console.log(response);
      
      const userData = response.data;
      
      console.log("Response data:", userData);


      if (userData.status === 1) {
        debugger;
   console.log("setting loggged user data", userData.data);
        setLoggedUserData(userData.data); 
        console.log("user login sucessfuly");
       
        
        if ( userData.data && userData.data.role_id === 1) {
          console.log('valid user');
          navigate("/admin/user-profile");
        }
        else if (  userData.data &&  userData.data.role_id > 1) {
          navigate("/admin/dashboard");
        }
      }
      
      else {
        setError("Invalid email or password. please try again");
      }
    } catch (error) {
      console.error("Error fetching user");
      setError("Invalid email or password. please try again");
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
                  type="text"
                  //autoComplete="new-email"
                  value={values.loginId}
                  onChange={(e) =>
                    setValues({ ...values, loginId: e.target.value })
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