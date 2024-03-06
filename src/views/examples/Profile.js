import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import UserHeader from "components/Headers/UserHeader.js";
import * as React from "react";
import { useState } from "react";
import Select from "react-select";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";

const Profile = () => {
  const isOptionEqualToValue = (option, value) => option.label === value.label;

  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredOptions, setFilteredOptions] = React.useState([]);

  const [selectedOptions, setSelectedOptions] = useState([]);

  const myData = [
    { label: "Telugu", value: 1 },
    { label: "Hindi", value: 2 },
    { label: "English", value: 3 },
    { label: "French", value: 4 },
    { label: "Chinese", value: 5 },
  ];

  const handleChange = (selectedOption) => {
    setSelectedOptions(selectedOption);
  };

  const validateLanguagesKnown = () => {
    if (selectedOptions.length === 0) {
      setNationalityError("Please select at least one language");
      return false;
    } else {
      setNationalityError("");
      return true;
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setFilteredOptions(
      top100Films.filter((option) =>
        option.label.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };
  const [value, setValue] = useState("");

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSelectChange = (event) => {
    setValue(event.target.value);
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [dob, setDob] = useState("");

  const handleExperienceChange = (id, newValue) => {
    setSkills((prevSkills) =>
      prevSkills.map((prevSkill) =>
        prevSkill.id === id
          ? { ...prevSkill, experience: newValue ? newValue.label : "" }
          : prevSkill
      )
    );
  };

  const handleDobChange = (e) => {
    const inputDob = e.target.value;

    // Parse the input date string
    const parsedDate = new Date(inputDob);
    const year = parsedDate.getFullYear().toString();

    // Check if the year has more than 4 digits
    if (year.length > 4) {
      setDobError("Year cannot not have more than 4 digits");
    } else {
      setDobError("");
      setDob(inputDob);
    }
  };

  const handleDojChange = (e) => {
    const inputDoj = e.target.value;

    // Parse the input date string
    const parsedDate = new Date(inputDoj);
    const year = parsedDate.getFullYear().toString();

    // Check if the year has more than 4 digits
    if (year.length > 4) {
      setDojError("Year cannot not have more than 4 digits");
    } else {
      setDojError("");
      setDoj(inputDoj);
    }
  };

  const handleExperiencedChange = (index) => (event, value) => {
    const newSelectedExperiences = [...selectedExperiences];
    newSelectedExperiences[index] = value;
    setSelectedExperiences(newSelectedExperiences);
  };

  const validateExperience = (index) => {
    const experience = selectedExperiences[index];
    const newExperienceErrors = [...experienceErrors];
    if (!experience) {
      newExperienceErrors[index] = "Experience is required";
    } else {
      newExperienceErrors[index] = "";
    }
    setExperienceErrors(newExperienceErrors);
  };

  const handleTechnologyChange = (index) => (event, value) => {
    const newSelectedTechnologies = [...selectedTechnologies];
    newSelectedTechnologies[index] = value;
    setSelectedTechnologies(newSelectedTechnologies);
  };

  const validateTechnology = (index) => {
    const technology = selectedTechnologies[index];
    const newTechnologyErrors = [...technologyErrors];
    if (!technology) {
      newTechnologyErrors[index] = "Technology name is required";
    } else {
      newTechnologyErrors[index] = "";
    }
    setTechnologyErrors(newTechnologyErrors);
  };

  const handleExpertiseChange = (index) => (event, value) => {
    const newSelectedExpertises = [...selectedExpertises];
    newSelectedExpertises[index] = value;
    setSelectedExpertises(newSelectedExpertises);
  };

  const validateExpertise = (index) => {
    const expertise = selectedExpertises[index];
    const newExpertiseErrors = [...expertiseErrors];
    if (!expertise) {
      newExpertiseErrors[index] = "Expertise is required";
    } else {
      newExpertiseErrors[index] = "";
    }
    setExpertiseErrors(newExpertiseErrors);
  };
  const [skills, setSkills] = useState([
    { technology: "", experience: "", expertise: "" },
  ]);
  const experiences = [{ label: "1" }, { label: "2" }, { label: "3" }];

  const expertised = [
    { label: "Beginner" },
    { label: "Intermediate" },
    { label: "Expert" },
  ];

  const top100Films = [
    { label: "HTML" },
    { label: "CSS" },
    { label: "JAVASCRIPT" },
    { label: "JAVA" },
    { label: "JQUERY" },
    { label: "REACT JS" },
    // ... rest of the movies
  ];

  const [selectedTechnologies, setSelectedTechnologies] = useState(
    Array.from({ length: skills.length }, () => null)
  );
  const [technologyErrors, setTechnologyErrors] = useState(
    Array.from({ length: skills.length }, () => "")
  );

  const [selectedExperiences, setSelectedExperiences] = useState(
    Array.from({ length: skills.length }, () => null)
  );
  const [experienceErrors, setExperienceErrors] = useState(
    Array.from({ length: skills.length }, () => "")
  );

  const [selectedExpertises, setSelectedExpertises] = useState(
    Array.from({ length: skills.length }, () => null)
  );
  const [expertiseErrors, setExpertiseErrors] = useState(
    Array.from({ length: skills.length }, () => "")
  );

  const [pastExperience, setPastExperience] = useState("");
  const [experience, setExperience] = useState("");
  const [clientName, setClientName] = useState("");
  const [managerName, setManagerName] = useState("");
  const [about_me, setAboutMe] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [lastname, setLastName] = useState("");
  const [personalmail, setPersonalMail] = useState("");
  const [doj, setDoj] = useState("");
  const [email, setEmail] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [reportTo, setReportTo] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [firstName, setFirstName] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setNewConfirmPassword] = useState("");
  // const [nationality, setNationality] = useState("");
  const [passwordChangeSuccessModalOpen, setPasswordChangeSuccessModalOpen] =
    useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [passwordChangeFailureModalOpen, setPasswordChangeFailureModalOpen] =
    useState(false);

  const [firstNameError, setFirstNameError] = useState("");
  const [pastExperienceError, setPastExperienceError] = useState("");
  const [dobError, setDobError] = useState("");
  const [personalMailError, setPersonalMailError] = useState("");
  const [experienceError, setExperienceError] = useState("");
  const [clientError, setClientError] = useState("");
  const [managerError, setManagerError] = useState("");
  const [employeeError, setEmployeeError] = useState("");
  const [aboutMeError, setAboutMeError] = useState("");
  const [postalCodeError, setPostalCodeError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [cityError, setCityError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [dojError, setDojError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [reportToError, setReportToError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [nationalityError, setNationalityError] = useState("");

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const toggleSuccessModal = () => {
    setSuccessModalOpen(!successModalOpen);
  };

  const validateField = (value, setError) => {
    console.log(value);
    if (value.trim() === "") {
      setError("This field is required");
      return false;
    }
    setError("");
    return true;
  };

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    const inputPhoneNumber = e.target.value;
    // Remove any non-numeric characters from the input
    const formattedPhoneNumber = inputPhoneNumber.replace(/\D/g, "");

    // Check if the formatted phone number is more than 10 digits
    if (formattedPhoneNumber.length > 10) {
      setPhoneNumberError("Phone number should be up to 10 digits only");
    } else {
      setPhoneNumberError("");
      setPhoneNumber(formattedPhoneNumber);
    }
  };

  const handlePostalCodeChange = (e) => {
    const inputPostalCode = e.target.value;
    // Remove any non-numeric characters from the input
    const formattedPostalCode = inputPostalCode.replace(/\D/g, "");

    // Check if the formatted postal code is more than 6 digits
    if (formattedPostalCode.length > 6) {
      setPostalCodeError("Postal code should be up to 6 digits only");
    } else {
      setPostalCodeError("");
      setPostalCode(formattedPostalCode);
    }
  };

  const handleNewConfirmPasswordChange = (e) => {
    setNewConfirmPassword(e.target.value);
  };

  const handleSkillChange = (index, field, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index][field] = value;
    setSkills(updatedSkills);
  };

  const handleAddSkill = () => {
    setSkills([...skills, { technology: "", experience: "", expertise: "" }]);
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
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

  const handleReportToChange = (e) => {
    const value = e.target.value;
    setReportTo(value);
    // Reset errors when selection changes
    setReportToError("");
    // Reset client and manager names
    setClientName("");
    setManagerName("");
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const isDobValid = validateField(dob, setDobError);
    const isPersonalMailValid = validateField(
      personalmail,
      setPersonalMailError
    );


    const isTechnologyValid = selectedTechnologies.map((technology, index) => {
      validateTechnology(index);
      return !technologyErrors[index];
    });

    const isExperiencedValid = selectedExperiences.map((experience, index) => {
      validateExperience(index);
      return !experienceErrors[index];
    });

    const isExpertiseValid = selectedExpertises.map((expertise, index) => {
      validateExpertise(index);
      return !expertiseErrors[index];
    });

    const isAllRowsValid = skills.every(skill => skill.technology && skill.experience && skill.expertise);

    const isClientValid = validateField(clientName, setClientError);
    const isPastValid = validateField(pastExperience, setPastExperienceError);
    const isExperienceValid = validateField(experience, setExperienceError);
    const isManagerValid = validateField(managerName, setManagerError);
    const isEmployeeValid = validateField(employeeId, setEmployeeError);
    const isAboutMeValid = validateField(about_me, setAboutMeError);
    const isPostalCodeValid = validateField(postalCode, setPostalCodeError);
    const isCountryValid = validateField(country, setCountryError);
    const isCityValid = validateField(city, setCityError);
    const isAddressValid = validateField(address, setAddressError);
    const isLastNameValid = validateField(lastname, setLastNameError);
    const isDojValid = validateField(doj, setDojError);
    const isEmailValid = validateField(email, setEmailError);
    const isReportToValid = validateField(reportTo, setReportToError);
    const isPhoneNumberValid = validateField(phoneNumber, setPhoneNumberError);
    const isGenderValid = validateField(gender, setGenderError);
    const isFirstNameValid = validateField(firstName, setFirstNameError);
    // const isNationalityValid = validateField(nationality, setNationalityError);
    const isLanguagesKnownValid = validateLanguagesKnown();

    var obj = {
      isTechnologyValid: isTechnologyValid,
      isExperiencedValid: isExperiencedValid,
      isExpertiseValid: isExpertiseValid,
    };

    console.log(obj);
    // If all fields are valid, proceed with submission
    if (
      (isDobValid &&
        isAllRowsValid &&
        isLanguagesKnownValid &&
        isExpertiseValid &&
        isExperiencedValid &&
        isTechnologyValid &&
        isAboutMeValid &&
        isPostalCodeValid &&
        isPastValid &&
        isCountryValid &&
        isPersonalMailValid &&
        isCityValid &&
        isExperienceValid &&
        isAddressValid &&
        isLastNameValid &&
        isEmployeeValid &&
        isClientValid) ||
      (isManagerValid &&
        isDojValid &&
        isEmailValid &&
        isReportToValid &&
        isPhoneNumberValid &&
        isGenderValid &&
        isFirstNameValid)
    ) {
      // Perform form submission logic here
      console.log("Form submitted successfully!");
      toggleSuccessModal();
    } else {
      // Some fields are invalid, handle the error or display error messages
      console.log("Form submission failed. Please check the fields.");
    }
  };

  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("../../assets/img/theme/team-4-800x800.jpg")}
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                
              </CardHeader>
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
                  <div>
                    <i className="ni education_hat mr-2" />
                    University of Computer Science
                  </div>
                  <hr className="my-4" />

                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Show more
                  </a>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">My account</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <h6 className="heading-small text-muted mb-4">
                    Personal information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <Label for="input-first-name">First Name</Label>
                          <Input
                            type="text"
                            // className="form-control-alternative"
                            id="input-first-name"
                            placeholder="Enter your first name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                          {firstNameError && (
                            <span className="text-danger">
                              {firstNameError}
                            </span>
                          )}
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Last Name
                          </label>
                          <Input
                            // className="form-control-alternative"
                            defaultValue="Jesse"
                            id="input-last-name"
                            placeholder="Last name"
                            type="text"
                            value={lastname}
                            onChange={(e) => setLastName(e.target.value)}
                          />
                          {lastNameError && (
                            <span className="text-danger">{lastNameError}</span>
                          )}
                        </FormGroup>
                      </Col>

                      <Col lg="6">
                        <FormGroup>
                          <Label for="input-gender">Gender</Label>
                          <Input
                            type="select"
                            name="gender"
                            id="input-gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                          >
                            <option value="">Select your gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </Input>
                          {genderError && (
                            <span className="text-danger">{genderError}</span>
                          )}
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <Label for="input-dob">Date of Birth</Label>
                          <Input
                            type="date"
                            name="dob"
                            id="input-dob"
                            placeholder="Enter your date of birth"
                            value={dob}
                            onChange={handleDobChange}
                          />
                          {dobError && (
                            <span className="text-danger">{dobError}</span>
                          )}
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <Label for="input-dob">Date of Joining</Label>
                          <Input
                            type="date"
                            name="dob"
                            id="input-dob"
                            placeholder="Enter your date of birth"
                            value={doj}
                            onChange={handleDojChange}
                          />
                          {dojError && (
                            <span className="text-danger">{dojError}</span>
                          )}
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label htmlFor="languages-known">
                            Languages Known
                          </label>
                          <Select
                            id="languages-known"
                            options={myData}
                            value={selectedOptions}
                            onChange={handleChange}
                            isMulti
                          />

                          {nationalityError && (
                            <span className="text-danger">
                              {nationalityError}
                            </span>
                          )}
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <Label for="input-phone-number">Phone Number</Label>
                          <Input
                            type="tel"
                            name="phone_number"
                            id="input-phone-number"
                            placeholder="+91"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                          />
                          {phoneNumberError && (
                            <span className="text-danger">
                              {phoneNumberError}
                            </span>
                          )}
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Personal Mail
                          </label>
                          <Input
                            // className="form-control-alternative"
                            id="input-email"
                            placeholder="rishie@example.com"
                            type="email"
                            value={personalmail}
                            onChange={(e) => setPersonalMail(e.target.value)}
                          />
                          {personalMailError && (
                            <span className="text-danger">
                              {personalMailError}{" "}
                            </span>
                          )}
                        </FormGroup>
                      </Col>
                    </Row>
                    <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4 ">
                      Official information
                    </h6>

                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Company Mail
                          </label>
                          <Input
                            // className="form-control-alternative"
                            id="input-email"
                            placeholder="jesse@example.com"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          {emailError && (
                            <span className="text-danger">{emailError} </span>
                          )}
                        </FormGroup>
                      </Col>
                     
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-employee-id"
                          >
                            Employee ID
                          </label>
                          <Input
                            id="input-employee-id"
                            placeholder="Employee ID"
                            type="text"
                            value={employeeId}
                            onChange={(e) => setEmployeeId(e.target.value)}
                          />
                          {employeeError && (
                            <span className="text-danger">
                              {employeeError}{" "}
                            </span>
                          )}
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <Label for="input-report-to">Report To</Label>
                          <Input
                            type="select"
                            name="report_to"
                            id="input-report-to"
                            value={reportTo}
                            onChange={handleReportToChange}
                          >
                            <option value="">Select...</option>
                            <option value="client">Client</option>
                            <option value="manager">Manager</option>
                          </Input>
                          {reportToError && (
                            <span className="text-danger">{reportToError}</span>
                          )}
                        </FormGroup>
                        {reportTo === "client" && (
                          <FormGroup>
                            <Label for="input-client-name">Client Name</Label>
                            <Input
                              type="text"
                              name="client_name"
                              id="input-client-name"
                              placeholder="Enter client name"
                              value={clientName}
                              onChange={(e) => setClientName(e.target.value)}
                            />
                            {clientError && (
                              <span className="text-danger">{clientError}</span>
                            )}
                          </FormGroup>
                        )}
                        {reportTo === "manager" && (
                          <FormGroup>
                            <Label for="input-manager-name">Manager Name</Label>
                            <Input
                              type="text"
                              name="manager_name"
                              id="input-manager-name"
                              placeholder="Enter manager name"
                              value={managerName}
                              onChange={(e) => setManagerName(e.target.value)}
                            />
                            {managerError && (
                              <span className="text-danger">
                                {managerError}
                              </span>
                            )}
                          </FormGroup>
                        )}
                        
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <Label for="input-experience">
                            {" "}
                            Current Experience
                          </Label>
                          <Input
                            type="text"
                            name="experience"
                            id="input-experience"
                            placeholder="Enter your experience"
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                          />
                          {experienceError && (
                            <span className="text-danger">
                              {experienceError}{" "}
                            </span>
                          )}
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <Label for="input-past-experience">
                            {" "}
                            Past Experience
                          </Label>
                          <Input
                            type="text"
                            name="past-experience"
                            id="input-past-experience"
                            placeholder="Enter your past experience"
                            value={pastExperience}
                            onChange={(e) => setPastExperience(e.target.value)}
                          />
                          {pastExperienceError && (
                            <span className="text-danger">
                              {pastExperienceError}{" "}
                            </span>
                          )}
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      {/* <Col lg="8">
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
                              <Label for="input-new-password">
                                New Password
                              </Label>
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
                          <ModalHeader
                            toggle={togglePasswordChangeSuccessModal}
                          >
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
                          <ModalHeader
                            toggle={togglePasswordChangeFailureModal}
                          >
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
                      </Col> */}
                    </Row>
                  </div>
                  <hr className="my-4" />

                  <div className="pl-lg-4">
                    <Label>Skills</Label>
                    <Row
                      className="justify-content-md-between "
                      style={{ alignItems: "center" }}
                    >
                      {skills.map((skill, index) => (
                        <>
                          <Col lg="3">
                            <div>
                              <Autocomplete
                                disablePortal
                                id={`combo-box-demo-${index}`}
                                options={top100Films}
                                sx={{ width: "150px", height: "50px" }}
                                value={selectedTechnologies[index]}
                                onChange={handleTechnologyChange(index)}
                                onBlur={() => validateTechnology(index)}
                                getOptionLabel={(option) => option.label}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    label="Technology Name"
                                    error={!!technologyErrors[index]}
                                    helperText={technologyErrors[index]}
                                  />
                                )}
                              />
                            </div>
                          </Col>

                          <Col lg="3">
                            <Autocomplete
                              disablePortal
                              id={`experience-autocomplete-${index}`}
                              options={experiences}
                              sx={{ width: "150px", height: "50px" }}
                              value={selectedExperiences[index]}
                              onChange={handleExperiencedChange(index)}
                              onBlur={() => validateExperience(index)}
                              getOptionLabel={(option) => option.label}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  label="Experience"
                                  error={!!experienceErrors[index]}
                                  helperText={experienceErrors[index]}
                                />
                              )}
                            />
                          </Col>

                          <Col lg="3">
                            <Autocomplete
                              disablePortal
                              id={`expertise-autocomplete-${index}`}
                              options={expertised}
                              sx={{ width: "150px", height: "50px" }}
                              value={selectedExpertises[index]}
                              onChange={handleExpertiseChange(index)}
                              onBlur={() => validateExpertise(index)}
                              getOptionLabel={(option) => option.label}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  label="Expertise"
                                  error={!!expertiseErrors[index]}
                                  helperText={expertiseErrors[index]}
                                />
                              )}
                            />
                          </Col>
                          <Button
                            size="sm"
                            className="text-center"
                            style={{
                              height: "30px",
                              width: "30px",
                              alignItems: "center",
                              right: "-20px",
                            }}
                            id={index}
                            color="danger"
                            onClick={() => handleRemoveSkill(index)}
                          >
                            -
                          </Button>
                          {/* <Button
                            style={{
                              height: " 30px",
                              width: "30px",
                              float: "right",
                              right: "-15px",
                              alignItems: "center",
                            }}
                            size="sm"
                            color="success"
                            onClick={handleAddSkill}
                          >
                            +
                          </Button> */}
                          <br />
                          <br />
                          <br />
                        </>
                      ))}
                    </Row>
                    {skills.length == 0 ? (
                      <Button
                        style={{
                          height: " 30px",
                          width: "30px",
                          float: "left",
                          right: "0px",
                          alignItems: "center",
                        }}
                        size="sm"
                        color="success"
                        onClick={handleAddSkill}
                      >
                        +
                      </Button>
                    ) : (
                      <Button
                        style={{
                          height: " 30px",
                          width: "30px",
                          float: "right",
                          right: "2px",
                          alignItems: "center",
                        }}
                        size="sm"
                        color="success"
                        onClick={handleAddSkill}
                      >
                        +
                      </Button>
                    )}
                  </div>
                  <br />
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Contact information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Address
                          </label>
                          <Input
                            // className="form-control-alternative"
                            defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                            id="input-address"
                            placeholder="Enter your current address"
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                          />
                          {addressError && (
                            <span className="text-danger">{addressError}</span>
                          )}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            City
                          </label>
                          <Input
                            // className="form-control-alternative"

                            id="input-city"
                            placeholder="Enter your city"
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                          />
                          {cityError && (
                            <span className="text-danger">{cityError}</span>
                          )}
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Country
                          </label>
                          <Input
                            // className="form-control-alternative"
                            defaultValue="United States"
                            id="input-country"
                            placeholder="Country"
                            type="text"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                          />
                          {countryError && (
                            <span className="text-danger">{countryError}</span>
                          )}
                        </FormGroup>
                      </Col>

                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Postal code
                          </label>
                          <Input
                            // className="form-control-alternative"
                            id="input-postal-code"
                            placeholder="Postal code"
                            type="number"
                            value={postalCode}
                            onChange={handlePostalCodeChange}
                          />
                          {postalCodeError && (
                            <span className="text-danger">
                              {postalCodeError}
                            </span>
                          )}
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">About me</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label>About Me</label>
                      <Input
                        // className="form-control-alternative"
                        placeholder="A few words about you ..."
                        rows="4"
                        defaultValue="A beautiful Dashboard for Bootstrap 4. It is Free and
                        Open Source."
                        type="textarea"
                        value={about_me}
                        onChange={(e) => setAboutMe(e.target.value)}
                      />
                      {aboutMeError && (
                        <span className="text-danger">{aboutMeError}</span>
                      )}
                    </FormGroup>
                  </div>
                  <Modal isOpen={successModalOpen} toggle={toggleSuccessModal}>
                    <ModalHeader toggle={toggleSuccessModal}>
                      Success
                    </ModalHeader>
                    <ModalBody>
                      Your form has been submitted successfully!
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={toggleSuccessModal}>
                        Close
                      </Button>
                    </ModalFooter>
                  </Modal>
                  <div className="text-center">
                    <Button type="submit" color="primary">
                      Submit
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
