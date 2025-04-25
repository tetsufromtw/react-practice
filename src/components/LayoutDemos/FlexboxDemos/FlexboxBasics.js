import React from 'react';
import TagDemo from '../../UI/TagDemo';

const FlexboxBasics = () => {
  const code = `<div className="flexbox-container">
  <div className="flex-item">アイテム 1</div>
  <div className="flex-item">アイテム 2</div>
  <div className="flex-item">アイテム 3</div>
</div>`;

  return (
    <section id="flexbox-basics">
      <h2>Flexbox の基本</h2>
      <TagDemo 
        title="基本的な Flexbox レイアウト" 
        description="Flexbox は一次元のレイアウトモデルです。行または列の方向に要素を配置します。"
        code={code}
      >
        <div className="flexbox-container">
          <div className="flex-item">アイテム 1</div>
          <div className="flex-item">アイテム 2</div>
          <div className="flex-item">アイテム 3</div>
        </div>
      </TagDemo>
    </section>
  );
};

export default FlexboxBasics;