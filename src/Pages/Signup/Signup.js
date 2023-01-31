import {useState} from 'react'
import { useSignup } from '../../Hooks/useSignup';

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error} = useSignup();

  const handleSubmit = async (e) =>{
    e.preventDefault();
await signup(email, password);
setEmail("")
setPassword("")
    // console.log(email, password);
    
  }
  return (
    <div className='main-form'>
        <h1>SignUp Here</h1>
       <form onSubmit={handleSubmit}>
       <div className="field">
          <label htmlFor="">Email</label>
          <input
            type="email"
            onChange={(e)=>setEmail(e.target.value)} value={email} 
            id=""
          />
          </div>
          <div className="field">
          <label htmlFor="">Password</label>
          <input
            type="password"
            onChange={(e)=>setPassword(e.target.value)} value={password} 
            id=""
          />
          </div>

          <button>Submit</button>
          {error && <p>{error}</p>}
       </form>
    </div>
  )
}
