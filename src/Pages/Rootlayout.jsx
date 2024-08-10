import React from 'react';
import { Outlet } from 'react-router-dom';
import Logo from './Logo.jsx'

export default function Rootlayout() {
  return (
    <div>
      <Logo/>
      <main>
        <Outlet />
      </main>
    </div>
  );
};