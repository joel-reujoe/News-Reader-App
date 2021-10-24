import React from "react";
import { Layout, Menu ,Input, Form, Button} from 'antd';
import 'antd/dist/antd.css'
import logo from '../assets/logo-1.png'
import "tailwindcss/tailwind.css"
import axios from 'axios'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const { Header, Content } = Layout;

const globalpath = "http://localhost:8000"



const Login = props =>{

    const [msg, setMsg] = useState(false)


    const onFinish = (values) => {
        console.log('Success:', values);
        var params=new URLSearchParams();
        params.append('email',values.email);  
        params.append('password', values.password);
        axios.post(`${globalpath}/signIn`,params).then(function(response){
            if(response.data.status===true)
            {
              localStorage.setItem("uid",response.data.data.uid);
              localStorage.setItem("uname",response.data.data.uname);
              props.history.push('/mainpage');
            }
            else
            {
                setMsg(response.data.msg)
            }
            
        }).catch(function(error){
          console.log(error);
        })
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const uid = localStorage.getItem('uid');

if (uid !== null)
{
    props.history.push('/mainpage');
}

return <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', height:"100px" }}>
            <div className="logo">
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <img src={logo} width="100" height="100" alt="logo"/>
                </Menu>
            </div>
        </Header>
        <Content className="site-layout" style={{ padding: '50px', marginTop: 64}}>
        <div className="site-layout-background" style={{ padding: 100, minHeight: 380 }}>
        {<div className=""><strong>{msg}</strong></div>}
        <Content style={{ padding: '0 50px', marginTop: 64, marginLeft:-130 }}>
            <div className="site-layout-content">
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 2 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
                <Form.Item style={{width:250}}
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input style={{width:250}} />
                </Form.Item>

                <Form.Item style={{width:250}}
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password style={{width:250}} />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 4 }}>
                    <Button type="primary" style={{margin:20}} htmlType="submit">
                    Submit
                    </Button>
                    <Link wrapperCol={{ offset: 8, span: 16 }} to="/register">Register here</Link>
                </Form.Item>
               
            </Form>
            </div>
        </Content>
        </div>
        </Content>
    </Layout>
}

export default Login