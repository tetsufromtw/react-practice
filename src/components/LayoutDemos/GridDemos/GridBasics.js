import React from 'react';
import TagDemo from '../../UI/TagDemo';

const GridBasics = () => {
  const code = `<div className="grid-container">
  <div className="grid-item">アイテム 1</div>
  <div className="grid-item">アイテム 2</div>
  <div className="grid-item">アイテム 3</div>
  <div className="grid-item">アイテム 4</div>
</div>`;

  return (
    <section id="grid-basics">
      <h2>Grid の基本</h2>
      <TagDemo 
        title="基本的な Grid レイアウト" 
        description="Grid は二次元のレイアウトモデルです。行と列の両方向に要素を配置します。"
        code={code}
      >
        <div className="grid-container">
          <div className="grid-item">アイテム 1</div>
          <div className="grid-item">アイテム 2</div>
          <div className="grid-item">アイテム 3</div>
          <div className="grid-item">アイテム 4</div>
        </div>
      </TagDemo>
    </section>
  );
};

export default GridBasics;