import {  useFormik } from "formik";
import * as yup from 'yup';

const formvalidationSchema = yup.object({
  email: yup
  .string()
  .min(5 , "Need bigger email")
  .required("Enter your email"),
  password: yup
  .string()
  .min(8 ," your password must have 8 characters")
  .max(12)
  .required("Enter your password"),
});

export function Loginform() {
  const {handleSubmit,handleChange,handleBlur,values,touched,errors} = useFormik({
  initialValues : {email: "keerthi" , password : "hjjhj"},
  validationSchema: formvalidationSchema,
  onSubmit: (values) => {
    console.log("onSubmit",values);
  },
});
  return (
    
    <form className='form' onSubmit={handleSubmit}>
      <input  type="email" 
       onBlur={handleBlur}
      onChange={handleChange}
      name="email"
      value={values.email} placeholder="email"  />
     {/* only if user touched and moved away from from , then show error message  */}
     { touched.email && errors.email ? errors.email : ""}
      <input type="password" 
      onChange={handleChange}
     onBlur={handleBlur}
      name="password"
      value={values.password} placeholder="password"   />
    { touched.password && errors.password ? errors.password : ""}
      <button type="submit">Login</button>
     <p> values :{JSON.stringify(values)}</p>
     <p> touched :{JSON.stringify(touched)}</p>
     <p> errors :{JSON.stringify(errors)}</p>
    </form>
  );
}
