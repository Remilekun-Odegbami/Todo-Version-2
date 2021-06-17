
import { useHistory } from 'react-router-dom';
import {useForm } from 'react-hook-form'

import '../styles/Register.css';

const Register = () => {

    const { register, handleSubmit} = useForm()
    
    const history = useHistory();
    
    const registerUser = ({userName, email, password, confirmPassword}) => {
       if (!email) {
            return alert("please enter a valid email")
        }
        if(password !== confirmPassword) {
            return alert('Password do not match')
        }

        
        
            fetch(`https://user-manager-three.vercel.app/api/user/register`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                            userName: userName,
                            email : email,
                            password : password,
                            confirmPassword : confirmPassword
            })
            })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
            .catch(err => {
                console.log('this error occurred', err) 
                alert('An error occurred, try later')
            })

        history.push('/home'); 
       
      };
    
    
    return(
    <>
        <div id="login-box">
            <div className="left">
                <h1> Sign up </h1>
            <form onSubmit={handleSubmit(registerUser)}>

                <input
                 type="text"
                 name="username"
                 placeholder="Username"
                 className='input-box'
                 {...register('userName', {required: true })}
                />

                <input
                 type="text"
                 name="email" 
                placeholder="E-mail"
                 className='input-box'
                 {...register('email', {required: true })}
                />

                <input
                 type="password"
                 name="password"
                 placeholder="Password" 
                className='input-box'
                {...register('password', {required: true})}
                />

                <input
                 type="password"
                 name="password2"
                 placeholder="Retype password"
                 className='input-box'
                 {...register('confirmPassword', {required: true })}
                />

                <button id='btn' 
                type="submit"
                > Sign Me Up</button>

                <div>
                <a href="/login" id='old-user'> Old User? Sign Up Instead </a>
                </div>
            </form>
            </div>
        </div>
    </>
    )
}

export default Register;
