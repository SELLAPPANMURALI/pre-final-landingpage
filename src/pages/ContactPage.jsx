// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
// import '../styles/star-bg.css';

// const containerVariants = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.3,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// const ContactPage = () => {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = () => {
//     setSubmitted(true);
//   };

//   return (
//     <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
//       <div className="star-background"></div>

//       <motion.div
//         className="container my-5 position-relative"
//         style={{ zIndex: 1 }}
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//       >
//         <motion.h2 className="mb-5 text-center fw-bold" variants={itemVariants}>
//           Contact Us
//         </motion.h2>

//         <div className="row">
//           <motion.div className="col-md-6 mb-4" variants={itemVariants}>
//             <h4 className="mb-3 fw-bold">Stay Tuned With Us</h4>
//             <h3 className="mb-4 text-primary fw-bold">To know more about our Mission,</h3>
//             <p><FaMapMarkerAlt className="me-2 text-primary" />No: 926/4(A2), Devendra Avenue, Koman Nagar, Thaiyur, Chennai - 603103</p>
//             <p><FaEnvelope className="me-2 text-primary" /> contact@spacezoneindia.com</p>
//             <p><FaPhone className="me-2 text-primary" /> +91 81225 60012 / 73959 60012 / 90422 42373</p>
//           </motion.div>

//           <motion.div className="col-md-6" variants={itemVariants}>
//             <div className="p-4 bg-light rounded shadow-sm">
//               <h4 className="fw-bold mb-4 text-center">Send a Message</h4>

//               {!submitted ? (
//                 <form
//                   action="https://formsubmit.co/contact@spacezoneindia.com"
//                   method="POST"
//                   onSubmit={handleSubmit}
//                 >
//                   <div className="row mb-3">
//                     <div className="col">
//                       <input type="text" name="First Name" className="form-control" placeholder="First Name" required />
//                     </div>
//                     <div className="col">
//                       <input type="text" name="Last Name" className="form-control" placeholder="Last Name" required />
//                     </div>
//                   </div>

//                   <div className="row mb-3">
//                     <div className="col">
//                       <input type="email" name="Email" className="form-control" placeholder="Email Address" required />
//                     </div>
//                     <div className="col">
//                       <input type="text" name="Subject" className="form-control" placeholder="Subject" required />
//                     </div>
//                   </div>

//                   <div className="mb-3">
//                     <textarea name="Message" rows="5" className="form-control" placeholder="Message" required />
//                   </div>

//                   <input type="text" name="_honey" style={{ display: "none" }} />
//                   <input type="hidden" name="_next" value="https://spacezoneindia.com/thank-you" />

//                   <div className="text-center">
//                     <button type="submit" className="btn btn-dark px-5">Send Message</button>
//                   </div>
//                 </form>
//               ) : (
//                 <div className="alert alert-success text-center">
//                   Thank you for contacting us! ✅
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         </div>

//         {/* Our Location Map */}
//         <motion.div className="mt-5" variants={itemVariants}>
//           <h4 className="mb-3 fw-bold text-center">Our Location</h4>
//           <div className="text-center my-4">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4139.5471666844!2d80.18908021084575!3d12.760601019416843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5251f2ebcfb8ef%3A0x165c4d8d471d4399!2sSpace%20Zone%20India%20%7C%20Space%20Science%20to%20All!5e1!3m2!1sen!2sin!4v1750062907261!5m2!1sen!2sin"
//               width="100%"
//               height="350"
//               style={{ border: 0, borderRadius: '8px' }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="Space Zone India Location"
//             ></iframe>
//           </div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default ContactPage;



// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
// import '../styles/star-bg.css';

// const containerVariants = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.3,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// const ContactPage = () => {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = () => {
//     setSubmitted(true);
//   };

//   return (
//     <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
//       <div className="star-background"></div>

//       <motion.div
//         className="container my-5 position-relative"
//         style={{ zIndex: 1 }}
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//       >
//         <motion.h2 className="mb-5 text-center fw-bold" variants={itemVariants}>
//           Contact Us
//         </motion.h2>

