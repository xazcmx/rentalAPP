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

    <Form.Group as={Col} className="pt-1" controlId="maidenName">
      <Form.Label>Please Include Maiden Name If Applicable</Form.Label>
      <Form.Control type="text" name="from_name_maiden" placeholder="Maiden Name" />
    </Form.Group>
  </Form.Row>

  <Form.Row>
    <Form.Group as={Col} className="pt-2" controlId="phoneNumber">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control type="text" placeholder="Phone Number" name="phone_number"/>
    </Form.Group>

    <Form.Group as={Col}className="pt-2" controlId="email">
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
      <Form.Group as={Col} className="pt-2" controlId="addressStreet">
        <Form.Label>Current Address</Form.Label>
        <Form.Control type="text" name="address_street" placeholder="Street Address" />
      </Form.Group>

      <Form.Group as={Col} xs={2} className="pt-2" controlId="addressCity">
      <Form.Label>City</Form.Label>
        <Form.Control type="text" name="address_city" placeholder="City" />
      </Form.Group>

      <Form.Group as={Col} xs={2} className="pt-2" controlId="addressState">
      <Form.Label>State</Form.Label>
        <Form.Control type="text" name="address_state" placeholder="State" />
      </Form.Group>

      <Form.Group as={Col} xs={2} className="pt-2" controlId="addressZip">
      <Form.Label>Zip</Form.Label>
        <Form.Control type="text" name="address_zip" placeholder="Zip" />
      </Form.Group>
    </Form.Row>

    <Form.Row>
      <Form.Group as={Col} className="pt-2" controlId="landlordName">
        <Form.Label>Current Landlord</Form.Label>
        <Form.Control type="text" name="curr_landlord_name" placeholder="Name" />
      </Form.Group>

      <Form.Group as={Col} className="pt-2" controlId="landlordPhone">
      <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" name="curr_landlord_phone" placeholder=" Phone Number" />
      </Form.Group>

      <Form.Group as={Col} className="pt-2" controlId="landlordEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" name="curr_landlord_email" placeholder="Email" />
      </Form.Group>
    </Form.Row>

    <Form.Row>
      <Form.Group as={Col} className="pt-2" controlId="lengthOfStay">
        <Form.Label>How Long At This Address</Form.Label>
        <Form.Control type="text" name="length_of_stay" placeholder="Length of Stay" />
      </Form.Group>

      <Form.Group as={Col} className="pt-2" controlId="reasonForLeaving">
      <Form.Label>Reason For Leaving</Form.Label>
        <Form.Control type="text" name="leaving_reason" placeholder="Reason For Leaving" />
      </Form.Group>
    </Form.Row>
    </div><br/>


    <div className="box p-2">
    <Form.Row>
      <Form.Group as={Col} className="pt-2" controlId="prevAddressStreet">
        <Form.Label>Previous Address</Form.Label>
        <Form.Control type="text" name="prev_address_street" placeholder="Street Address" />
      </Form.Group>

      <Form.Group as={Col} xs={2} className="pt-2" controlId="prevAddressCity">
      <Form.Label>City</Form.Label>
        <Form.Control type="text" name="prev_address_city" placeholder="City" />
      </Form.Group>

      <Form.Group as={Col} xs={2} className="pt-2" controlId="prevAddressState">
      <Form.Label>State</Form.Label>
        <Form.Control type="text" name="prev_address_state" placeholder="State" />
      </Form.Group>

      <Form.Group as={Col} xs={2} className="pt-2" controlId="prevAddressZip">
      <Form.Label>Zip</Form.Label>
        <Form.Control type="text" name="prev_address_zip" placeholder="Zip" />
      </Form.Group>
    </Form.Row>

    <Form.Row>
        <Form.Group as={Col} className="pt-2" controlId="prevLandlordName">
        <Form.Label>Previous Landlord</Form.Label>
        <Form.Control type="text" name="prev_landlord_name" placeholder="Name" />
        </Form.Group>

        <Form.Group as={Col} className="pt-2" controlId="prevLandlordPhone">
        <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" name="prev_landlord_phone" placeholder=" Phone Number" />
        </Form.Group>

        <Form.Group as={Col} className="pt-2" controlId="prevLandlordEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" name="prev_landlord_email" placeholder="Email" />
        </Form.Group>
      </Form.Row>

    <Form.Row>
      <Form.Group as={Col} className="pt-2" controlId="prevLengthOfStay">
        <Form.Label>How Long At This Address</Form.Label>
        <Form.Control type="text" name="prev_length_of_stay" placeholder="Length of Stay" />
      </Form.Group>

      <Form.Group as={Col} className="pt-2" controlId="prevReasonForLeaving">
      <Form.Label>Reason For Leaving</Form.Label>
        <Form.Control type="text" name="prev_leaving_reason" placeholder="Reason For Leaving" />
      </Form.Group>
    </Form.Row>
    </div><br/>


    <div className="box p-2">
    <Form.Row>
      <Form.Group as={Col} className="pt-2" controlId="carMake">
        <Form.Label>Car Make</Form.Label>
        <Form.Control type="text" name="car_make" placeholder="Make" />
      </Form.Group>
      <Form.Group as={Col} className="pt-2" controlId="carModel">
        <Form.Label>Car Model</Form.Label>
        <Form.Control type="text" name="car_model" placeholder="Model" />
      </Form.Group>
      <Form.Group as={Col} className="pt-2" controlId="carYear">
        <Form.Label>Car Year</Form.Label>
        <Form.Control type="text" name="car_year" placeholder="Year" />
      </Form.Group>
    </Form.Row>

    <Form.Row>
      <Form.Group as={Col} className="pt-2" controlId="liscensePlate">
          <Form.Label>License Plate Number</Form.Label>
          <Form.Control type="text" name="lic_plate" placeholder="License Plate Number" />
      </Form.Group>
      <Form.Group as={Col} xs={2} className="pt-2" controlId="liscenseState">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" name="lic_state" placeholder="State" />
      </Form.Group>
    </Form.Row>
    </div><br/>


    <div className="box p-2">
    <Form.Row>
        <Form.Group as={Col} className="pt-2" controlId="presEmployerName">
        <Form.Label>Present Employer</Form.Label>
        <Form.Control type="text" name="pres_employer_name" placeholder="Employer" />
        </Form.Group>

        <Form.Group as={Col} className="pt-2" controlId="presEmployerPosition">
        <Form.Label>Position</Form.Label>
          <Form.Control type="text" name="pres_employer_position" placeholder="Position" />
        </Form.Group>

        <Form.Group as={Col} className="pt-2" controlId="presEmployerIncome">
          <Form.Label>Monthly Income</Form.Label>
          <Form.Control type="text" name="pres_employer_income" placeholder="Income" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} className="pt-2" controlId="presEmployerPhone">
        <Form.Label>Work Phone</Form.Label>
        <Form.Control type="text" name="pres_employer_phone" placeholder="Phone" />
        </Form.Group>

        <Form.Group as={Col} className="pt-2" controlId="presEmployerLength">
        <Form.Label>Length of Employment</Form.Label>
          <Form.Control type="text" name="pres_employer_length" placeholder="Length" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} className="pt-2" controlId="presEmployerAddress">
          <Form.Label>Employer Address</Form.Label>
          <Form.Control type="text" name="pres_employer_address" placeholder="Address" />
        </Form.Group>

        <Form.Group as={Col} xs={2} className="pt-2" controlId="presEmployerCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" name="pres_employer_city" placeholder="City" />
       </Form.Group>

        <Form.Group as={Col} xs={2} className="pt-2" controlId="presEmployerState">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" name="pres_employer_state" placeholder="State" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} className="pt-2" controlId="otherIncomeAmount">
          <Form.Label>Other Income Amount</Form.Label>
          <Form.Control type="text" name="other_income_amount" placeholder="Total" />
        </Form.Group>

        <Form.Group as={Col} className="pt-2" controlId="otherIncomeSource">
          <Form.Label>Other Income Source</Form.Label>
          <Form.Control type="text" name="other_income_source" placeholder="Source" />
        </Form.Group>
      </Form.Row>
    </div><br/>


    <div className="box p-2">
    <Form.Row>
        <Form.Group as={Col} className="pt-2" controlId="petInfo">
          <Form.Label>Number and Type of Pets</Form.Label>
          <Form.Control as="textarea" name="pet_info" placeholder="Number and Type" />
        </Form.Group>
    </Form.Row>
    </div><br/>

    
    <div className="box p-2">
    <Form.Row>
        <Form.Group as={Col} className="pt-2" controlId="bankName">
          <Form.Label>Bank Name</Form.Label>
          <Form.Control type="text" name="bank_name" placeholder="Name" />
        </Form.Group>
    </Form.Row>
    </div><br/>


    <div className="box p-2">
      <h4>Personal Reference #1</h4>
    <Form.Row>
        <Form.Group as={Col} className="pt-2" controlId="reference1Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="reference_1_name" placeholder="Name" />
        </Form.Group>

        <Form.Group as={Col} className="pt-2" controlId="reference1Relationship">
          <Form.Label>Relationship</Form.Label>
          <Form.Control type="text" name="reference_1_relationship" placeholder="Relationship" />
        </Form.Group>
    </Form.Row>

    <Form.Row>
        <Form.Group as={Col} xs={4} className="pt-2" controlId="reference1YearsKnown">
          <Form.Label>Years Known</Form.Label>
          <Form.Control type="text" name="reference_1_years_known" placeholder="Years" />
        </Form.Group>
    </Form.Row>

    <Form.Row>
        <Form.Group as={Col} xs={5} className="pt-2" controlId="reference1Phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" name="reference_1_phone" placeholder="Phone" />
        </Form.Group>
    </Form.Row>
    </div><br/>


    <div className="box p-2">
      <h4>Personal Reference #2</h4>
    <Form.Row>
        <Form.Group as={Col} className="pt-2" controlId="reference2Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="reference_2_name" placeholder="Name" />
        </Form.Group>

        <Form.Group as={Col} className="pt-2" controlId="reference2Relationship">
          <Form.Label>Relationship</Form.Label>
          <Form.Control type="text" name="reference_2_relationship" placeholder="Relationship" />
        </Form.Group>
    </Form.Row>

    <Form.Row>
        <Form.Group as={Col} xs={4} className="pt-2" controlId="reference2YearsKnown">
          <Form.Label>Years Known</Form.Label>
          <Form.Control type="text" name="reference_2_years_known" placeholder="Years" />
        </Form.Group>
    </Form.Row>

    <Form.Row>
        <Form.Group as={Col} xs={5} className="pt-2" controlId="reference2Phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" name="reference_2_phone" placeholder="Phone" />
        </Form.Group>
    </Form.Row>
    </div><br/>


    <div className="box p-2">
      <h4>Personal Reference #3</h4>
    <Form.Row>
        <Form.Group as={Col} className="pt-2" controlId="reference3Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="reference_3_name" placeholder="Name" />
        </Form.Group>

        <Form.Group as={Col} className="pt-2" controlId="reference3Relationship">
          <Form.Label>Relationship</Form.Label>
          <Form.Control type="text" name="reference_3_relationship" placeholder="Relationship" />
        </Form.Group>
    </Form.Row>

    <Form.Row>
        <Form.Group as={Col} xs={4} className="pt-2" controlId="reference3YearsKnown">
          <Form.Label>Years Known</Form.Label>
          <Form.Control type="text" name="reference_3_years_known" placeholder="Years" />
        </Form.Group>
    </Form.Row>

    <Form.Row>
        <Form.Group as={Col} xs={5} className="pt-2" controlId="reference3Phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" name="reference_3_phone" placeholder="Phone" />
        </Form.Group>
    </Form.Row>
    </div><br/>


    <div className="box p-2">
    <Form.Row>
        <Form.Group as={Col} className="pt-2" controlId="numberOfAdults">
          <Form.Label>Number of Adults</Form.Label>
          <Form.Control type="text" name="number_of_adults" placeholder="Number of Adults" />
        </Form.Group>

        <Form.Group as={Col} className="pt-2" controlId="numberOfChildren">
          <Form.Label>Number of Children Under 18</Form.Label>
          <Form.Control type="text" name="number_of_children" placeholder="Number of Children" />
        </Form.Group>
    </Form.Row>
    </div><br/>

    <div className="box p-2">
    <Form.Row>
        <Form.Group as={Col} className="pt-2" controlId="otherApplicants">
          <Form.Label>Names and Relations of All Other Applicants</Form.Label>
          <Form.Control as="textarea" name="other_applicants" placeholder="Names and Relations" />
        </Form.Group>
    </Form.Row>
    </div><br/>

    <div className="box p-2">
      <h5>Have you ever been party to an eviction?</h5>
      <Form>
       {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            label="Yes"
            type={type}
            name="eviction_yes"
            id={`default-${type}`}
            
          />
          <Form.Check 
            label="No"
            type={type}
            name="eviction_no"
            id={`default-${type}`}
           
          />
        </div>
         ))}
      </Form> 
    </div><br/>

        {/* not sure if above will work with the email template */}





  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Container>
      );

};


export default RentalAppForm;

