import React, { useState } from 'react';
import { TagDemo } from '../UI';

const FormTags = () => {
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  
  return (
    <section className="demo-section" id="form-tags">
      <h2>フォームタグ</h2>
      
      <TagDemo 
        title="<form> - フォームコンテナ"
        description="form 要素はフォームのコンテナで、ユーザー入力を収集します"
        code={`<form onSubmit={(e) => {
  e.preventDefault();
  alert('フォームが送信されました');
}}>
  <label htmlFor="name">名前：</label>
  <input type="text" id="name" />
  <button type="submit">送信</button>
</form>`}
      >
        <form onSubmit={(e) => {
          e.preventDefault();
          alert('フォームが送信されました');
        }}>
          <label htmlFor="name">名前：</label>
          <input type="text" id="name" />
          <button type="submit">送信</button>
        </form>
      </TagDemo>
      
      <TagDemo 
        title="<input> - 入力フィールド"
        description="input 要素はユーザー入力を受け取るために使用され、さまざまなタイプがあります"
        code={`<div>
  <div className="input-group">
    <label htmlFor="text-input">テキスト入力：</label>
    <input 
      id="text-input" 
      type="text" 
      value={inputValue} 
      onChange={(e) => setInputValue(e.target.value)} 
      placeholder="テキストを入力してください" 
    />
    <span>入力されたテキスト：{inputValue}</span>
  </div>
  
  <div className="input-group">
    <label htmlFor="checkbox-input">チェックボックス：</label>
    <input type="checkbox" id="checkbox-input" />
  </div>
  
  <div className="input-group">
    <label htmlFor="radio-input1">ラジオボタン：</label>
    <input type="radio" id="radio-input1" name="radioGroup" value="オプション1" />
    <label htmlFor="radio-input1">オプション1</label>
    <input type="radio" id="radio-input2" name="radioGroup" value="オプション2" />
    <label htmlFor="radio-input2">オプション2</label>
  </div>
</div>`}
      >
        <div>
          <div className="input-group">
            <label htmlFor="text-input">テキスト入力：</label>
            <input 
              id="text-input" 
              type="text" 
              value={inputValue} 
              onChange={(e) => setInputValue(e.target.value)} 
              placeholder="テキストを入力してください" 
            />
            <span>入力されたテキスト：{inputValue}</span>
          </div>
          
          <div className="input-group">
            <label htmlFor="checkbox-input">チェックボックス：</label>
            <input type="checkbox" id="checkbox-input" />
          </div>
          
          <div className="input-group">
            <label htmlFor="radio-input1">ラジオボタン：</label>
            <input type="radio" id="radio-input1" name="radioGroup" value="オプション1" />
            <label htmlFor="radio-input1">オプション1</label>
            <input type="radio" id="radio-input2" name="radioGroup" value="オプション2" />
            <label htmlFor="radio-input2">オプション2</label>
          </div>
        </div>
      </TagDemo>
      
      <TagDemo 
        title="<button> - ボタン"
        description="button 要素はクリック可能なボタンを作成します"
        code={`<div>
  <button onClick={() => alert('ボタンがクリックされました')}>
    クリックしてください
  </button>
  
  <button disabled>
    無効なボタン
  </button>
</div>`}
      >
        <div>
          <button onClick={() => alert('ボタンがクリックされました')}>
            クリックしてください
          </button>
          {' '}
          <button disabled>
            無効なボタン
          </button>
        </div>
      </TagDemo>
      
      <TagDemo 
        title="<textarea> - 複数行テキスト入力"
        description="textarea 要素は複数行のテキスト入力に使用されます"
        code={`<div>
  <label htmlFor="text-area">メッセージ：</label>
  <textarea 
    id="text-area"
    value={textareaValue}
    onChange={(e) => setTextareaValue(e.target.value)}
    rows="4"
    placeholder="メッセージを入力してください"
  />
  <div>
    <strong>あなたのメッセージ：</strong>
    <p>{textareaValue}</p>
  </div>
</div>`}
      >
        <div>
          <label htmlFor="text-area">メッセージ：</label>
          <textarea 
            id="text-area"
            value={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)}
            rows="4"
            placeholder="メッセージを入力してください"
          />
          <div>
            <strong>あなたのメッセージ：</strong>
            <p>{textareaValue}</p>
          </div>
        </div>
      </TagDemo>
      
      <TagDemo 
        title="<select> と <option> - ドロップダウンメニュー"
        description="select 要素はドロップダウンメニューを作成し、option 要素は選択肢を定義します"
        code={`<div>
  <label htmlFor="select-input">好きな果物を選んでください：</label>
  <select 
    id="select-input"
    value={selectValue}
    onChange={(e) => setSelectValue(e.target.value)}
  >
    <option value="">選択してください</option>
    <option value="apple">りんご</option>
    <option value="banana">バナナ</option>
    <option value="orange">オレンジ</option>
  </select>
  {selectValue && (
    <p>あなたが選んだのは：{selectValue === 'apple' ? 'りんご' : 
                  selectValue === 'banana' ? 'バナナ' : 
                  selectValue === 'orange' ? 'オレンジ' : ''}</p>
  )}
</div>`}
      >
        <div>
          <label htmlFor="select-input">好きな果物を選んでください：</label>
          <select 
            id="select-input"
            value={selectValue}
            onChange={(e) => setSelectValue(e.target.value)}
          >
            <option value="">選択してください</option>
            <option value="apple">りんご</option>
            <option value="banana">バナナ</option>
            <option value="orange">オレンジ</option>
          </select>
          {selectValue && (
            <p>あなたが選んだのは：{selectValue === 'apple' ? 'りんご' : 
                        selectValue === 'banana' ? 'バナナ' : 
                        selectValue === 'orange' ? 'オレンジ' : ''}</p>
          )}
        </div>
      </TagDemo>
    </section>
  );
};

export default FormTags;