/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  DropdownItem,
  Navbar,
  NavbarCollapse,
  TextInput,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toogleTheme } from "../redux/theme/themeSlice";
import { signoutSuccess } from "../redux/user/userSlice";

function Header() {
  const dispatch = useDispatch();
  const path = useLocation().pathname;
  const { currentUserOfBloggingApp } = useSelector(
    (state) => state.userOfBloggingApp
  );
  const { theme } = useSelector((state) => state.theme);

  const handleSignOut = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Navbar className="border-b-2 fixed top-0 mb-10 z-30 w-full shadow-md dark:bg-slate-950">
      <Link
        to="/"
        className=" self-center whitespace-nowrap text-sm sm:text-md bg-neutral-900 text-neutral-200 rounded-md px-5 py-1 font-semibold dark:text-white"
      >
        {/* <img src="/logo.jpg" className="w-36 h-auto mix-blend-multiply" alt="" /> */}
        कथाकोष
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search.."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>

      <Button className="w-12 h-10 color='gray' lg:hidden">
        <AiOutlineSearch />
      </Button>
      <NavbarCollapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/dashboard"} as={"div"}>
          <Link to="/dashboard">Dashboard</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/posts"} as={"div"}>
          <Link to="/posts">Posts</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/blogs"} as={"div"}>
          <Link to="/blogs">Blogs</Link>
        </Navbar.Link>
      </NavbarCollapse>
      <div className="flex flex-row gap-2 mf:order-2">
        <Button
          className="hidden sm:inline"
          color="gray"
          onClick={() => dispatch(toogleTheme())}
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </Button>
        {currentUserOfBloggingApp ? (
          <Dropdown
            arrowIcon="false"
            inline
            label={
              <Avatar
                alt="user"
                img={currentUserOfBloggingApp.profilePic}
                className="object-cover"
                rounded
                size="sm"
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">
                @{currentUserOfBloggingApp.username}
              </span>
              <span className="block text-md">
                {currentUserOfBloggingApp.email}
              </span>
              <Link to="/dashboard?tab=profile">
                <DropdownItem>Profile</DropdownItem>
              </Link>
              <DropdownDivider />

              <DropdownItem onClick={handleSignOut}>Sign Out</DropdownItem>
            </Dropdown.Header>
          </Dropdown>
        ) : (
          <Link to="/login">
            <Button gradientDuoTone="purpleToBlue" outline>
              Login
            </Button>
          </Link>
        )}

        <NavbarCollapse />
      </div>
    </Navbar>
  );
}

export default Header;
