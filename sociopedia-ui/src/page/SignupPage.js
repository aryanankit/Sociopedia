import { useEffect } from "react";

const SignupPage = () => {

  useEffect(() => {
    document.title = 'SignUp';
  },[]);

  return (<div>
    Sign up Page 
  </div>);
}

export default SignupPage;