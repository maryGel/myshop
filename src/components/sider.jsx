import React from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Layout, Menu, ConfigProvider } from 'antd';
import './sider.css'

const { Sider: AntSider } = Layout;

const items = [
  { key: '1', icon: <DesktopOutlined/>, label: 'Home' },
  { key: '2', icon: <AppstoreOutlined />, label: 'Promos' },
  { key: '3', icon: <ContainerOutlined />, label: 'Explore' },
  {
    key: 'sub1',
    label: 'Categories',
    icon: <PieChartOutlined />,
    children: [
      { key: '5', label: 'Fashion and Apparel' },
      { key: '6', label: 'Beauty and personal Care' },
      { key: '7', label: 'Electronics' },
      { key: '8', label: 'Household essentials' },
      { key: '9', label: 'Others' },
    ],
  },
  {
    key: 'sub2',
    label: 'Contact MyShop',
    icon: <MailOutlined />,
    children: [
      { key: '10', label: 'Send Email' },
      { key: '11', label: 'Contact Details' },
      {
        key: 'sub3',
        label: 'Help',
        children: [
          { key: '12', label: 'Chat Support' },
          { key: '13', label: 'FAQs' },
        ],
      },
    ],
  },
];


function Sider( { collapsed, onMenuClick } ) {

  return (

    <>
      <ConfigProvider
      theme={{
        components: {
          Menu: {
            iconSize  : 20,
            collapsedIconSize: 20,
          },
        },
      }}
      >
      

      <div className = "sider-container absolute left-0" >

          <Menu className = "sidebar-menu left-0"

            style={{ width: collapsed ? 80 : 270 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme= 'light'
            inlineCollapsed={collapsed}
            items={items}
            onClick={onMenuClick}
          />
        </div>
      </ConfigProvider>
    </>
  )
}

export default Sider;