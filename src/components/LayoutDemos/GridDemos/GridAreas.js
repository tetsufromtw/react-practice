import React from 'react';
import TagDemo from '../../UI/TagDemo';

const GridAreas = () => {
  const code = `<div className="grid-areas">
  <header className="area-header">ヘッダー</header>
  <main className="area-main">メイン</main>
</div>`;

  return (
    <section id="grid-areas">
      <h2>グリッドエリア</h2>
      <TagDemo 
        title="グリッドテンプレートエリア" 
        description="grid-template-areasを使用したレイアウト"
        code={code}
      >
        <div className="grid-areas">
          <header className="area-header">ヘッダー</header>
          <main className="area-main">メイン</main>
        </div>
      </TagDemo>
    </section>
  );
};

export default GridAreas;