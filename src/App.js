import React from 'react';
import { Header, Footer } from './components/Layout';
import { BasicTags, ListTags, FormTags, SectionTags } from './components/Demo';
import './styles/main.css';
import './styles/tags.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      
      <main>
        <div className="intro-section">
          <h2>React における JSX タグの表示</h2>
          <p>このページでは、React 開発でよく使用される JSX タグとその使い方を紹介しています。各例には実際の効果と対応するコードが含まれています。</p>
          <p>React の JSX 構文を使用すると、JavaScript 内で HTML に似たコードを書くことができますが、以下の点に注意してください：</p>
          <ul>
            <li>JSX では <code>class</code> 属性を <code>className</code> として記述する必要があります</li>
            <li>JSX では <code>for</code> 属性を <code>htmlFor</code> として記述する必要があります</li>
            <li>すべてのタグは閉じる必要があります（例：<code>&lt;img /&gt;</code>）</li>
            <li>波括弧 <code>{'{}'}</code> を使用して JavaScript 式を挿入できます</li>
          </ul>
        </div>
        
        <nav className="page-nav">
          <ul>
            <li><a href="#basic-tags">基本コンテナとテキストタグ</a></li>
            <li><a href="#list-tags">リストタグ</a></li>
            <li><a href="#form-tags">フォームタグ</a></li>
            <li><a href="#section-tags">セクションとセマンティックタグ</a></li>
          </ul>
        </nav>
        
        <BasicTags />
        <ListTags />
        <FormTags />
        <SectionTags />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;