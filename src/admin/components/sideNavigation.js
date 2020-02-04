import React from 'react';

import { MDBListGroup, MDBListGroupItem, MDBIcon,MDBNavLink } from 'mdbreact';
import { Link,NavLink } from 'react-router-dom';

const SideNavigation = () => {
    return (
        <div className="sidebar-fixed position-fixed">
            <a href="#!" className="logo-wrapper waves-effect">
              
            </a>
            <MDBListGroup className="list-group-flush">
                <NavLink exact={true} to="/admin" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="chart-pie" className="mr-3"/>
                        Senaryo
                       
                    </MDBListGroupItem>
                </NavLink>

                <NavLink exact={true} to="/admin/bilgi" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="chart-pie" className="mr-3"/>
                        Bilgi
                        
                    </MDBListGroupItem>
                </NavLink>
              
              
            </MDBListGroup>
        </div>
    );
}

export default SideNavigation;