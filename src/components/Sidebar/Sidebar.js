import { useState } from "react";
import { Link, NavLink as NavLinkRRD } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Media,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  Row,
  UncontrolledDropdown,
} from "reactstrap";
import img1 from "../../assets/img/brand/Web-Synergies-Transparent-Logo-High-resolution-1.png";

const Sidebar = (props) => {
  const [collapseOpen, setCollapseOpen] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setNewConfirmPassword] = useState("");
  const [passwordChangeSuccessModalOpen, setPasswordChangeSuccessModalOpen] =
    useState(false);
  const [passwordChangeFailureModalOpen, setPasswordChangeFailureModalOpen] =
    useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleNewConfirmPasswordChange = (e) => {
    setNewConfirmPassword(e.target.value);
  };

  const handlePasswordChange = () => {
    // Check if current and new passwords match
    if (currentPassword !== newPassword || newPassword !== confirmPassword) {
      // Passwords match, show popup for successful password change
      togglePasswordChangeSuccessModal();
      // Clear the current and new passwords
      setCurrentPassword("");
      setNewPassword("");
      setNewConfirmPassword("");
    } else {
      // Passwords don't match, show popup for failure
      togglePasswordChangeFailureModal();
    }
    // Close the modal
    toggleModal();
  };

  const togglePasswordChangeSuccessModal = () => {
    setPasswordChangeSuccessModalOpen(!passwordChangeSuccessModalOpen);
  };

  const togglePasswordChangeFailureModal = () => {
    setPasswordChangeFailureModalOpen(!passwordChangeFailureModalOpen);
  };
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  // toggles collapse between opened and closed (true/false)
  const toggleCollapse = () => {
    setCollapseOpen((data) => !data);
  };
  // closes the collapse
  const closeCollapse = () => {
    setCollapseOpen(false);
  };
  // creates the links that appear in the left menu / Sidebar
  const createLinks = (routes) => {
    return routes.map((prop, key) => {
      return (
        <NavItem key={key}>
          <NavLink
            to={prop.layout + prop.path}
            tag={NavLinkRRD}
            onClick={closeCollapse}
          >
            <i className={prop.icon} />
            {prop.name}
          </NavLink>
        </NavItem>
      );
    });
  };

  const { bgColor, routes, logo } = props;
  let navbarBrandProps;
  if (logo && logo.innerLink) {
    navbarBrandProps = {
      to: logo.innerLink,
      tag: Link,
    };
  } else if (logo && logo.outterLink) {
    navbarBrandProps = {
      href: logo.outterLink,
      target: "_blank",
    };
  }

  return (
    <Navbar
      className="navbar-vertical fixed-left navbar-light bg-white"
      expand="md"
      id="sidenav-main"
    >
      <Container fluid>
        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleCollapse}
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Brand */}

        <div className="d-flex justify-content-center mb-3">
          <img
            src={img1}
            alt="web synergies logo"
            className="img-fluid"
            style={{ width: "120px", height: "auto" }}
          />
        </div>
        {logo ? (
          <NavbarBrand className="pt-0" {...navbarBrandProps}>
            <img
              alt={logo.imgAlt}
              className="navbar-brand-img"
              src={logo.imgSrc}
            />
          </NavbarBrand>
        ) : null}
        {/* User */}
        <Nav className="align-items-center d-md-none">
          <UncontrolledDropdown nav>
            <DropdownToggle nav className="nav-link-icon">
              <i className="ni ni-bell-55" />
            </DropdownToggle>
            <DropdownMenu
              aria-labelledby="navbar-default_dropdown_1"
              className="dropdown-menu-arrow"
              right
            >
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav>
            <DropdownToggle nav>
              <Media className="align-items-center">
                <span className="avatar avatar-sm rounded-circle">
                  <img
                    alt="..."
                    src={require("../../assets/img/theme/team-1-800x800.jpg")}
                    className="img-fluid rounded-circle" // Add this class for responsive and rounded image
                  />
                </span>
              </Media>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem className="noti-title" header tag="div">
                <h6 className="text-overflow m-0">Welcome!</h6>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-single-02" />
                <span>My profile</span>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-settings-gear-65" />
                <span>Settings</span>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-calendar-grid-58" />
                <span>Activity</span>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-support-16" />
                <span>Support</span>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                <i className="ni ni-user-run" />
                <span>Logout</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {/* Collapse */}
        <Collapse navbar isOpen={collapseOpen}>
          {/* Collapse header */}
          <div className="navbar-collapse-header d-md-none">
            <Row>
              {logo ? (
                <Col className="collapse-brand" xs="6">
                  {logo.innerLink ? (
                    <Link to={logo.innerLink}>
                      <img alt={logo.imgAlt} src={logo.imgSrc} />
                    </Link>
                  ) : (
                    <a href={logo.outterLink}>
                      <img alt={logo.imgAlt} src={logo.imgSrc} />
                    </a>
                  )}
                </Col>
              ) : null}
              <Col className="collapse-close" xs="6">
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={toggleCollapse}
                >
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>
          {/* Form */}
          <Form className="mt-4 mb-3 d-md-none">
            <InputGroup className="input-group-rounded input-group-merge">
              <Input
                aria-label="Search"
                className="form-control-rounded form-control-prepended"
                placeholder="Search"
                type="search"
              />
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <span className="fa fa-search" />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Form>
          {/* Navigation */}
          <Nav navbar>{createLinks(routes)}</Nav>
          {/* Divider */}

          {/* Heading */}

          {/* Navigation */}

          <Nav className="mb-md-3" navbar></Nav>
        </Collapse>
        <Row>
          <Col className="order-xl-2 mb-5">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <div className="card-profile-image">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("../../assets/img/theme/static-employee.jpeg")}
                      style={{ width: "90px", height: "85px" }}
                    />
                  </a>
                </div>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"></CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5"></div>
                  </div>
                </Row>
                <div className="text-center">
                  <h3>
                    Jessica Jones
                    <span className="font-weight-light">, 27</span>
                  </h3>
                  <Row className="justify-content-center">
                    <Col lg="8">
                      <Button color="primary" onClick={toggleModal}>
                        Change Password
                      </Button>
                      <Modal isOpen={modalOpen} toggle={toggleModal}>
                        <ModalHeader toggle={toggleModal}>
                          Change Password
                        </ModalHeader>
                        <ModalBody>
                          <FormGroup>
                            <Label for="input-current-password">
                              Current Password
                            </Label>
                            <Input
                              type="password"
                              name="current_password"
                              id="input-current-password"
                              placeholder="Enter your current password"
                              value={currentPassword}
                              onChange={handleCurrentPasswordChange}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="input-new-password">New Password</Label>
                            <Input
                              type="password"
                              name="new_password"
                              id="input-new-password"
                              placeholder="Enter your new password"
                              value={newPassword}
                              onChange={handleNewPasswordChange}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="input-confirm-password">
                              Confirm Password
                            </Label>
                            <Input
                              type="password"
                              name="confirm_password"
                              id="input-confirm-password"
                              placeholder="confirm your password"
                              value={confirmPassword}
                              onChange={handleNewConfirmPasswordChange}
                            />
                          </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            color="primary"
                            onClick={handlePasswordChange}
                          >
                            Submit Password
                          </Button>{" "}
                          <Button color="secondary" onClick={toggleModal}>
                            Cancel
                          </Button>
                        </ModalFooter>
                      </Modal>
                      <Modal
                        isOpen={passwordChangeSuccessModalOpen}
                        toggle={togglePasswordChangeSuccessModal}
                      >
                        <ModalHeader toggle={togglePasswordChangeSuccessModal}>
                          Password Changed Successfully
                        </ModalHeader>
                        <ModalBody>
                          Your password has been changed successfully.
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            color="primary"
                            onClick={togglePasswordChangeSuccessModal}
                          >
                            Close
                          </Button>
                        </ModalFooter>
                      </Modal>
                      <Modal
                        isOpen={passwordChangeFailureModalOpen}
                        toggle={togglePasswordChangeFailureModal}
                      >
                        <ModalHeader toggle={togglePasswordChangeFailureModal}>
                          Password Change Failed
                        </ModalHeader>
                        <ModalBody>
                          The current password and the new password do not
                          match. Please try again.
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            color="primary"
                            onClick={togglePasswordChangeFailureModal}
                          >
                            Close
                          </Button>
                        </ModalFooter>
                      </Modal>
                    </Col>
                  </Row>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    Solution Manager - Creative Tim Officer
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

Sidebar.defaultProps = {
  routes: [{}],
};

Sidebar.propTypes = {
  // links that will be displayed inside the component
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the image src of the logo
    imgSrc: PropTypes.string.isRequired,
    // the alt for the img
    imgAlt: PropTypes.string.isRequired,
  }),
};

export default Sidebar;
