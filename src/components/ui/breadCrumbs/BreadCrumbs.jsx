import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./BreadCrumbs.scss";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav aria-label="breadcrumb" className="breadcrumb">
      <div className="container">
        <ol>
          <li>
            <Link to="/">Home</Link>
            {pathnames.length > 0 && <span className="separator">›</span>}
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;

            const displayName = name.charAt(0).toUpperCase() + name.slice(1);

            return (
              <li key={routeTo}>
                {isLast ? (
                  <span className="current">{displayName}</span>
                ) : (
                  <>
                    <Link to={routeTo}>{displayName}</Link>
                    <span className="separator">›</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
