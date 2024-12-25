import { Outlet } from 'react-router';
import { Layout, Menu, MenuProps, theme } from 'antd';

const { Sider, Content } = Layout;

const items2: MenuProps['items'] = [
    {
        key: 'index',
        label: 'Introduction',
    }, 
    {
        key: 'tutorial',
        label: '教程',
        type: 'group',
        children: [
            {
                key: 'tutorial1',
                label: '教程1',
            },
            {
                key: 'tutorial2',
                label: '教程2',
            },
        ],
    },
    {

        key: 'about',
        label: '关于我',
        type: 'group',
        children: [
            {
                key: 'about1',
                label: 'About me',
            },
            {
                key: 'about2',
                label: 'About me1',
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
                    items={items2}
                />
            </Sider>
            <Content style={{ padding: 20, background: colorBgContainer }}>
                <Outlet />
            </Content>
        </Layout>
    );
}   