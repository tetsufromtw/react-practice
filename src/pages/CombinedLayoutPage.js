import React from 'react';
import { Header, Footer } from '../components/Layout';
import { FlexboxNavbar } from '../components/LayoutDemos/FlexboxDemos';
import { GridDashboard } from '../components/LayoutDemos/GridDemos';
import '../styles/flexbox.css';
import '../styles/grid.css';

const CombinedLayoutPage = () => {
  return (
    <div className="app-container">
      <Header />
      
      <main>
        <div className="intro-section">
          <h2>組み合わせレイアウト</h2>
          <p>このページでは、FlexboxとGridを組み合わせたレイアウトを紹介します。</p>
        </div>
        
        <nav className="page-nav">
          <ul>
            <li><a href="#combined-layout">組み合わせレイアウト</a></li>
          </ul>
        </nav>
        
        <section id="combined-layout">
          <FlexboxNavbar />
          <GridDashboard />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CombinedLayoutPage;