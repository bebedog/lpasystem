import LoginForm from "../components/LoginUser";
import {json, redirect} from "react-router-dom";

function EventLoginForm(){
    return <LoginForm/>;
}

//client side. code will execute in the browser. not backend code
export async function LoginEventAction({request, params}){
    const data = await request.formData();
    const loginFormData = {
        username: data.get('username'),
        password: data.get('password')
    }
    //send data to the backend
    const response = await fetch('/authLogin',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginFormData)
    });

    if (!response.ok){
        throw json({message: 'Could not save event.'}, {status: 500});
    }

    return redirect('/client');
}

export default EventLoginForm;