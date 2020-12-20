import React from 'react';

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <h1>Layout</h1>
      { children }
    </>
  );
}

export default Layout;