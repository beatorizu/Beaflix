import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';

function DefaultPage({ children }) {
  return (
    <div>
      <Menu />
      {children}
      <Footer />
    </div>
  );
}

export default DefaultPage;
