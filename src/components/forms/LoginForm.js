import React,{ Component} from 'react';
import {Form, Button } from 'semantic-ui-react';

class LoginForm extends Component{
    state = {
        data:{
            email:'',
            password : ''
        },
        loading: false,
        errors: {}
    };
    
    render(){
        return(
            <Form>
                
                <Button primary>Login</Button>
            </Form>
        )
    }
}

export default LoginForm;