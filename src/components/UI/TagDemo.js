import React from 'react';

const TagDemo = ({ title, description, code, children }) => {
  return (
    <div className="tag-demo">
      <h3>{title}</h3>
      {description && <p className="description">{description}</p>}
      
      <div className="demo-preview">
        {children}
      </div>
      
      <div className="demo-code">
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default TagDemo;