//         <div className="row">
//           <motion.div className="col-md-6 mb-4" variants={itemVariants}>
//             <h4 className="mb-3 fw-bold">Stay Tuned With Us</h4>
//             <h3 className="mb-4 text-primary fw-bold">To know more about our Mission,</h3>
//             <p><FaMapMarkerAlt className="me-2 text-primary" />No: 926/4(A2), Devendra Avenue, Koman Nagar, Thaiyur, Chennai - 603103</p>
//             <p><FaEnvelope className="me-2 text-primary" /> contact@spacezoneindia.com</p>
//             <p><FaPhone className="me-2 text-primary" /> +91 81225 60012 / 73959 60012 / 90422 42373</p>
//           </motion.div>

//           <motion.div className="col-md-6" variants={itemVariants}>
//             <div className="p-4 bg-light rounded shadow-sm">
//               <h4 className="fw-bold mb-4 text-center text-info">Send a Message</h4>

//               {!submitted ? (
//                 <form
//                   action="https://formsubmit.co/sellappan2004@gmail.com"
//                   method="POST"
//                   onSubmit={handleSubmit}
//                 >
//                   <div className="row mb-3">
//                     <div className="col">
//                       <input type="text" name="First Name" className="form-control" placeholder="First Name" required />
//                     </div>
//                     <div className="col">
//                       <input type="text" name="Last Name" className="form-control" placeholder="Last Name" required />
//                     </div>
//                   </div>

//                   <div className="row mb-3">
//                     <div className="col">
//                       <input type="email" name="Email" className="form-control" placeholder="Email Address" required />
//                     </div>
//                     <div className="col">
//                       <input type="text" name="Subject" className="form-control" placeholder="Subject" required />
//                     </div>
//                   </div>

//                   <div className="mb-3">
//                     <textarea name="Message" rows="5" className="form-control" placeholder="Message" required />
//                   </div>

//                   <input type="text" name="_honey" style={{ display: "none" }} />
//                   <input type="hidden" name="_captcha" value="false" />
//                   <input type="hidden" name="_next" value="https://spacezoneindia.com/thank-you" />

//                   <div className="text-center">
//                     <button type="submit" className="btn btn-dark px-5">Send Message</button>
//                   </div>
//                 </form>
//               ) : (
//                 <div className="alert alert-success text-center">
//                   Thank you for contacting us! ✅
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         </div>

//         {/* Our Location Map */}
//         <motion.div className="mt-5" variants={itemVariants}>
//           <h4 className="mb-3 fw-bold text-center">Our Location</h4>
//           <div className="text-center my-4">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4139.5471666844!2d80.18908021084575!3d12.760601019416843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5251f2ebcfb8ef%3A0x165c4d8d471d4399!2sSpace%20Zone%20India%20%7C%20Space%20Science%20to%20All!5e1!3m2!1sen!2sin!4v1750062907261!5m2!1sen!2sin"
//               width="100%"
//               height="350"
//               style={{ border: 0, borderRadius: '8px' }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="Space Zone India Location"
//             ></iframe>
//           </div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default ContactPage;




// import React from "react";
// import { motion } from "framer-motion";
// import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
// import '../styles/star-bg.css';

// const containerVariants = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.3,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// const ContactPage = () => {
//   return (
//     <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
//       <div className="star-background"></div>

//       <motion.div
//         className="container my-5 position-relative"
//         style={{ zIndex: 1 }}
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//       >
//         <motion.h2 className="mb-5 text-center fw-bold" variants={itemVariants}>
//           Contact Us
//         </motion.h2>

//         <div className="row">
//           <motion.div className="col-md-6 mb-4" variants={itemVariants}>
//             <h4 className="mb-3 fw-bold">Stay Tuned With Us</h4>
//             <h3 className="mb-4 text-primary fw-bold">To know more about our Mission,</h3>
//             <p><FaMapMarkerAlt className="me-2 text-primary" />No: 926/4(A2), Devendra Avenue, Koman Nagar, Thaiyur, Chennai - 603103</p>
//             <p><FaEnvelope className="me-2 text-primary" /> contact@spacezoneindia.com</p>
//             <p><FaPhone className="me-2 text-primary" /> +91 81225 60012 / 73959 60012 / 90422 42373</p>
//           </motion.div>

//           <motion.div className="col-md-6" variants={itemVariants}>
//             <div className="p-4 bg-light rounded shadow-sm">
//               <h4 className="fw-bold mb-4 text-center text-info">Send a Message</h4>

