import { useState } from "react";
import "./App.css";

const provinces = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Nova Scotia",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
];

function App() {
  const [submittedData, setSubmittedData] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    // get the values from the form
    const formData = new FormData(event.currentTarget);
    // turn the values into an object and save it in state
    setSubmittedData(Object.fromEntries(formData))
  }


  return (
    <main className="page">
      <section className="form-panel">
        <h1>Data Entry Form</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-row two-columns">
            <label>
              Email
              <input name="email" type="email" placeholder="Enter email" />
            </label>

            <label>
              Name
              <input name="fullName" type="text" placeholder="Full Name" />
            </label>

            <label>
              Address
              <input name="address" type="text" placeholder="1234 Main St" />
            </label>

            <label>
              Address 2
              <input
                name="address2"
                type="text"
                placeholder="Apartment, studio, or floor"
              />
            </label>
          </div>

          <div className="form-row three-columns">
            <label>
              City
              <input name="city" type="text" />
            </label>

            <label>
              Province
              <select name="province" defaultValue="">
                <option value="" disabled>
                  Choose...
                </option>
                {provinces.map((province) => (
                  <option key={province} value={province}>
                    {province}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Postal Code
              <input name="postalCode" type="text" />
            </label>
          </div>

          <label className="terms">
            <input name="agreeToTerms" type="checkbox" />
            Agree Terms & Conditions
          </label>

          <button type="submit">Submit</button>
        </form>
      </section>

      {submittedData && (
        <dl className="submitted-data">
          <dt>Email:</dt>
          <dd>{submittedData.email}</dd>

          <dt>Full Name:</dt>
          <dd>{submittedData.fullName}</dd>

          <dt>Address:</dt>
          <dd>
            {[submittedData.address, submittedData.address2]
              .filter(Boolean)
              .join(", ")}
          </dd>

          <dt>City:</dt>
          <dd>{submittedData.city}</dd>

          <dt>Province:</dt>
          <dd>{submittedData.province}</dd>

          <dt>Postal Code:</dt>
          <dd>{submittedData.postalCode}</dd>
        </dl>
      )}
    </main>
  );
}

export default App;
