import { useState, useEffect } from "react";

function ShowContacts() {
  const [data, setData] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [key, setKey] = useState();
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

  useEffect(() => {
    getInfos();
  }, []);

  function getInfos() {
    console.log("Get Contacts");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8080/getinfo");
    xhr.onreadystatechange = function () {
      console.log(xhr.status);
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
        setData(JSON.parse(xhr.responseText));
      }
    };
    xhr.send();
  }

  function deleteContact(id) {
    console.log("Delete Contact");
    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", "http://localhost:8080/deleteinfo/" + id);
    xhr.onload = function () {
      console.log(xhr.status);
      if (xhr.status === 202) {
        console.log(xhr.responseText);
        alertMsg(xhr.responseText);
      }
    };
    xhr.send();
  }

  function updateContact(id) {
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", "http://localhost:8080/updateinfo/" + id);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          console.log(xhr.responseText);
          setIsEdit(false);
          alertMsg(xhr.responseText);
        } else {
          console.error("Failed to update data");
          alertMsg(xhr.responseText);
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

  function handleEdit(record, val1, val2) {
    setIsEdit(val1);
    setKey(val2);
    setFirstname(record.firstName.replaceAll('"', ""));
    setLastname(record.lastName.replaceAll('"', ""));
    setEmail(record.email.replaceAll('"', ""));
    setContact(record.contact.replaceAll('"', ""));
    setAddressLine1(record.address.addressLine1.replaceAll('"', ""));
    setAddressLine2(record.address.addressLine2.replaceAll('"', ""));
    setCity(record.address.city.replaceAll('"', ""));
    setState(record.address.state.replaceAll('"', ""));
    setCountry(record.address.country.replaceAll('"', ""));
    setPinCode(record.address.pinCode.replaceAll('"', ""));
  }

  function alertMsg(msg) {
    alert(msg);
    window.location.reload();
  }

  function setRecord(record, i) {
    const address = record.address;
    return (
      <tr key={JSON.stringify(i + 1)}>
        <th scope="row">{JSON.stringify(i + 1)}</th>
        {isEdit && key === i ? (
          <>
            <td>
              <input
                type="text"
                name="firstname"
                value={firstname}
                pattern="[A-Za-z]{1,50}"
                onChange={(e) => setFirstname(e.target.value)}
                required
              />
            </td>
            <td>
              <input
                type="text"
                name="lastName"
                value={lastname}
                pattern="[A-Za-z]{1,50}"
                onChange={(e) => setLastname(e.target.value)}
                required
              />
            </td>
            <td>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </td>
            <td>
              <input
                type="text"
                name="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
              />
            </td>
            <td>
              <input
                type="text"
                name="addressLine1"
                value={addressLine1}
                onChange={(e) => setAddressLine1(e.target.value)}
                required
              />
            </td>
            <td>
              <input
                type="text"
                name="addressLine2"
                value={addressLine2}
                onChange={(e) => setAddressLine2(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </td>
            <td>
              <input
                type="text"
                name="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              />
            </td>
            <td>
              <input
                type="text"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
            </td>
            <td>
              <input
                type="text"
                name="pinCode"
                value={pincode}
                onChange={(e) => setPinCode(e.target.value)}
                required
              />
            </td>
            <td>
              <button
                className="btn btn-success"
                onClick={() => updateContact(record.infoId)}
              >
                Submit
              </button>
            </td>
          </>
        ) : (
          <>
            <td>{record.firstName.replaceAll('"', "")}</td>
            <td>{record.lastName.replaceAll('"', "")}</td>
            <td>{record.email.replaceAll('"', "")}</td>
            <td>{record.contact.replaceAll('"', "")}</td>
            <td>{address.addressLine1.replaceAll('"', "")}</td>
            <td>{address.addressLine2.replaceAll('"', "")}</td>
            <td>{address.city.replaceAll('"', "")}</td>
            <td>{address.state.replaceAll('"', "")}</td>
            <td>{address.country.replaceAll('"', "")}</td>
            <td>{address.pinCode.replaceAll('"', "")}</td>
            <td>
              <button
                className="btn btn-success"
                onClick={(e) => handleEdit(record, true, i)}
              >
                Edit
              </button>
            </td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => deleteContact(record.infoId)}
              >
                Delete
              </button>
            </td>
          </>
        )}
      </tr>
    );
  }

  console.log(data);
  return (
    <>
      <table className="table table-striped mt-10-px">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">Email</th>
            <th scope="col">Contact</th>
            <th scope="col">Address line 1</th>
            <th scope="col">Address line 2</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Country</th>
            <th scope="col">PinCode</th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            data.basicInfoList.map((item, i) => setRecord(item, i))
          ) : (
            <p className="mt-10-px text-center">No Data Found</p>
          )}
        </tbody>
      </table>
    </>
  );
}

export default ShowContacts;
