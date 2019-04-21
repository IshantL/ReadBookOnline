import React,{Component} from 'react';
import LoginForm from '../forms/LoginForm.js'

class LoginPage extends Component{
    submit = data =>{
        console.log(data);
    };

    render(){
        return(
            <div>
            <h1>LoginPage</h1>
            <LoginForm submit ={this.submit}/>
            </div>
        )
    }
}

export default LoginPage;