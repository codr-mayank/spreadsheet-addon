import React from 'react';

const CreateSheet = (props) => {
  const { data } = props;

  return (
    <div>
      <button disabled={!data.length}>Create Sheet</button>
    </div>
  );
};

export default CreateSheet;
