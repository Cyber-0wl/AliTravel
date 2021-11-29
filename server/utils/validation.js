export default function validator(body) {
  const errors = [];

  if (!body.name) errors.push({ message: "Name is required" });
  if (!body.email) errors.push({ message: "Email is required" });
  if (!body.password) errors.push({ message: "Password is required" });

  if (!body.email.includes("@")) errors.push({ message: "Invalid email" });
  if (body.password.length < 6) errors.push({ message: "password is short" });

  return errors;
}
