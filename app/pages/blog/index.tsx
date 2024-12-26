
import React from 'react';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space } from 'antd';
import { NavLink } from 'react-router';

const BLOG_CONFIG = [
  {
    href: '/blog/release-2',
    title: '2024-12-26 How to use Blog Mode',
    avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${2}`,
    description:
      'Blog 2 new release for 1.0.1.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    star: '156',
    like: '90',
    message: '2'
  },
  {
    href: '/blog/release-1',
    title: '2024-12-25 new release for 1.0.0',
    avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${1}`,
    description:
      'Blog 1 new release for 1.0.0.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    star: '120',
    like: '180',
    message: '2'
  }
  
];

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const App: React.FC = () => (
  <div className="blog-content">
    <List
      itemLayout="vertical"
      size="large"
      dataSource={BLOG_CONFIG}
      renderItem={(item) => (
        <List.Item
          key={item.title}
          actions={[
            <IconText icon={StarOutlined} text={item.star} key="list-vertical-star-o" />,
            <IconText icon={LikeOutlined} text={item.like} key="list-vertical-like-o" />,
            <IconText icon={MessageOutlined} text={item.message} key="list-vertical-message" />,
          ]}
          extra={
            <img
              width={272}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          }
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<NavLink to={item.href}>{item.title}</NavLink>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
  </div>
);

export default App;