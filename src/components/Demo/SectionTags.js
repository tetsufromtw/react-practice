import React from 'react';
import { TagDemo } from '../UI';

const SectionTags = () => {
  return (
    <section className="demo-section" id="section-tags">
      <h2>セクションとセマンティックタグ</h2>
      
      <TagDemo 
        title="<section> - セクション要素"
        description="section 要素はドキュメントの独立した部分を表します"
        code={`<section className="content-section">
  <h2>セクションタイトル</h2>
  <p>これは独立したセクションの内容です。section タグはドキュメント構造をよりセマンティックにします。</p>
</section>`}
      >
        <section className="content-section">
          <h2>セクションタイトル</h2>
          <p>これは独立したセクションの内容です。section タグはドキュメント構造をよりセマンティックにします。</p>
        </section>
      </TagDemo>
      
      <TagDemo 
        title="<article> - 独立したコンテンツ"
        description="article 要素は独立したコンテンツ部分を表します（例: 記事）"
        code={`<article className="blog-post">
  <h2>記事タイトル</h2>
  <p>公開日: 2023年4月15日</p>
  <p>これは記事の内容です。article タグはブログ記事やニュース記事など、独立したコンテンツユニットを表すのに適しています。</p>
</article>`}
      >
        <article className="blog-post">
          <h2>記事タイトル</h2>
          <p>公開日: 2023年4月15日</p>
          <p>これは記事の内容です。article タグはブログ記事やニュース記事など、独立したコンテンツユニットを表すのに適しています。</p>
        </article>
      </TagDemo>
      
      <TagDemo 
        title="<header> - ヘッダー"
        description="header 要素はページまたはセクションのヘッダーを定義します"
        code={`<header className="page-header">
  <h1>ウェブサイトタイトル</h1>
  <nav>
    <a href="#home">ホーム</a> | 
    <a href="#about">概要</a> | 
    <a href="#contact">お問い合わせ</a>
  </nav>
</header>`}
      >
        <header className="page-header">
          <h1>ウェブサイトタイトル</h1>
          <nav>
            <a href="#home">ホーム</a> | 
            <a href="#about">概要</a> | 
            <a href="#contact">お問い合わせ</a>
          </nav>
        </header>
      </TagDemo>
      
      <TagDemo 
        title="<footer> - フッター"
        description="footer 要素はページまたはセクションのフッターを定義します"
        code={`<footer className="page-footer">
  <p>&copy; 2023 React JSX タグの表示</p>
  <p>
    <a href="#terms">利用規約</a> | 
    <a href="#privacy">プライバシーポリシー</a>
  </p>
</footer>`}
      >
        <footer className="page-footer">
          <p>&copy; 2023 React JSX タグの表示</p>
          <p>
            <a href="#terms">利用規約</a> | 
            <a href="#privacy">プライバシーポリシー</a>
          </p>
        </footer>
      </TagDemo>
      
      <TagDemo 
        title="<nav> - ナビゲーション"
        description="nav 要素はウェブサイトのナビゲーションエリアを定義します"
        code={`<nav className="main-nav">
  <ul>
    <li><a href="#home">ホーム</a></li>
    <li><a href="#products">製品</a></li>
    <li><a href="#services">サービス</a></li>
    <li><a href="#about">概要</a></li>
    <li><a href="#contact">お問い合わせ</a></li>
  </ul>
</nav>`}
      >
        <nav className="main-nav">
          <ul>
            <li><a href="#home">ホーム</a></li>
            <li><a href="#products">製品</a></li>
            <li><a href="#services">サービス</a></li>
            <li><a href="#about">概要</a></li>
            <li><a href="#contact">お問い合わせ</a></li>
          </ul>
        </nav>
      </TagDemo>
    </section>
  );
};

export default SectionTags;