//               <form
//                 action="https://formsubmit.co/sellappan2004@gmail.com"
//                 method="POST"
//               >
//                 <div className="row mb-3">
//                   <div className="col">
//                     <input type="text" name="First Name" className="form-control" placeholder="First Name" required />
//                   </div>
//                   <div className="col">
//                     <input type="text" name="Last Name" className="form-control" placeholder="Last Name" required />
//                   </div>
//                 </div>

//                 <div className="row mb-3">
//                   <div className="col">
//                     <input type="email" name="Email" className="form-control" placeholder="Email Address" required />
//                   </div>
//                   <div className="col">
//                     <input type="text" name="Subject" className="form-control" placeholder="Subject" required />
//                   </div>
//                 </div>

//                 <div className="mb-3">
//                   <textarea name="Message" rows="5" className="form-control" placeholder="Message" required />
//                 </div>

//                 <input type="text" name="_honey" style={{ display: "none" }} />
//                 <input type="hidden" name="_captcha" value="false" />
//                 <input type="hidden" name="_next" value="thank-you" />

//                 <div className="text-center">
//                   <button type="submit" className="btn btn-dark px-5">Send Message</button>
//                 </div>
//               </form>
//               ) : (
//                  <div className="alert alert-success text-center">
//                    Thank you for contacting us! ✅
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         </div>

//         {/* Our Location Map */}
//         <motion.div className="mt-5" variants={itemVariants}>
//           <h4 className="mb-3 fw-bold text-center">Our Location</h4>
//           <div className="text-center my-4">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4139.5471666844!2d80.18908021084575!3d12.760601019416843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5251f2ebcfb8ef%3A0x165c4d8d471d4399!2sSpace%20Zone%20India%20%7C%20Space%20Science%20to%20All!5e1!3m2!1sen!2sin!4v1750062907261!5m2!1sen!2sin"
//               width="100%"
//               height="350"
//               style={{ border: 0, borderRadius: '8px' }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="Space Zone India Location"
//             ></iframe>
//           </div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default ContactPage;



// import React from "react";
// import { motion } from "framer-motion";
// import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
// import { useLocation } from "react-router-dom";
// import '../styles/star-bg.css';

// const containerVariants = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.3,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// const ContactPage = () => {
//   const location = useLocation();
//   const showSuccess = location.pathname.includes("thank-you");

//   return (
//     <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
//       <div className="star-background"></div>

//       <motion.div
//         className="container my-5 position-relative"
//         style={{ zIndex: 1 }}
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//       >
//         <motion.h2 className="mb-5 text-center fw-bold" variants={itemVariants}>
//           Contact Us
//         </motion.h2>

//         <div className="row">
//           <motion.div className="col-md-6 mb-4" variants={itemVariants}>
//             <h4 className="mb-3 fw-bold">Stay Tuned With Us</h4>
//             <h3 className="mb-4 text-primary fw-bold">To know more about our Mission,</h3>
//             <p><FaMapMarkerAlt className="me-2 text-primary" />No: 926/4(A2), Devendra Avenue, Koman Nagar, Thaiyur, Chennai - 603103</p>
//             <p><FaEnvelope className="me-2 text-primary" /> contact@spacezoneindia.com</p>
//             <p><FaPhone className="me-2 text-primary" /> +91 81225 60012 / 73959 60012 / 90422 42373</p>
//           </motion.div>

//           <motion.div className="col-md-6" variants={itemVariants}>
//             <div className="p-4 bg-light rounded shadow-sm">
//               <h4 className="fw-bold mb-4 text-center text-info">Send a Message</h4>

//               {!showSuccess ? (
//                 <form
//                   action="https://formsubmit.co/sellappan2004@gmail.com"
//                   method="POST"
//                 >
//                   <div className="row mb-3">
//                     <div className="col">
//                       <input type="text" name="First Name" className="form-control" placeholder="First Name" required />
//                     </div>
//                     <div className="col">
//                       <input type="text" name="Last Name" className="form-control" placeholder="Last Name" required />
//                     </div>
//                   </div>

//                   <div className="row mb-3">
//                     <div className="col">
//                       <input type="email" name="Email" className="form-control" placeholder="Email Address" required />
//                     </div>
//                     <div className="col">
//                       <input type="text" name="Subject" className="form-control" placeholder="Subject" required />
//                     </div>
//                   </div>

//                   <div className="mb-3">
//                     <textarea name="Message" rows="5" className="form-control" placeholder="Message" required />
//                   </div>

