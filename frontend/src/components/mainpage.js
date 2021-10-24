import React, { useEffect, useState } from 'react';
import { Layout, Menu, List, Button, Input } from 'antd';
import logo from '../assets/logo-1.png'
import axios from 'axios';

const { Search } = Input;

const { Header, Content, Sider } = Layout;


const MainPage = (props)=>{
    const globalpath = "http://localhost:8000";
    console.log(globalpath)
    const [listDataItem, setListData] = useState([])
    const [category, setCategory] = useState("")

    const handleCategoryClick = (category)=>{
        console.log(category)
        setCategory(category)
    }

    
    useEffect(()=>{
        let params=new URLSearchParams();
        params.append("category",category);
        console.log(globalpath)
        axios.get(`${globalpath}/newsGenerator/?category=${category}`).then((res)=>{
            setListData(res.data.articles)
        }).catch(err=>{
            console.log(err)
        })


    },[category])

    const uid = localStorage.getItem('uid');
    console.log(uid)

    if (uid === null)
    {
        props.history.push('/login');
    }

    const handleLogout = ()=>{
        localStorage.removeItem('uid')
        props.history.push('/login');
    }

    const onSearch = value => {
        axios.get(`${globalpath}/searchNews/?query=${value}`).then((res)=>{
            setListData(res.data.articles)
        }).catch(err=>{
            console.log(err)
        })
    }

let options = { year: 'numeric', month: 'long', day: 'numeric', hour:'numeric', minute:'numeric' };
return <Layout>
    <Header className="header"  style={{ position: 'fixed', zIndex: 1, width: '100%', height:"100px" }} >
        <div className="logo">
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">
                    <img src={logo} width="100" height="100" alt="logo"/>
                </Menu.Item>
                <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200,marginTop:40, marginRight:20 }} />
                <div>
                <Button type="primary" style={{height:100, alignItems:"self-end",marginRight:0}} onClick={handleLogout}>
                    Logout
                </Button>
                </div>
            </Menu>
        </div>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200} style={{marginTop:100,marginLeft:-40}}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%'}}
          >
              <Menu.Item key="1" onClick={()=>{handleCategoryClick('general')}} >General</Menu.Item>
              <Menu.Item key="2" onClick={()=>{handleCategoryClick('business')}}>Business</Menu.Item>
              <Menu.Item key="3" onClick={()=>{handleCategoryClick('sports')}}>Sports</Menu.Item>
              <Menu.Item key="4" onClick={()=>{handleCategoryClick('entertainment')}}>Entertainment</Menu.Item>
              <Menu.Item key="5" onClick={()=>{handleCategoryClick('science')}}>Science</Menu.Item>
              <Menu.Item key="6" onClick={()=>{handleCategoryClick('technology')}}>Technology</Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ padding: '100px 24px', minHeight: 280 }}>
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
            onChange: page => {
                console.log(page);
            },
            pageSize: 4,
            }}
            dataSource={listDataItem}
        renderItem={item => (
            <List.Item
                key={item.title}
                extra={
                <img
                    width={272}
                    alt="logo"
                    src={item.urlToImage}
                />
                }>
                <List.Item.Meta
                title={<a rel="noreferrer" href={item.url} target='_blank'>{item.title}</a>}
                description={item.description}
                />
                <p>{new Date(item.publishedAt).toLocaleDateString("en-IN",options)}</p>
            </List.Item>
            )}
        />
        </Content>
      </Layout>
    </Content>
  </Layout>
}

export default MainPage

