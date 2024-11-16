import React from 'react';
import { createPortal } from 'react-dom';

function MyComponent() {
  return (
    <div>
      <p>This child is placed in the parent div.</p>
      {createPortal(
        <div className="App">This child is placed in the document body.</div>,
        document.getElementById('my-root')
      )}
    </div>
  );
}

export default MyComponent;
