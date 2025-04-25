import React from 'react';
import { Header, Footer } from '../components/Layout';
import { FlexboxBasics, FlexboxNavbar, FlexboxCards } from '../components/LayoutDemos/FlexboxDemos';
import '../styles/flexbox.css';

const FlexboxPage = () => {
  return (
    <div className="app-container">
      <Header />
      
      <main>
        <div className="intro-section">
          <h2>Flexbox レイアウトデモ</h2>
          <p>このページでは、CSSのFlexboxレイアウトモデルの使用例を紹介します。Flexboxは一次元のレイアウトモデルで、行または列の方向に要素を配置します。</p>
        </div>
        
        <nav className="page-nav">
          <ul>
            <li><a href="#flexbox-basics">Flexbox の基本</a></li>
          </ul>
        </nav>
        
        <FlexboxBasics />
      </main>
      
      <Footer />
    </div>
  );
};

export default FlexboxPage;