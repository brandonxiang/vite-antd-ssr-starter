import { FileTextOutlined, FireOutlined, HomeOutlined } from '@ant-design/icons';
import { MenuType } from '~/@types';


const Menus: MenuType[] = [
  {
    routePath: 'index',
    routeFile: 'pages/homepage/index.tsx',
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
        routePath: 'documentation/how-to-use-documentation-mode',
        routeFile: 'pages/documentation/how-to-use-documentation-mode.mdx',
      },
      {
        routePath: 'documentation/quick-start',
        routeFile: 'pages/documentation/quick-start.mdx',
      },
      {
        routePath: 'documentation/future-plan',
        routeFile: 'pages/documentation/future-plan.mdx',
      },
      {
        routePath: 'documentation/known-issue',
        routeFile: 'pages/documentation/known-issue.mdx',
      }
    ]
  },
  {
    routePath: 'blog',
    routeFile: 'pages/blog/index.tsx',
    title: 'Blog',
    icon: <FireOutlined />,
  },
  {
   // use same layout
   layoutPath: 'pages/blog/detail-layout.tsx', 
   noMenu: true,
   subMenu: [
    {
      routePath: 'blog/release-1',
      routeFile: 'pages/blog/blog-release-1.mdx',
      noMenu: true,
    },
    {
      routePath: 'blog/release-2',
      routeFile: 'pages/blog/blog-release-2.mdx',
      noMenu: true,
    }
   ]
  }
  
];

export default Menus;
