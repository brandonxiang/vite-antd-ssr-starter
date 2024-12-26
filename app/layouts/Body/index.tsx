import React from 'react';
import { Layout, Menu } from 'antd';
import { getHeaderMenus } from '~/router';
const { Content, Header } = Layout;

export default function Body({ children }: { children: React.ReactNode }) {
  return (
    <Layout style={{ minHeight: '100vh' }}>

      <Header style={{ 
        display: 'flex', 
        alignItems: 'center', 
        backgroundColor: '#fff', 
        borderBottom: '1px solid rgba(5, 5, 5, 0.06)', 
        position: 'sticky', 
        top: 0,
        zIndex: 999
      }}>
        <div className="demo-logo" />
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['index']}
          items={getHeaderMenus()}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content>
        {children}
      </Content>
    </Layout>
  );
}