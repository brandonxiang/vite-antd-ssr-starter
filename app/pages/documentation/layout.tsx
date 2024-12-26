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
        label: 'tutorial',
        type: 'group',
        children: [
            {
                key: 'tutorial1',
                label: <NavLink to={'/documentation/tutorial1'}>tutorial1</NavLink>,
            },
            {
                key: 'tutorial2',
                label: <NavLink to={'/documentation/tutorial2'}>tutorial2</NavLink>,
            },
        ],
    },
    {

        key: 'about',
        label: 'About me',
        type: 'group',
        children: [
            {
                key: 'about1',
                label: <NavLink to={'/documentation/about1'}>About me</NavLink>,
            },
            {
                key: 'about2',
                label: <NavLink to={'/documentation/about2'}>About me1</NavLink>,
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
            <Sider width={250} style={{ background: colorBgContainer, height: 'calc(100vh - 65px)', borderRight: '1px solid #e8e8e8' }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['index']}
                    style={{ height: '100%', borderRight: 0, padding: 5, paddingTop: 20 }}
                    items={DOCUMENTATION_CONFIG}
                />
            </Sider>
            <Content style={{ padding: 20, background: colorBgContainer }} className='markdown-body'>
                <Outlet />
            </Content>
        </Layout>
    );
}   