//                   <input type="text" name="_honey" style={{ display: "none" }} />
//                   <input type="hidden" name="_captcha" value="false" />
//                   <input type="hidden" name="_next" value="https://spacezone-landing-page.firebaseapp.com/thank-you" />

//                   <div className="text-center">
//                     <button type="submit" className="btn btn-dark px-5">Send Message</button>
//                   </div>
//                 </form>
//               ) : (
//                 <div className="alert alert-success text-center">
//                   Thank you for contacting us! ✅
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         </div>

//         {/* Our Location Map */}
//         <motion.div className="mt-5" variants={itemVariants}>
//           <h4 className="mb-3 fw-bold text-center">Our Location</h4>
//           <div className="text-center my-4">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4139.5471666844!2d80.18908021084575!3d12.760601019416843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5251f2ebcfb8ef%3A0x165c4d8d471d4399!2sSpace%20Zone%20India%20%7C%20Space%20Science%20to%20All!5e1!3m2!1sen!2sin!4v1750062907261!5m2!1sen!2sin"
//               width="100%"
//               height="350"
//               style={{ border: 0, borderRadius: '8px' }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="Space Zone India Location"
//             ></iframe>
//           </div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default ContactPage;







import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import '../styles/star-bg.css';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // stop page reload

    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch("https://formsubmit.co/sellappan2004@gmail.com", {
        method: "POST",
        body: formData,
      });
      setSubmitted(true);
      form.reset();
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
    }
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <div className="star-background"></div>

      <motion.div
        className="container my-5 position-relative"
        style={{ zIndex: 1 }}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2 className="mb-5 text-center fw-bold" variants={itemVariants}>
          Contact Us
        </motion.h2>

        <div className="row">
          <motion.div className="col-md-6 mb-4" variants={itemVariants}>
            <h4 className="mb-3 fw-bold">Stay Tuned With Us</h4>
            <h3 className="mb-4 text-primary fw-bold">To know more about our Mission,</h3>
            <p><FaMapMarkerAlt className="me-2 text-primary" />No: 926/4(A2), Devendra Avenue, Koman Nagar, Thaiyur, Chennai - 603103</p>
            <p><FaEnvelope className="me-2 text-primary" /> contact@spacezoneindia.com</p>
            <p><FaPhone className="me-2 text-primary" /> +91 81225 60012 / 73959 60012 / 90422 42373</p>
          </motion.div>

          <motion.div className="col-md-6" variants={itemVariants}>
            <div className="p-4 bg-light rounded shadow-sm">
              <h4 className="fw-bold mb-4 text-center text-info">Send a Message</h4>

              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <div className="col">
                      <input type="text" name="First Name" className="form-control" placeholder="First Name" required />
                    </div>
                    <div className="col">
                      <input type="text" name="Last Name" className="form-control" placeholder="Last Name" required />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col">
                      <input type="email" name="Email" className="form-control" placeholder="Email Address" required />
                    </div>
                    <div className="col">
                      <input type="text" name="Subject" className="form-control" placeholder="Subject" required />
                    </div>
                  </div>

                  <div className="mb-3">
                    <textarea name="Message" rows="5" className="form-control" placeholder="Message" required />
                  </div>

                  <input type="text" name="_honey" style={{ display: "none" }} />
                  <input type="hidden" name="_captcha" value="false" />

                  <div className="text-center">
                    <button type="submit" className="btn btn-dark px-5">Send Message</button>
                  </div>
                </form>
              ) : (
                <div className="alert alert-success text-center">
                  Thank you for contacting us! ✅
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Our Location Map */}
        <motion.div className="mt-5" variants={itemVariants}>
          <h4 className="mb-3 fw-bold text-center">Our Location</h4>
          <div className="text-center my-4">
            <iframe
              //src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4139.5471666844!2d80.18908021084575!3d12.760601019416843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5251f2ebcfb8ef%3A0x165c4d8d471d4399!2sSpace%20Zone%20India%20%7C%20Space%20Science%20to%20All!5e1!3m2!1sen!2sin!4v1750062907261!5m2!1sen!2sin"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4139.5471666844!2d80.18908021084575!3d12.760601019416843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5251f2ebcfb8ef%3A0x165c4d8d471d4399!2sSpace%20Zone%20India%20%7C%20Space%20Science%20to%20All!5e1!3m2!1sen!2sin!4v1750062907261!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Space Zone India Location"
            ></iframe>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
