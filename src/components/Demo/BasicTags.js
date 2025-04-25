import React from 'react';
import { TagDemo } from '../UI';

const BasicTags = () => {
  return (
    <section className="demo-section" id="basic-tags">
      <h2>基本コンテナとテキストタグ</h2>
      
      <TagDemo 
        title="<div> - ブロックコンテナ"
        description="div は最もよく使われるブロックレベルのコンテナ要素で、グループ化やレイアウトに使用されます"
        code={`<div className="container">
  これはブロックレベルのコンテナです
</div>`}
      >
        <div className="container">
          これはブロックレベルのコンテナです
        </div>
      </TagDemo>
      
      <TagDemo 
        title="<span> - インライン要素"
        description="span はインライン要素で、改行せずにテキストをマークするために使用されます"
        code={`<p>これは段落です。その中で<span className="highlight">このテキスト</span>は span 要素で特別にマークされています</p>`}
      >
        <p>これは段落です。その中で<span className="highlight">このテキスト</span>は span 要素で特別にマークされています</p>
      </TagDemo>
      
      <TagDemo 
        title="<p> - 段落"
        description="p 要素はテキスト段落を表示するために使用されます"
        code={`<p>これは最初の段落です。</p>
<p>これは2番目の段落です。</p>`}
      >
        <p>これは最初の段落です。</p>
        <p>これは2番目の段落です。</p>
      </TagDemo>
      
      <TagDemo 
        title="<h1> から <h6> - 見出し"
        description="h1 から h6 要素は異なるレベルの見出しを定義します"
        code={`<h1>これは h1 見出しです</h1>
<h2>これは h2 見出しです</h2>
<h3>これは h3 見出しです</h3>
<h4>これは h4 見出しです</h4>
<h5>これは h5 見出しです</h5>
<h6>これは h6 見出しです</h6>`}
      >
        <div className="headings-demo">
          <h1>これは h1 見出しです</h1>
          <h2>これは h2 見出しです</h2>
          <h3>これは h3 見出しです</h3>
          <h4>これは h4 見出しです</h4>
          <h5>これは h5 見出しです</h5>
          <h6>これは h6 見出しです</h6>
        </div>
      </TagDemo>
      
      <TagDemo 
        title="<a> - ハイパーリンク"
        description="a 要素はハイパーリンクを作成するために使用されます"
        code={`<a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
  React 公式サイト
</a>`}
      >
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          React 公式サイト
        </a>
      </TagDemo>
      
      <TagDemo 
        title="<img> - 画像"
        description="img 要素は画像を表示するために使用され、src と alt 属性が必須です"
        code={`<img 
  src="https://picsum.photos/200/100" 
  alt="サンプル画像" 
  width="200" 
  height="100" 
/>`}
      >
        <img 
          src="https://picsum.photos/200/100" 
          alt="サンプル画像" 
          width="200" 
          height="100" 
        />
      </TagDemo>
    </section>
  );
};

export default BasicTags;