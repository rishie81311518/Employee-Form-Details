import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import UserHeader from "components/Headers/UserHeader.js";
import * as React from "react";
import { useEffect, useState } from "react";
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

  const getFormData = () => {
    const formData = localStorage.getItem("formData");
    return formData ? JSON.parse(formData) : null;
  };

  const formData = getFormData();

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
  const [failureModalOpen, setFailureModalOpen] = useState(false);

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
      newExperienceErrors[index] = " ";
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

  // const [selectedTechnologies, setSelectedTechnologies] = useState(
  //   Array.from({ length: skills.length }, () => null)
  // );

  const generateSelectedTechnologiesFromFormData = (formData) => {
    return Array.from({ length: skills.length }, (_, index) =>
      formData ? formData.selectedTechnologies[index] : null
    );
  };

  const generatedSelectedTechnologies =
    generateSelectedTechnologiesFromFormData(formData);
  const [selectedTechnologies, setSelectedTechnologies] = useState(
    generatedSelectedTechnologies
  );

  const generateSelectedExpertisesFromFormData = (formData) => {
    return Array.from({ length: skills.length }, (_, index) =>
      formData ? formData.selectedExpertises[index] : null
    );
  };

  const generatedSelectedExpertises =
    generateSelectedExpertisesFromFormData(formData);
  const [selectedExpertises, setSelectedExpertises] = useState(
    generatedSelectedExpertises
  );

  const [technologyErrors, setTechnologyErrors] = useState(
    Array.from({ length: skills.length }, () => "")
  );

  const generateSelectedExperiencesFromFormData = (formData) => {
    return Array.from({ length: skills.length }, (_, index) =>
      formData ? formData.selectedExperiences[index] : null
    );
  };

  const generatedSelectedExperiences =
    generateSelectedExperiencesFromFormData(formData);
  const [selectedExperiences, setSelectedExperiences] = useState(
    generatedSelectedExperiences
  );

  const [experienceErrors, setExperienceErrors] = useState(
    Array.from({ length: skills.length }, () => "")
  );

  const [expertiseErrors, setExpertiseErrors] = useState(
    Array.from({ length: skills.length }, () => "")
  );
  const [formSubmitted, setFormSubmitted] = useState(false);

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
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const setFormData = (formData) => {
    if (formData) {
      setPastExperience(formData.pastExperience || "");
      setExperience(formData.experience || "");
      setClientName(formData.clientName || "");
      setManagerName(formData.managerName || "");
      setAboutMe(formData.about_me || "");
      setPostalCode(formData.postalCode || "");
      setCountry(formData.country || "");
      setCity(formData.city || "");
      setAddress(formData.address || "");
      setLastName(formData.lastname || "");
      setPersonalMail(formData.personalmail || "");
      setDoj(formData.doj || "");
      setDob(formData.dob || "");
      setEmail(formData.email || "");
      setEmployeeId(formData.employeeId || "");
      setReportTo(formData.reportTo || "");
      setPhoneNumber(formData.phoneNumber || "");
      setGender(formData.gender || "");
      setFirstName(formData.firstName || "");
      setSelectedTechnologies(
        generateSelectedTechnologiesFromFormData(formData)
      );
      setSelectedExperiences(generateSelectedExperiencesFromFormData(formData));
      setSelectedExpertises(generateSelectedExpertisesFromFormData(formData));
    }
  };

  const getStoredFormData = () => {
    const storedFormData = localStorage.getItem("formData");
    return storedFormData ? JSON.parse(storedFormData) : null;
  };

  const storedFormData = getStoredFormData();

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

  useEffect(() => {
    // Retrieve the stored email from localStorage
    const storedEmail = localStorage.getItem("currentLoginUserEmail");
    console.log(storedEmail);
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

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

  const handleSkillChange = (index, field, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index][field] = value;
    setSkills(updatedSkills);
  };

  const handleAddSkill = () => {
    setSkills([...skills, { technology: "", experience: "", expertise: "" }]);
  };
  const [holdValue, setHoldValue] = useState(1);
  useEffect(() => {
    // console.log(skills.length);
    setHoldValue(skills.length + 1);
    console.log(holdValue);
    console.log(skills.length);
  }, [skills]);

  const handleRemoveSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
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

  // const saveFormData = (formData) => {
  //   localStorage.setItem('formData', JSON.stringify(formData));
  // };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const isFirstLogin = !localStorage.getItem("isLoggedIn");
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

    const isAllRowsValid = skills.every(
      (skill) => skill.technology && skill.experience && skill.expertise
    );

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
      isLanguagesKnownValid: isLanguagesKnownValid,
      isClientValid: isClientValid,
      isManagerValid: isManagerValid,
      isDobValid: isDobValid,
      isAllRowsValid: isAllRowsValid,
      isAboutMeValid: isAboutMeValid,
      isPostalCodeValid: isPostalCodeValid,
      isPastValid: isPastValid,
      isCountryValid: isCountryValid,
      isPersonalMailValid: isPersonalMailValid,
      isCityValid: isCityValid,
      isExperienceValid: isExperienceValid,
      isAddressValid: isAddressValid,
      isLastNameValid: isLastNameValid,
      isEmployeeValid: isEmployeeValid,
      isDojValid: isDojValid,
      isEmailValid: isEmailValid,
      isReportToValid: isReportToValid,
      isPhoneNumberValid: isPhoneNumberValid,
      isGenderValid: isGenderValid,
      isFirstNameValid: isFirstNameValid,
    };

    console.log(obj);
    // If all fields are valid, proceed with submission
    if (
      isDobValid &&
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
      isDojValid &&
      isEmailValid &&
      isReportToValid &&
      isPhoneNumberValid &&
      isGenderValid &&
      isFirstNameValid &&
      (isClientValid || isManagerValid)
    ) {
      const formDataToStore = { ...formData };
      // Store the formData for first login for employee
      if (isFirstLogin && formData && formData.role === "employee") {
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("formData", JSON.stringify(formDataToStore));
      }
      setFormData(formData);
      setFormSubmitted(true);
      console.log("Form submitted successfully!");
      toggleSuccessModal();
      // Perform form submission logic
    } else {
      setFailureModalOpen(true);
    }
  };

  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
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
                          <div
                            style={{ display: "flex", alignItems: "baseline" }}
                          >
                            {formSubmitted ? (
                              <span
                                style={{
                                  verticalAlign: "baseline",
                                  color: "#8898aa",
                                  marginLeft: "5px",
                                }}
                              >
                                {firstName}
                              </span>
                            ) : (
                              <Input
                                type="text"
                                // className="form-control-alternative"
                                id="input-first-name"
                                placeholder="Enter your first name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                              />
                            )}
                          </div>
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
                          <div
                            style={{ display: "flex", alignItems: "baseline" }}
                          >
                            {formSubmitted ? (
                              <span
                                style={{
                                  verticalAlign: "baseline",
                                  color: "#8898aa",
                                  marginLeft: "5px",
                                }}
                              >
                                {lastname}
                              </span>
                            ) : (
                              <Input
                                // className="form-control-alternative"
                                defaultValue="Jesse"
                                id="input-last-name"
                                placeholder="Last name"
                                type="text"
                                value={lastname}
                                onChange={(e) => setLastName(e.target.value)}
                              />
                            )}
                          </div>
                          {lastNameError && (
                            <span className="text-danger">{lastNameError}</span>
                          )}
                        </FormGroup>
                      </Col>

                      <Col lg="6">
                        <FormGroup>
                          <Label for="input-gender">Gender</Label>
                          <div
                            style={{ display: "flex", alignItems: "baseline" }}
                          >
                            {formSubmitted ? (
                              <span
                                style={{
                                  color: "#8898aa",
                                  verticalAlign: "baseline",
                                  marginLeft: "5px",
                                }}
                              >
                                {gender}
                              </span>
                            ) : (
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
                            )}
                          </div>
                          {genderError && (
                            <span className="text-danger">{genderError}</span>
                          )}
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <Label for="input-dob">Date of Birth</Label>
                          <div
                            style={{ display: "flex", alignItems: "baseline" }}
                          >
                            {formSubmitted ? (
                              <span
                                style={{
                                  color: "#8898aa",
                                  verticalAlign: "baseline",
                                  marginLeft: "5px",
                                }}
                              >
                                {dob}
                              </span>
                            ) : (
                              <Input
                                type="date"
                                name="dob"
                                id="input-dob"
                                placeholder="Enter your date of birth"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                              />
                            )}
                          </div>
                          {dobError && (
                            <span className="text-danger">{dobError}</span>
                          )}
                        </FormGroup>
                      </Col>

                      <Col lg="6">
                        <FormGroup>
                          <Label for="input-doj">Date of Joining</Label>
                          <div
                            style={{ display: "flex", alignItems: "baseline" }}
                          >
                            {formSubmitted ? (
                              <span
                                style={{
                                  color: "#8898aa",
                                  verticalAlign: "baseline",
                                  marginLeft: "5px",
                                }}
                              >
                                {doj}
                              </span>
                            ) : (
                              <Input
                                type="date"
                                name="doj"
                                id="input-doj"
                                placeholder="Enter your date of joining"
                                value={doj}
                                onChange={(e) => setDoj(e.target.value)}
                              />
                            )}
                          </div>
                          {dojError && (
                            <span className="text-danger">{dojError}</span>
                          )}
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <Label for="languages-known">Languages Known</Label>
                          <div>
                            {formSubmitted ? (
                              <span style={{ color: "#8898aa" }}>
                                {selectedOptions
                                  .map((option) => option.label)
                                  .join(", ")}
                              </span>
                            ) : (
                              <Select
                                id="languages-known"
                                options={myData}
                                value={selectedOptions}
                                onChange={handleChange}
                                isMulti
                              />
                            )}
                          </div>
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
                          <div
                            style={{ display: "flex", alignItems: "baseline" }}
                          >
                            {formSubmitted ? (
                              <span
                                style={{
                                  color: "#8898aa",
                                  verticalAlign: "baseline",
                                  marginLeft: "5px",
                                }}
                              >
                                {phoneNumber}
                              </span>
                            ) : (
                              <Input
                                type="tel"
                                name="phone_number"
                                id="input-phone-number"
                                placeholder="+91"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                              />
                            )}
                          </div>
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
                          <div
                            style={{ display: "flex", alignItems: "baseline" }}
                          >
                            {formSubmitted ? (
                              <span
                                style={{
                                  color: "#8898aa",
                                  verticalAlign: "baseline",
                                  marginLeft: "5px",
                                }}
                              >
                                {personalmail}
                              </span>
                            ) : (
                              <Input
                                // className="form-control-alternative"
                                id="input-email"
                                placeholder="rishie@example.com"
                                type="email"
                                value={personalmail}
                                onChange={(e) =>
                                  setPersonalMail(e.target.value)
                                }
                              />
                            )}
                          </div>
                          {personalMailError && (
                            <span className="text-danger">
                              {personalMailError}
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
                          <div
                            style={{ display: "flex", alignItems: "baseline" }}
                          >
                            {email != null ? (
                              <span
                                style={{
                                  color: "#8898aa",
                                  verticalAlign: "baseline",
                                  marginLeft: "5px",
                                }}
                              >
                                {email}
                              </span>
                            ) : (
                              <Input
                                id="input-email"
                                placeholder="jesse@example.com"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            )}
                          </div>
                          {emailError && (
                            <span className="text-danger">{emailError}</span>
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
                          <div
                            style={{ display: "flex", alignItems: "baseline" }}
                          >
                            {formSubmitted ? (
                              <span
                                style={{
                                  color: "#8898aa",
                                  verticalAlign: "baseline",
                                  marginLeft: "5px",
                                }}
                              >
                                {employeeId}
                              </span>
                            ) : (
                              <Input
                                id="input-employee-id"
                                placeholder="Employee ID"
                                type="text"
                                value={employeeId}
                                onChange={(e) => setEmployeeId(e.target.value)}
                              />
                            )}
                          </div>
                          {employeeError && (
                            <span className="text-danger">{employeeError}</span>
                          )}
                        </FormGroup>
                      </Col>

                      <Col lg="6">
                        <FormGroup>
                          <Label for="input-report-to">Report To</Label>
                          <div
                            style={{ display: "flex", alignItems: "baseline" }}
                          >
                            {formSubmitted ? (
                              <span
                                style={{
                                  verticalAlign: "baseline",
                                  marginLeft: "5px",
                                }}
                              >
                                {reportTo}
                              </span>
                            ) : (
                              <Input
                                type="select"
                                name="report_to"
                                id="input-report-to"
                                value={reportTo}
                                onChange={handleReportToChange}
                              >
                                <option value="" style={{ color: "#8898aa" }}>
                                  Select...
                                </option>
                                <option
                                  value="client"
                                  style={{ color: "#8898aa" }}
                                >
                                  Client
                                </option>
                                <option
                                  value="manager"
                                  style={{ color: "#8898aa" }}
                                >
                                  Manager
                                </option>
                              </Input>
                            )}
                          </div>
                          {reportToError && (
                            <span className="text-danger">{reportToError}</span>
                          )}
                        </FormGroup>
                        {reportTo === "client" && (
                          <FormGroup>
                            <Label for="input-client-name">Client Name</Label>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "baseline",
                              }}
                            >
                              {formSubmitted ? (
                                <span
                                  style={{
                                    color: "#8898aa",
                                    verticalAlign: "baseline",
                                    marginLeft: "5px",
                                  }}
                                >
                                  {clientName}
                                </span>
                              ) : (
                                <Input
                                  type="text"
                                  name="client_name"
                                  id="input-client-name"
                                  placeholder="Enter client name"
                                  value={clientName}
                                  onChange={(e) =>
                                    setClientName(e.target.value)
                                  }
                                />
                              )}
                            </div>
                            {clientError && (
                              <span className="text-danger">{clientError}</span>
                            )}
                          </FormGroup>
                        )}
                        {reportTo === "manager" && (
                          <FormGroup>
                            <Label for="input-manager-name">Manager Name</Label>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "baseline",
                              }}
                            >
                              {formSubmitted ? (
                                <span
                                  style={{
                                    color: "#8898aa",
                                    verticalAlign: "baseline",
                                    marginLeft: "5px",
                                  }}
                                >
                                  {managerName}
                                </span>
                              ) : (
                                <Input
                                  type="text"
                                  name="manager_name"
                                  id="input-manager-name"
                                  placeholder="Enter manager name"
                                  value={managerName}
                                  onChange={(e) =>
                                    setManagerName(e.target.value)
                                  }
                                />
                              )}
                            </div>
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
                            Current Experience
                          </Label>
                          <div
                            style={{ display: "flex", alignItems: "baseline" }}
                          >
                            {formSubmitted ? (
                              <span
                                style={{
                                  color: "#8898aa",
                                  verticalAlign: "baseline",
                                  marginLeft: "5px",
                                }}
                              >
                                {experience}
                              </span>
                            ) : (
                              <Input
                                type="text"
                                name="experience"
                                id="input-experience"
                                placeholder="Enter your experience"
                                value={experience}
                                onChange={(e) => setExperience(e.target.value)}
                              />
                            )}
                          </div>
                          {experienceError && (
                            <span className="text-danger">
                              {experienceError}
                            </span>
                          )}
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <Label for="input-past-experience">
                            Past Experience
                          </Label>
                          <div
                            style={{ display: "flex", alignItems: "baseline" }}
                          >
                            {formSubmitted ? (
                              <span
                                style={{
                                  color: "#8898aa",
                                  verticalAlign: "baseline",
                                  marginLeft: "5px",
                                }}
                              >
                                {pastExperience}
                              </span>
                            ) : (
                              <Input
                                type="text"
                                name="past-experience"
                                id="input-past-experience"
                                placeholder="Enter your past experience"
                                value={pastExperience}
                                onChange={(e) =>
                                  setPastExperience(e.target.value)
                                }
                              />
                            )}
                          </div>
                          {pastExperienceError && (
                            <span className="text-danger">
                              {pastExperienceError}
                            </span>
                          )}
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row></Row>
                  </div>
                  <hr className="my-4" />

                  <div className="pl-lg-4">
                    <Label>Skills</Label>
                    <Row
                      className="justify-content-md-between"
                      style={{ alignItems: "center" }}
                    >
                      {skills.map((skill, index, arr) => (
                        <>
                          <Col lg="4">
                            <FormGroup>
                              <Label for={`technology-autocomplete-${index}`}>
                                Technology Name
                              </Label>
                              <div style={{ marginRight: "50px" }}>
                                {formSubmitted ? (
                                  <span className="preview" style={{ color: "#8898aa"}}>
                                    {selectedTechnologies[index]
                                      ? selectedTechnologies[index].label
                                      : ""}
                                  </span>
                                ) : (
                                  <Autocomplete
                                    disablePortal
                                    id={`technology-autocomplete-${index}`}
                                    options={top100Films}
                                    value={selectedTechnologies[index]}
                                    sx={{ width: "200px", height: "50px" }}
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
                                )}
                              </div>
                            </FormGroup>
                          </Col>

                          <Col lg="4">
                            <FormGroup>
                              <div>
                                <Label for={`experience-autocomplete-${index}`}>
                                  Experience
                                </Label>
                                <div style={{ marginRight: "50px" }}>
                                  {formSubmitted ? (
                                    <span className="preview">
                                      {selectedExperiences[index]
                                        ? selectedExperiences[index].label
                                        : ""}
                                      <span
                                        style={{
                                          color: "#8898aa",
                                          verticalAlign: "baseline",
                                          marginLeft: "5px",
                                        }}
                                      >
                                        (Submitted)
                                      </span>
                                    </span>
                                  ) : (
                                    <Autocomplete
                                      disablePortal
                                      id={`experience-autocomplete-${index}`}
                                      options={experiences}
                                      value={selectedExperiences[index]}
                                      sx={{ width: "150px", height: "50px" }}
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
                                  )}
                                </div>
                              </div>
                            </FormGroup>
                          </Col>

                          <Col lg="4">
                            <FormGroup>
                              <div>
                                <Label for={`expertise-autocomplete-${index}`}>
                                  Expertise
                                </Label>
                                <div style={{ marginRight: "50px" }}>
                                  {formSubmitted ? (
                                    <span className="preview">
                                      {selectedExpertises[index]
                                        ? selectedExpertises[index].label
                                        : ""}
                                      <span
                                        style={{
                                          color: "#8898aa",
                                          verticalAlign: "baseline",
                                          marginLeft: "5px",
                                        }}
                                      >
                                        (Submitted)
                                      </span>
                                    </span>
                                  ) : (
                                    <Autocomplete
                                      disablePortal
                                      id={`expertise-autocomplete-${index}`}
                                      options={expertised}
                                      value={selectedExpertises[index]}
                                      sx={{ width: "150px", height: "50px" }}
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
                                  )}
                                </div>
                              </div>
                            </FormGroup>
                          </Col>
                          {/* "+" button */}

                          <br />
                          <br />

                          {/* "-" button */}
                          {!formSubmitted &&
                            skills.length > 1 &&
                            index !== arr.length - 1 && (
                              <Button
                                style={{
                                  height: "30px",
                                  width: "30px",
                                  position: "absolute",
                                  right: "60px",
                                  float: "right",
                                  alignItems: "center",
                                }}
                                size="sm"
                                color="danger"
                                onClick={() => handleRemoveSkill(index)}
                              >
                                -
                              </Button>
                            )}

                          <br />
                          <br />
                          <br />
                        </>
                      ))}
                      {!formSubmitted && (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            marginBottom: "25px",
                          }}
                        >
                          <Button
                            style={{
                              height: "30px",
                              width: "30px",
                              float: "right",
                              position: "absolute",
                              alignItems: "center",
                              right: "69px",
                            }}
                            size="sm"
                            color="success"
                            onClick={handleAddSkill}
                          >
                            +
                          </Button>
                        </div>
                      )}
                    </Row>
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
                          <Label for="input-address">Address</Label>
                          <div
                            style={{ display: "flex", alignItems: "baseline" }}
                          >
                            {formSubmitted ? (
                              <span
                                style={{
                                  color: "#8898aa",
                                  verticalAlign: "baseline",
                                  marginLeft: "5px",
                                }}
                              >
                                {address}
                              </span>
                            ) : (
                              <Input
                                // className="form-control-alternative"
                                defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                                id="input-address"
                                placeholder="Enter your current address"
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                              />
                            )}
                          </div>
                          {addressError && (
                            <span className="text-danger">{addressError}</span>
                          )}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <Label for="input-city">City</Label>
                          <div
                            style={{ display: "flex", alignItems: "baseline" }}
                          >
                            {formSubmitted ? (
                              <span
                                style={{
                                  color: "#8898aa",
                                  verticalAlign: "baseline",
                                  marginLeft: "5px",
                                }}
                              >
                                {city}
                              </span>
                            ) : (
                              <Input
                                // className="form-control-alternative"
                                id="input-city"
                                placeholder="Enter your city"
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                              />
                            )}
                          </div>
                          {cityError && (
                            <span className="text-danger">{cityError}</span>
                          )}
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <Label for="input-country">Country</Label>
                          <div
                            style={{ display: "flex", alignItems: "baseline" }}
                          >
                            {formSubmitted ? (
                              <span
                                style={{
                                  color: "#8898aa",
                                  verticalAlign: "baseline",
                                  marginLeft: "5px",
                                }}
                              >
                                {country}
                              </span>
                            ) : (
                              <Input
                                // className="form-control-alternative"
                                defaultValue="United States"
                                id="input-country"
                                placeholder="Country"
                                type="text"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                              />
                            )}
                          </div>
                          {countryError && (
                            <span className="text-danger">{countryError}</span>
                          )}
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <Label for="input-postal-code">Postal code</Label>
                          <div
                            style={{ display: "flex", alignItems: "baseline" }}
                          >
                            {formSubmitted ? (
                              <span
                                style={{
                                  color: "#8898aa",
                                  verticalAlign: "baseline",
                                  marginLeft: "5px",
                                }}
                              >
                                {postalCode}
                              </span>
                            ) : (
                              <Input
                                // className="form-control-alternative"
                                id="input-postal-code"
                                placeholder="Postal code"
                                type="number"
                                value={postalCode}
                                onChange={handlePostalCodeChange}
                              />
                            )}
                          </div>

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
                      {formSubmitted ? (
                        <span>{about_me}</span>
                      ) : (
                        <Input
                          // className="form-control-alternative"
                          placeholder="A few words about you ..."
                          rows="4"
                          defaultValue="A beautiful Dashboard for Bootstrap 4. It is Free and Open Source."
                          type="textarea"
                          value={about_me}
                          onChange={(e) => setAboutMe(e.target.value)}
                        />
                      )}
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
                  <Modal
                    isOpen={failureModalOpen}
                    toggle={() => setFailureModalOpen(false)}
                  >
                    <ModalHeader toggle={() => setFailureModalOpen(false)}>
                      Form Submission Failed
                    </ModalHeader>
                    <ModalBody>
                      <p>
                        Please check the fields and correct any validation
                        errors before submitting again.
                      </p>
                    </ModalBody>
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
