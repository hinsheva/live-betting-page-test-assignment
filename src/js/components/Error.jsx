// @flow

import React from 'react';

const Error = ({ error }: { error: string }) => {
  return (
    <div className="error">
      <div>{error}</div>
    </div>
  );
};

export default Error;
