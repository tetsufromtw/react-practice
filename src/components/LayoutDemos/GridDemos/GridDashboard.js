import React from 'react';
import TagDemo from '../../UI/TagDemo';

const GridDashboard = () => {
  const code = `<div className="dashboard-grid">
  <div className="dashboard-item header">ヘッダー</div>
  <div className="dashboard-item main">メイン</div>
</div>`;

  return (
    <section id="grid-dashboard">
      <h2>ダッシュボードレイアウト</h2>
      <TagDemo 
        title="ダッシュボードグリッド" 
        description="CSSグリッドを使用してダッシュボードレイアウトを作成します。"
        code={code}
      >
        <div className="dashboard-grid">
          <div className="dashboard-item header">ヘッダー</div>
          <div className="dashboard-item main">メイン</div>
        </div>
      </TagDemo>
    </section>
  );
};

export default GridDashboard;