"use client";
import { useForm } from "react-hook-form";
import "./Footer.css";
import { useState } from "react";
// import { sendEmail } from "./utils/mailer";
interface FormData {
  name: string;
  email: string;
  contactNumber: string;
  service: string;
}

interface Props {
  sendEmail: (data: FormData) => void;
}

function Footer({ sendEmail }: Props) {
  const [submitted, setsubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const selectedService = watch("service");

  const onSubmit = (data: any) => {
    console.log(data);
    sendEmail({
      contactNumber: data.contactNumber,
      email: data.email,
      name: data.name,
      service: data.service,
    });
    setsubmitted(true);
    // Add your submission logic here
  };

  return (
    <footer>
      <div className="appointment-form">
        <form
          onSubmit={handleSubmit(onSubmit)}
          onChange={() => setsubmitted(false)}
          className="form-group"
        >
          <label>Name</label>
          <input type="text" {...register("name", { required: true })} />
          {errors.name && <p className="error">Name is required</p>}

          <label>Email</label>
          <input
            type="email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && (
            <p className="error">Email is required and must be valid</p>
          )}

          <label>Contact Number</label>
          <input
            type="tel"
            {...register("contactNumber", {
              required: true,
              pattern: /^[0-9]{10}$/,
            })}
          />
          {errors.contactNumber && (
            <p className="error">
              Contact number is required and must be a valid 10-digit number
            </p>
          )}

          <label>Type of Service</label>
          <select {...register("service", { required: false })}>
            <option value="All">All</option>
            <option value="Roofing">Roofing</option>
            <option value="Renovation">Renovation</option>
          </select>
          {errors.service && (
            <p className="error">Type of service is required</p>
          )}

          {!!submitted ? (
            <button disabled={!!submitted}>Submitted</button>
          ) : (
            <button
              type="submit"
              disabled={
                !!errors.name ||
                !!errors.email ||
                !!errors.contactNumber ||
                !!errors.service ||
                !!submitted
              }
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </footer>
  );
}

export default Footer;
