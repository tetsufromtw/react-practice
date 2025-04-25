import React from 'react';
import TagDemo from '../../UI/TagDemo';

const FlexboxNavbar = () => {
  const code = `<nav className="flex-navbar">
  <div className="logo">ロゴ</div>
  <div className="nav-links">
    <a href="#" className="nav-item">ホーム</a>
    <a href="#" className="nav-item">サービス</a>
  </div>
</nav>`;

  return (
    <section id="flexbox-navbar">
      <h2>Flexbox ナビゲーション</h2>
      <TagDemo 
        title="Flexbox ナビバー" 
        description="Flexboxを使用してナビゲーションバーを作成する一般的な方法です。"
        code={code}
      >
        <nav className="flex-navbar">
          <div className="logo">ロゴ</div>
          <div className="nav-links">
            <a href="#" className="nav-item">ホーム</a>
            <a href="#" className="nav-item">サービス</a>
          </div>
        </nav>
      </TagDemo>
    </section>
  );
};

export default FlexboxNavbar;