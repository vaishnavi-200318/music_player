import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import InputControl from '../InputControls/InputControl'
import { auth } from '../../firebase';
import  styles from './Login.module.css'




function Login() {
  const navigate=useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg,setErrorMsg]=useState("");
  const [submitButtondisabled, setSubmitButtonDisabled]=useState(false);

  const handleSubmission = () => {
    if( !values.email || !values.pass){
      setErrorMsg("Fill all feilds");
      return;
    }
    setErrorMsg("");
    

    setSubmitButtonDisabled(true);//
    signInWithEmailAndPassword(auth,values.email,values.pass)
    .then(async(res) => {
        setSubmitButtonDisabled(false);

          navigate("/app1");
    })
    .catch((err)=>{
      setSubmitButtonDisabled(false);
      setErrorMsg("Invalid Email or password");
    });
  };


  return (
    <div className={styles.container}>
    <div className={styles.innerBox}>
      <h1 className={styles.heading}>Login</h1>

      <InputControl type="email" label="Email"
      onChange={(event)=>setValues((prev)=>({...prev,email:event.target.value}))
      }
       placeholder="Enter email address"/>
      <InputControl type="password"label="Password"
      onChange={(event)=>setValues((prev)=>({...prev,pass:event.target.value}))
      }
       placeholder="Enter Password"/>

      <div className={styles.footer}>
        <b className={styles.error}>{errorMsg}</b>
        <button disabled={submitButtondisabled} onClick={handleSubmission}>Login</button>
        <p>Already have an account ? {" "}
          <span>
            <Link to="/signup">SignUp</Link>
          </span>
        </p>
      </div>
    </div>
  </div>
  )
}

export default Login



