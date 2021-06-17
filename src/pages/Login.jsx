import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

const Login = () => {
    
    const history = useHistory();

    const loginUser = ({userName, email, password}) => {

        if(!email || !password) {
            alert('Please enter a valid email address')
        }
    


    
fetch(`https://user-manager-three.vercel.app/api/user/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
                body: JSON.stringify({
                            userName: userName,
                            email : email,
                            password : password
            })
            })
                .then(res => res.json())
                .then(result => {
                    if (result.error === true) {
                       return(
                            alert(result.message),
                            false
                            )
                        }
                        history.push('/home');
                    })
                    .catch(err => {
                        alert('Unable to complete request, try later')
                    })
                    history.push('/login');

}



    const { register, handleSubmit } = useForm()
    return (
        <> 
         <div id="login-box">
            <div className="left">
                <h1>Welcome Back! </h1>
            <form onSubmit={handleSubmit(loginUser)}>
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
                {...register('password', {required: true })}
                />
                

                <button id='btn' type='submit' > Log Me In</button>

                <div>
                <a href="/register" id='old-user'> New User? Register Me </a>
                </div>
            </form>
            </div>
        </div>
        
        </>
    )
}

export default Login;
