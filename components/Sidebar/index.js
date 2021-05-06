import React, { useState } from 'react';
import Link from 'next/link';
import { get } from 'axios';
import { element } from 'prop-types';
import './style.css';

import { Layout, Menu, Typography } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  MenuFoldOutlined,
  LogoutOutlined,
  HomeOutlined,
} from '@ant-design/icons';

import { useAuth } from '../../Context/isAuthContext';

import logo from '../../assets/images/logo.png';
import LogoImage from '../common/Image';

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;
const Sidebar = ({ children }) => {
  const { pathname } = useLocation();
  const [, setIsAuth] = useAuth();

  const history = useHistory();
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsedValue) => setCollapsed(collapsedValue);
  const logoutFunction = async () => {
    await get('/api/v1/logout');
    setIsAuth(false);
    history.push('/login');
  };

  const sendToHome = () => {
    history.push('/');
  };

  return (
    <Layout className="page-layout">
      <Sider
        collapsible
        breakpoint="xl"
        collapsedWidth="80"
        collapsed={collapsed}
        onCollapse={onCollapse}
      >
        <div className={collapsed ? 'logo logo-hidden' : 'logo'}>
          <LogoImage
            src={logo}
            alt="Dental Clinic logo image show a tooth inside a heart"
            onClick={sendToHome}
            style={{ cursor: 'pointer' }}
          />
          <Title className="title-text" level={3}>
            Dental Clinic
          </Title>
        </div>
        <Menu
          className="menu-items"
          theme="dark"
          selectedKeys={[pathname]}
          mode="inline"
        >
          <Menu.Item
            className="menu-item"
            key="/dashboard"
            icon={<PieChartOutlined />}
          >
            <Link href="/dashboard">Today&apos;s Schedule </Link>
          </Menu.Item>
          <Menu.Item
            className="menu-item"
            key="/dashboard/calendar"
            icon={<DesktopOutlined />}
          >
            <Link href="/dashboard/calendar">Calendar </Link>
          </Menu.Item>
          <Menu.Item
            className="menu-item"
            key="/dashboard/patients"
            icon={<FileOutlined />}
          >
            <Link href="/dashboard/patients">Patients</Link>
          </Menu.Item>
        </Menu>
        <Menu.Divider />
        <Menu theme="dark">
          <Menu.Item
            onClick={logoutFunction}
            danger
            className="logout-item"
            icon={<LogoutOutlined />}
          >
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background">
          <nav className="header-navbar">
            <MenuFoldOutlined
              onClick={() => setCollapsed((x) => !x)}
              className="nave-icon-style-menu"
            />
            <HomeOutlined
              onClick={() => history.push('/')}
              className="nav-icon-style-home"
            />
          </nav>
        </Header>
        <Content className="site-layout-content">
          <div className="site-layout-content-body">{children}</div>
        </Content>
        <Footer className="site-layout-footer">
          Dental Clinic &copy;2021 Created by Dentoro
        </Footer>
      </Layout>
    </Layout>
  );
};

Sidebar.propTypes = {
  children: element.isRequired,
};

export default Sidebar;
