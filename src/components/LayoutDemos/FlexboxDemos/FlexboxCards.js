import React from 'react';
import TagDemo from '../../UI/TagDemo';

const FlexboxCards = () => {
  const code = `<div className="cards-container">
  <div className="card">カード 1</div>
  <div className="card">カード 2</div>
</div>`;

  return (
    <section id="flexbox-cards">
      <h2>Flexbox カード</h2>
      <TagDemo 
        title="Flexbox カードレイアウト" 
        description="Flexboxを使用して、レスポンシブなカードレイアウトを作成できます。"
        code={code}
      >
        <div className="cards-container">
          <div className="card">カード 1</div>
          <div className="card">カード 2</div>
        </div>
      </TagDemo>
    </section>
  );
};

export default FlexboxCards;