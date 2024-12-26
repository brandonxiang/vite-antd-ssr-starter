import { Outlet } from 'react-router';

export default function BlogDetailLayout() {
    return (
        <div className='blog-content markdown-body' style={{ padding: 30 }}>
            <Outlet />
        </div>
    );
}