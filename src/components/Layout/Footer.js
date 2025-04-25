import React from 'react';

const Footer = () => {
  return (
    <footer className="app-footer">
      <p>React JSX タグの表示 &copy; {new Date().getFullYear()}</p>
      <p>このプロジェクトでは、Reactアプリケーションでよく使われるJSXタグを紹介しています</p>
    </footer>
  );
};

export default Footer;