import React, { useState } from 'react';
import DotLoader from 'react-spinners/ClipLoader';

function Loader() {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState('#ffffff');

  const override = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
  };

  return (
    <div>
      <div className="sweet-loading text-center">
        <DotLoader
          color="#000"
          loading={loading}
          css={override} // Pass the override CSS object here
          size={80}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
}

export default Loader;

