import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

const NavbarTop = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="custom-nav mb-3" expand="md">
        <NavbarBrand className="ml-5" href="/">
            <img className="logo-nav" src="http://www.clixmarketing.com/blog/wp-content/uploads/2013/06/linkedin-icon.png" alt="linkedin icon" width="34px"/>
        </NavbarBrand>
              <span className="d-inline">
                  <i className="fas fa-search cust-iconSearch" aria-hidden="true"></i>
                  </span>
              <span className="d-inline">
                  <input className="form-control " id="cust-search" type="text" placeholder="Search" aria-label="Search"></input>
                  </span>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className=" text-center cust-navElement" navbar>
            <NavItem>
              <NavLink className="mt-2" href="/components/">
              <i className="fas fa-home fa-lg d-block"></i>
                  Home
                  </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="mt-2 ml-4" href="https://github.com/reactstrap/reactstrap">
              <i class="fas fa-user-friends fa-lg d-block"></i>
                  Network
                  </NavLink>     
            </NavItem>
            <NavItem>
              <NavLink className="mt-2 ml-4" href="https://github.com/reactstrap/reactstrap">
              <i class="fas fa-briefcase fa-lg d-block"></i>
                  Job
                  </NavLink>     
            </NavItem>
            <NavItem>
              <NavLink className="mt-2 ml-4" href="https://github.com/reactstrap/reactstrap">
              <i class="fas fa-comment-alt fa-lg d-block"></i>
                 Messagistic
                  </NavLink>     
            </NavItem>
            <NavItem>
              <NavLink className="mt-2 ml-4"href="https://github.com/reactstrap/reactstrap">
              <i class="fas fa-bell fa-lg d-block"></i>
                 Notifications
                  </NavLink>     
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="ml-4">
                  <img className="d-block cust-imgNav" src="https://media.licdn.com/dms/image/C5603AQGzwg5cruG4ew/profile-displayphoto-shrink_200_200/0?e=1576713600&v=beta&t=aAZ-ValpHxI-ITVkBFrs5GWrk8Tt1iwhVkzPgA4iZ1w" width="23px"/>
                Me
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <div className="divisor"></div>
          <Nav className="text-center ml-3 mt-2" navbar>
              <NavItem>
                  <NavLink>
                  <i class="fas fa-th fa-lg d-block"></i>
                      Products
                  </NavLink>
              </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarTop;