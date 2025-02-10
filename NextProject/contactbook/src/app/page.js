// import styles from "./page.module.css";

// export default function Home() {
//   return (
//     <>
//       <div className={styles.body}>
//         <div>
//           <img src="../images/logo-transparent-png.png" alt="Logo" className={styles.logo} />
//         </div>

//         <div className={`${styles.box} shadow-sm`}>
//           <h3 className={`${styles.head} mb-4`}>Signup</h3>
//           <form>
//             <div className="mb-3">
//               <input className="form-control" type="text" placeholder="Username" required />
//             </div>

//             <div className="mb-3">
//               <input className="form-control" type="email" placeholder="Email" required />
//             </div>

//             <div className="d-flex justify-content-center">
//               <button type="submit" className={`${styles.btn} w-50 rounded-pill text-white`}>Signup</button>
//             </div>
//           </form>
//           <div className={`${styles.textCenter} mt-3`}>
//             <p>
//               Already have an account? <a href="/Login">Login here</a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Signup() {
  const [formData, setFormData] = useState({ username: "", email: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const res = await fetch("/api/Signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message);
        setFormData({ username: "", email: "" }); // Reset form
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError("Something went wrong!");
    }
  };

  return (
    <>
      <div className={styles.body}>
        <div>
          <img src="../images/logo-transparent-png.png" alt="Logo" className={styles.logo} />
        </div>

        <div className={`${styles.box} shadow-sm`}>
          <h3 className={`${styles.head} mb-4`}>Signup</h3>
          {error && <p className="text-danger">{error}</p>}
          {message && <p className="text-success">{message}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="d-flex justify-content-center">
              <button type="submit" className={`${styles.btn} w-50 rounded-pill text-white`}>
                Signup
              </button>
            </div>
          </form>

          <div className={`${styles.textCenter} mt-3`}>
            <p>
              Already have an account? <a href="/login">Login here</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
