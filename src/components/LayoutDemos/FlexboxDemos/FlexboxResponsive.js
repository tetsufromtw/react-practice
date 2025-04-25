import React from 'react';
import TagDemo from '../../UI/TagDemo';

const FlexboxResponsive = () => {
  const code = `<div className="responsive-container">
  <div className="sidebar">サイドバー</div>
  <div className="content">メインコンテンツ</div>
</div>`;

  return (
    <section id="flexbox-responsive">
      <h2>レスポンシブレイアウト</h2>
      <TagDemo 
        title="レスポンシブ Flexbox レイアウト" 
        description="画面サイズに応じて変化するレイアウトを作成できます。"
        code={code}
      >
        <div className="responsive-container">
          <div className="sidebar">サイドバー</div>
          <div className="content">メインコンテンツ</div>
        </div>
      </TagDemo>
    </section>
  );
};

export default FlexboxResponsive;