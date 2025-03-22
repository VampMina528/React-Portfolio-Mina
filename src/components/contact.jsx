import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleBlur = (e) => {
    if (!form[e.target.name]) setError("All fields are required!");
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  return (
    <section style={{ padding: "20px", textAlign: "center" }}>
      <h2>Contact Me</h2>
      <form>
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} onBlur={handleBlur} required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} onBlur={handleBlur} required />
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} onBlur={handleBlur} required />
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!validateEmail(form.email) && form.email && <p style={{ color: "red" }}>Invalid email address</p>}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
