import { Outlet } from 'react-router';
import { Layout, Menu, MenuProps, theme } from 'antd';
import { NavLink } from 'react-router';

const { Sider, Content } = Layout;

const DOCUMENTATION_CONFIG: MenuProps['items'] = [
    {
        key: 'index',
        label: <NavLink to={'/documentation'}>Introduction</NavLink>,
    }, 
    {
        key: 'tutorial',
        label: 'Tutorial',
        type: 'group',
        children: [
            {
                key: 'How to use Documentation Mode',
                label: <NavLink to={'/documentation/how-to-use-documentation-mode'}>How to use doc mode</NavLink>,
            },
            {
                key: 'Quick Start',
                label: <NavLink to={'/documentation/quick-start'}>Quick Start</NavLink>,
            },
        ],
    },
    {

        key: 'about',
        label: 'Future Plan',
        type: 'group',
        children: [
            {
                key: 'Future Plan',
                label: <NavLink to={'/documentation/future-plan'}>Future Plan</NavLink>,
            },
            {
                key: 'Known Issue',
                label: <NavLink to={'/documentation/known-issue'}>Known Issue</NavLink>,
            },
        ],

    }
];

export default function DocumentationLayout() {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>
            <Sider width={250} style={{ background: colorBgContainer, height: 'calc(100vh - 65px)', borderRight: '1px solid #e8e8e8', overflow: 'auto' }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['index']}
                    style={{ height: '100%', borderRight: 0, padding: 5, paddingTop: 20 }}
                    items={DOCUMENTATION_CONFIG}
                />
            </Sider>
            <Content style={{ padding: 20,  height: 'calc(100vh - 65px)', background: colorBgContainer, overflow: 'auto' }} className='markdown-body'>
                <Outlet />
            </Content>
        </Layout>
    );
}   