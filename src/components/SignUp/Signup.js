import React, {useState} from 'react'
import  styles from './Signup.module.css';
import InputControl from '../InputControls/InputControl'
import { Link ,useNavigate} from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';


function Signup() {
  const navigate=useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg,setErrorMsg]=useState("");
  const [submitButtondisabled, setSubmitButtonDisabled]=useState(false);

  const handleSubmission = () => {
    if(!values.name || !values.email || !values.pass){
      setErrorMsg("Fill all feilds");
      return;
    }
    setErrorMsg("");
    

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth,values.email,values.pass)
    .then(async(res) => {
        setSubmitButtonDisabled(false);
        const user=res.user;
        await updateProfile(user,{
            displayName:values.name,
          });
          navigate("/login");
    })
    .catch((err)=>{
      setSubmitButtonDisabled(false);
      setErrorMsg("User or email already exixts");
    });
  };

  return (
    <div className={styles.container}>
    <div className={styles.innerBox}>
      <h1 className={styles.heading}>SignUp</h1>
      <InputControl label="Name" placeholder="Enter your name"
      onChange={(event)=>
        setValues((prev) => ({...prev, name:event.target.value}))
        }
      />
      <InputControl type="email" label="Email" placeholder="Enter email address"
        onChange={(event)=>
        setValues((prev) => ({...prev, email:event.target.value}))
        }
      />

      <InputControl type="password" label="Password" placeholder="Enter Password"
        onChange={(event)=>
        setValues((prev) => ({...prev, pass:event.target.value}))
        }
      />

      <div className={styles.footer}>
      <b className={styles.error}>{errorMsg}</b>
      <button onClick={handleSubmission} disabled={submitButtondisabled}>SignUp</button>
      <p>Already have an account ? {" "}
          <span>
          <Link to="/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  </div>
  )
}

export default Signup
