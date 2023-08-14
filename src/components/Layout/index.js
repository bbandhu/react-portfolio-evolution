import './index.scss';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='App'>
            <Sidebar />
            
            <div className='code-editor-theme'>
                <span className='tags'>&lt;html&gt;</span>

                <div className='indent-1'>
                    <span className='tags'>&lt;body&gt;</span>

                    <div className='indent-2'>
                        <Outlet />
                    </div>

                    <span className='tags'>&lt;/body&gt;</span>
                </div>

                <span className='tags'>&lt;/html&gt;</span>
            </div>
        </div>
    );
}

export default Layout;