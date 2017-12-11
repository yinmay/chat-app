import React from 'react'
import Logo from '../../component/logo/logo.js'
import {List, InputItem, Radio, WingBlank, WhiteSpace, Button} from 'antd-mobile'
import {connect} from 'react-redux'
// import {Redirect} from 'react-route-dom'
import {register} from '../../redux/user.redux'

@connect(
    state=>state.user,
    {register}
)
class Register extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            user:'',
            pwd:'',
            repeatpwd:'',
            type:'genius'
        }
        this.handleRegister=this.handleRegister.bind(this)
    }
    handleChange(key,val){
        this.setState({
            [key]:val
        })
    }
    handleRegister(){
        this.props.register(this.state)
        console.log(this.state)
    }
        render(){
            const RadioItem = Radio.RadioItem;

            return (
                <div>
                    <Logo></Logo>
                    <h2>Register page</h2>
                    <WhiteSpace />
                    <List>
                        {this.props.msg?<p className="error-msg">{this.props.msg}</p>:null}
                        <InputItem onChange={v=>this.handleChange('user',v)}>username</InputItem>
                        <InputItem type='password' onChange={v=>this.handleChange('pwd',v)}>password</InputItem>
                        <InputItem type='password' onChange={v=>this.handleChange('repeatpwd',v)}>confirm password</InputItem>

                        <WhiteSpace/>
                        <RadioItem 
                        checked={this.state.type==='genius'}
                        onChange={()=>this.handleChange('type','genius')}
                        
                        >
                        genius
                        </RadioItem>
                        <RadioItem checked={this.state.type==='boss'}
                         onChange={()=>this.handleChange('type','boss')}
                        >
                        boss
                        </RadioItem>
                        <WhiteSpace/>
                        <Button type='primary' onClick={this.handleRegister}>register</Button>
                    </List>
                </div>
            )
    }
}

export default Register