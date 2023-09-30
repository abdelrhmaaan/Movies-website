import React, { useEffect, useState } from "react";
import Error from "./error";

function Register() {
  const [formData, setData] = useState({
    email: "",
    password: "",
    name: "",
    username: "",
  });

  const [errors, setError] = useState({});

  const handleChange = (e) => {
    if (e.target.name == "email") {
      //   console.log("this is email section");
      setData({ ...formData, email: e.target.value });
      //   console.log(formData.email);
    }
  };

  useEffect(() => {
    axiso
      .get("url")
      .then((hambozo) => hambozo.jason())
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    // Email validation
    const emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    // console.log(newErrors);
    setError(newErrors);
  };

  return (
    <div>
      <h2>Registration Page</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Email address:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <Error error={errors.email} />}
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
