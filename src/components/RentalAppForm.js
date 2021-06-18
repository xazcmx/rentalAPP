import React from "react"
import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import FormCheck from 'react-bootstrap/FormCheck';
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"
import { Container } from "react-bootstrap";





const RentalAppForm = () => {

    
    function sendEmail(e) {
        e.preventDefault();
        console.log(e.target);
        console.log(e.target.value);
    
        emailjs.sendForm('service_ncztcs7', 'template_66xsqhp', e.target, 'user_3rz6pxK1B5e3JskujCrOE')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    
      return (
        <Container className="pt-4">
          <h1>PLEASE DO NOT USE AT THIS TIME</h1>
        <Form onSubmit={sendEmail}>
          <div className="box p-2">
  <Form.Row>
    <Form.Group as={Col} className="pt-4" controlId="applicantName">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" name="from_name" placeholder="Enter Full Name" />
    </Form.Group>

    <Form.Group as={Col} className="pt-4" controlId="maidenName">
      <Form.Label>Please Include Maiden Name If Applicable</Form.Label>
      <Form.Control type="text" name="from_name_maiden" placeholder="Maiden Name" />
    </Form.Group>
  </Form.Row>

  <Form.Row>
    <Form.Group as={Col} controlId="phoneNumber">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control type="text" placeholder="Phone Number" name="phone_number"/>
    </Form.Group>

    <Form.Group as={Col} controlId="email">
      <Form.Label>Email</Form.Label>
      <Form.Control type="text" placeholder="Email" name="email"/>
    </Form.Group>
  </Form.Row>
    
    <Form.Row>
  <Form.Group as={Col} controlId="SSN">
  <Form.Label>Social Security Number</Form.Label>
    <Form.Control type="text" name="social" placeholder="SSN" />
  </Form.Group>

  <Form.Group as={Col} controlId="dateOfBirth">
      <Form.Label>Date of Birth</Form.Label>
      <Form.Control type="date" name="date_of_birth" placeholder="Date of Birth" />
    </Form.Group>
  </Form.Row>

  <Form.Row>
    <Form.Group as={Col} controlId="driverLicense">
      <Form.Label>Driver's License #</Form.Label>
      <Form.Control type="text" name="dl_number" placeholder="License Number" />
    </Form.Group>

    <Form.Group as={Col} controlId="driverLicense.state">
      <Form.Label>State</Form.Label>
      <Form.Control type="text" name="dl_state" placeholder="State" />

    </Form.Group>

    <Form.Group as={Col} controlId="driverLicense.Exp">
      <Form.Label>Expiration</Form.Label>
      <Form.Control type="text" name="dl_exp" placeholder="Date" />
    </Form.Group>
  </Form.Row>
    </div><br/>

        <div className="box p-2 pt-1">
    <Form.Group as={Col} controlId="location.ControlSelect1">
      <Form.Label>Please Select a Location To Rent</Form.Label>
      <Form.Control as="select" name="location">
      <option>Morrilton</option>
      <option>Conway</option>
      <option>Damascus</option>
      <option>Bee Branch</option>
      <option>Heber Springs</option>
      </Form.Control>
    </Form.Group>
    </div><br/>

        <div className="box p-2">
    <Form.Row>
      <Form.Group as={Col} controlId="addressStreet">
        <Form.Label>Current Address</Form.Label>
        <Form.Control type="text" name="address_street" placeholder="Street Address" />
      </Form.Group>

      <Form.Group as={Col} xs={2} className="pt-2" controlId="addressCity">
      <Form.Label></Form.Label>
        <Form.Control type="text" name="address_city" placeholder="City" />
      </Form.Group>

      <Form.Group as={Col} xs={2} className="pt-2" controlId="addressState">
      <Form.Label />
        <Form.Control type="text" name="address_state" placeholder="State" />
      </Form.Group>

      <Form.Group as={Col} xs={2} className="pt-2" controlId="addressZip">
      <Form.Label />
        <Form.Control type="text" name="address_zip" placeholder="Zip" />
      </Form.Group>
    </Form.Row>

    <Form.Row>
      <Form.Group as={Col} controlId="landlordName">
        <Form.Label>Current Landlord</Form.Label>
        <Form.Control type="text" name="curr_landlord_name" placeholder="Name" />
      </Form.Group>

      <Form.Group as={Col} className="pt-2" controlId="landlordPhone">
        <Form.Label />
        <Form.Control type="text" name="curr_landlord_phone" placeholder=" Phone Number" />
      </Form.Group>

      <Form.Group as={Col} className="pt-2" controlId="landlordEmail">
        <Form.Label></Form.Label>
        <Form.Control type="text" name="curr_landlord_email" placeholder="Email" />
      </Form.Group>
    </Form.Row>

    <Form.Row>
      <Form.Group as={Col} controlId="lengthOfStay">
        <Form.Label>How Long At This Address</Form.Label>
        <Form.Control type="text" name="length_of_stay" placeholder="Length of Stay" />
      </Form.Group>

      <Form.Group as={Col} className="pt-2" controlId="reasonForLeaving">
        <Form.Label />
        <Form.Control type="text" name="leaving_reason" placeholder="Reason For Leaving" />
      </Form.Group>
    </Form.Row>
    </div>




  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Container>
      );

};


export default RentalAppForm;

