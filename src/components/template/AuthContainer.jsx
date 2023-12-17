import React from "react";

const AuthContainer = ({ img = "", children }) => {
  return (
    <div className="auth-container container">
        <div className="auth-inner">
          <div className="auth-cover-img">
            <img src={img} alt="auth cover background" />
          </div>
          <div className="auth-form">{children}</div>
        </div>
    </div>
  );
};

export default AuthContainer;
