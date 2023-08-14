import image from "../assets/img/google-24.png"
import { useState } from "react"
const Login = () => {
const [formData, setFormData] = useState({email:"",password:""})

const handleForm = (event) => {
const {name,value} = event.target;
setFormData((prevFormData) => ({...prevFormData,[name]:value}))
}
    return (
            <div className="h-[calc(100vh-4rem)] flex justify-center items-center">
                <form className="flex flex-col w-9/12 sm:w-3/12 justify-items-start space-y-6 p-12 border-2 rounded">
                    <h2 className="text-xl font-bold">Welcome back</h2>
                    <p className="text-sm !mt-1">Please enter your details.</p>
                    <input className="border rounded pl-2" placeholder="Enter your email" type="text" maxLength="10" name="email" value={formData.email} onChange={handleForm}/>
                    <input className="border rounded pl-2" placeholder="Enter Password" type="password" maxLength="10" name="password" value={formData.password} onChange={handleForm}/>
                    <button className="border rounded px-2 py-1 ">Sign In</button>
                    <button className="border rounded px-2 py-1 "><span className="flex items-center justify-around"><img src={image} alt="google-login"/>Login with Google</span></button>
                    <p className="text-xs">Don't have an account ? <span>Sign Up</span></p>
                </form>
            </div>
    )
}

export default Login