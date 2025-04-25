import React from 'react';
import TagDemo from '../../UI/TagDemo';

const GridGallery = () => {
  const code = `<div className="gallery-grid">
  <div className="gallery-item">画像 1</div>
  <div className="gallery-item">画像 2</div>
</div>`;

  return (
    <section id="grid-gallery">
      <h2>グリッドギャラリー</h2>
      <TagDemo 
        title="画像ギャラリー" 
        description="CSSグリッドを使用して画像ギャラリーを作成できます。"
        code={code}
      >
        <div className="gallery-grid">
          <div className="gallery-item">画像 1</div>
          <div className="gallery-item">画像 2</div>
        </div>
      </TagDemo>
    </section>
  );
};

export default GridGallery;