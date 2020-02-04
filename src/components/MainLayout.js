import React from 'react';
import TopNavigation from '../admin/components/topNavigation';
const MainLayout = (props) => (
    <div>
        <TopNavigation/>
        {props.children}
    </div>
)

export default MainLayout;