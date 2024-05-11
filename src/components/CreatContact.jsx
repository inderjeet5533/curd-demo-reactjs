import { useState } from "react";

function CreatContact() {
  const [resStatus, setResStatus] = useState(null);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPinCode] = useState("");

  function SaveCustomer() {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/saveinfo");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 201) {
          console.log(xhr.responseText);
          setResStatus(true);
        } else {
          console.error("Failed to post data");
        }
      }
    };

    xhr.send(
      JSON.stringify({
        firstName: firstname,
        lastName: lastname,
        email: email,
        contact: contact,
        address: {
          addressLine1: addressLine1,
          addressLine2: addressLine2,
          city: city,
          state: state,
          country: country,
          pinCode: pincode,
        },
      })
    );
  }

  return (
    <div className="form-container ">
      <h2>Personal Detail</h2>
      <label>First Name:</label>
      <input
        type="text"
        name="firstname"
        onChange={(e) => setFirstname(e.target.value)}
        required
      />
      <label>Last Name:</label>
      <input
        type="text"
        name="lastname"
        onChange={(e) => setLastname(e.target.value)}
        required
      />
      <label>Email:</label>
      <input
        type="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label>Contact:</label>
      <input
        type="text"
        name="contact"
        onChange={(e) => setContact(e.target.value)}
        required
      />
      <label>Address line 1:</label>
      <input
        type="text"
        name="addressLine2"
        onChange={(e) => setAddressLine1(e.target.value)}
        required
      />
      <label>Address line 2:</label>
      <input
        type="text"
        name="addressLine1"
        onChange={(e) => setAddressLine2(e.target.value)}
      />
      <label>City:</label>
      <input
        type="text"
        name="city"
        onChange={(e) => setCity(e.target.value)}
        required
      />
      <label>State:</label>
      <input
        type="text"
        name="state"
        onChange={(e) => setState(e.target.value)}
        required
      />
      <label>Country:</label>
      <input
        type="text"
        name="country"
        onChange={(e) => setCountry(e.target.value)}
        required
      />
      <label>PinCode:</label>
      <input
        type="text"
        name="pinCode"
        onChange={(e) => setPinCode(e.target.value)}
        required
      />
      <button
        className="btn btn-success ml-40-pr"
        onClick={(e) => SaveCustomer()}
      >
        Save
      </button>
      {resStatus ? (
        <div className="alert alert-success mt-10-px">
          <strong>Success!</strong> Record Successfully Created
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default CreatContact;
