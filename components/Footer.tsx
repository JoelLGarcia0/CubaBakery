import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-darkGrey py-4 relative z-20 block">
      <div className="flex items-center justify-center space-x-2">
        <p className="font-titleFont text-offWhite text-sm text-center">
          © Copyright 2025 Cuba Bakery, Inc. All Rights Reserved. This website
          was created by{" "}
          <a className="font-semibold" href="https://restweb.dev">
            RESTWeb.dev
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
