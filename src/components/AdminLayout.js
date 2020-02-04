import React from 'react';
import SideNavigation from '../admin/components/sideNavigation';
import TopNavigation from '../admin/components/topNavigation';
const AdminLayout = (props) => (
    <div>
        <TopNavigation/>
        <SideNavigation/>
        {props.children}
    </div>
)

export default AdminLayout;