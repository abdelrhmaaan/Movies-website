import React, { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({}); // Store validation errors

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const validateForm = () => {
    const errors = {};

    // Email validation
    const emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(email)) {
      errors.email = "Invalid email address";
    }

    // Username validation (no spaces)
    const usernamePattern = /^\S+$/;
    if (!usernamePattern.test(username)) {
      errors.username = "Username should not contain spaces";
    }

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
      errors.password =
        "Password should be at least 8 characters long and contain at least one lowercase, one uppercase, one digit, and one special character";
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    const validationErrors = validateForm();
    setErrors(validationErrors);
  };

  return (
    <div className="container text-light card bg-dark my-3">
      <h2>Registration Page</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Email address:</label>
          <input
            type="email"
            value={email}
            className="form-control"
            onChange={handleEmailChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            className="form-control"
            onChange={handleNameChange}
            required
          />
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            className="form-control"
            onChange={handleUsernameChange}
            required
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            className="form-control"
            onChange={handlePasswordChange}
            required
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            className="form-control"
            onChange={handleConfirmPasswordChange}
            required
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>
        <div>
          <button type="submit" className="btn btn-info">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
