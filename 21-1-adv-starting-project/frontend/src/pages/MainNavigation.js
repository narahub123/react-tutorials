import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <>
      <p>
        <span className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Home
          </NavLink>
        </span>
        <span className="nav-item">
          <NavLink
            to="/events"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Events
          </NavLink>
        </span>
        <span className="nav-item">
          <NavLink
            to="/events/:id"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Event Detail
          </NavLink>
        </span>
        <span className="nav-item">
          <NavLink
            to="/events/new"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            New Event
          </NavLink>
        </span>
        <span className="nav-item">
          <NavLink
            to="/events/:id/edit"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Edit Event
          </NavLink>
        </span>
      </p>
      <Outlet />
    </>
  );
};

export default MainNavigation;
