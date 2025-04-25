import React from 'react';
import { TagDemo } from '../UI';

const ListTags = () => {
  return (
    <section className="demo-section" id="list-tags">
      <h2>リストタグ</h2>
      
      <TagDemo 
        title="<ul> と <li> - 順序なしリスト"
        description="ul 要素は順序なしリストを作成し、li 要素はリスト項目を定義します"
        code={`<ul>
  <li>りんご</li>
  <li>バナナ</li>
  <li>オレンジ</li>
</ul>`}
      >
        <ul>
          <li>りんご</li>
          <li>バナナ</li>
          <li>オレンジ</li>
        </ul>
      </TagDemo>
      
      <TagDemo 
        title="<ol> と <li> - 順序付きリスト"
        description="ol 要素は順序付きリストを作成し、li 要素はリスト項目を定義します"
        code={`<ol>
  <li>ステップ1：材料を準備する</li>
  <li>ステップ2：材料を混ぜる</li>
  <li>ステップ3：オーブンで焼く</li>
</ol>`}
      >
        <ol>
          <li>ステップ1：材料を準備する</li>
          <li>ステップ2：材料を混ぜる</li>
          <li>ステップ3：オーブンで焼く</li>
        </ol>
      </TagDemo>
    </section>
  );
};

export default ListTags;