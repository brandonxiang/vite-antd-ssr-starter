import React from 'react';
import { FileTextOutlined, FireOutlined, HomeOutlined } from '@ant-design/icons';
import { MenuType } from '~/@types';


const Menus: MenuType[] = [
  {
    routePath: 'index',
    routeFile: 'pages/Home/index.tsx',
    title: 'Home',
    icon: <HomeOutlined />,
  },
  {
    // use same layout
    routePath: 'documentation',
    layoutPath: 'pages/documentation/layout.tsx',
    title: 'Documentation',
    icon: <FileTextOutlined />,
    subMenu: [
      {
        routePath: 'documentation',
        routeFile: 'pages/documentation/index.mdx',
      },
      {
        routePath: 'documentation/about1',
        routeFile: 'pages/documentation/about1.mdx',
      },
      {
        routePath: 'documentation/about2',
        routeFile: 'pages/documentation/about2.mdx',
      },
      {
        routePath: 'documentation/tutorial1',
        routeFile: 'pages/documentation/tutorial1.mdx',
      },
      {
        routePath: 'documentation/tutorial2',
        routeFile: 'pages/documentation/tutorial2.mdx',
      }
    ]
  },
  {
    routePath: 'blog',
    routeFile: 'pages/blog/index.tsx',
    title: 'Blog',
    icon: <FireOutlined />,
    // subMenu: [
    //   {
    //     key: 'blog',
    //     filePath: 'pages/blog/index.tsx',
    //   },
    //   {
    //     key: 'documentation/about1',
    //     filePath: 'pages/documentation/about1.mdx',
    //   },
    //   {
    //     key: 'documentation/about2',
    //     filePath: 'pages/documentation/about2.mdx',
    //   },
    //   {
    //     key: 'documentation/tutorial1',
    //     filePath: 'pages/documentation/tutorial1.mdx',
    //   },
    //   {
    //     key: 'documentation/tutorial2',
    //     filePath: 'pages/documentation/tutorial2.mdx',
    //   }
    // ]
  },
];

export default Menus;
