// import {
//     StyledTitle,
//     StyledFormButton,
//     ButtonGroup,
//     StyledFormArea,
//     colors,
//     Avatar,
//     CopyrightText,
//     ExtraText,
//     TextLink,
//   } from "../components/styles/styles";
  
//   import { Formik, Form } from "formik";
//   import * as Yup from "yup";
//   import { TextInput } from "./../components/FormLib";
  
  
//   // Icons
//   import { FiMail, FiLock } from "react-icons/fi";
  
//   // Auth & redux
//   import { connect } from "react-redux";
// //   import { forgottenPassword } from "./../auth/actions/userActions";
//   import { useHistory } from "react-router-dom";
  
//   // Loader spinner
//   import Loader from "react-loader-spinner";
  
//   const ForgottenPass = ({ forgottenPassword }) => {
//     const history = useHistory();
  
//     return (
//       <div>
//         <StyledFormArea>
//           <Avatar image={Avi} />
//           <StyledTitle color={colors.theme} size={30}>
//             Password Reset
//           </StyledTitle>
  
//           <Formik
//             initialValues={{
//               email: "",
//               redirectUrl: "http://localhost:3000/passwordreset",
//             }}
//             validationSchema={Yup.object({
//               email: Yup.string()
//                 .email("Invalid email address")
//                 .required("Required"),
//             })}
//             onSubmit={(values, { setSubmitting, setFieldError }) => {
//               forgottenPassword(values, history, setFieldError, setSubmitting);
//             }}
//           >
//             {({ isSubmitting }) => (
//               <Form>
//                 <TextInput
//                   name="email"
//                   type="text"
//                   label="Enter your email address"
//                   placeholder="olga1@example.com"
//                   icon={<FiMail />}
//                 />
  
//                 <ButtonGroup>
//                   {!isSubmitting && (
//                     <StyledFormButton type="submit">Submit</StyledFormButton>
//                   )}
//                   {isSubmitting && (
//                     <Loader
//                       type="ThreeDots"
//                       color={colors.theme}
//                       height={49}
//                       width={100}
//                     />
//                   )}
//                 </ButtonGroup>
//               </Form>
//             )}
//           </Formik>
//         </StyledFormArea>
//         <CopyrightText>All rights reserved &copy;2020</CopyrightText>
//       </div>
//     );
//   };
  
//   export default connect(null, { forgottenPassword })(ForgottenPass);