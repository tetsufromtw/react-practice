import React from 'react';
import { Header, Footer } from '../components/Layout';
import { GridBasics, GridGallery } from '../components/LayoutDemos/GridDemos';
import '../styles/grid.css';

const GridPage = () => {
  return (
    <div className="app-container">
      <Header />
      
      <main>
        <div className="intro-section">
          <h2>Grid レイアウトデモ</h2>
          <p>このページでは、CSSのGridレイアウトモデルの使用例を紹介します。Gridは二次元のレイアウトモデルで、行と列の両方向に要素を配置します。</p>
        </div>
        
        <nav className="page-nav">
          <ul>
            <li><a href="#grid-basics">Grid の基本</a></li>
          </ul>
        </nav>
        
        <GridBasics />
      </main>
      
      <Footer />
    </div>
  );
};

export default GridPage;