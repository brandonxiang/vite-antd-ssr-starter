import { getRoutes } from './router';

const res = getRoutes();
// console.log(JSON.stringify(res, null, 2));

// // const res = [
// //   index('pages/Home/index.tsx'),
// //   layout('pages/documentation/layout.tsx', [
// //     route('documentation', 'pages/documentation/index.mdx'),
// //     route('documentation/about', 'pages/documentation/about1.mdx'),
// //   ]),
// //   route('blog', 'pages/blog/index.tsx'),
// // ];


export default res;