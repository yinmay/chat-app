import React from 'react'
import Logo from '../../component/logo/logo.js'
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'

class Login extends React.Component{
    
        constructor(props){
            super(props)
            this.register = this.register.bind(this)
        };
        register(){
            console.log(this.props)
            this.props.history.push('/register')
         }
        render(){
        return (
            <div>
                <Logo></Logo>
                <h2>login page</h2>

                <WingBlank>
                <WhiteSpace />

                    <List>
                        <InputItem>username</InputItem>
                        <InputItem>password</InputItem>

                    </List>
                    <WhiteSpace />

                <Button type='primary'>login</Button>
                <WhiteSpace />
                <Button onClick={this.register}  type='primary'>register</Button>
              
            </WingBlank>  
            </div>
        )
    }
}

export default Login