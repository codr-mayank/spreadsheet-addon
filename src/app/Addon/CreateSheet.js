import { Button } from '@mui/material';
import React from 'react';

const CreateSheet = (props) => {
  const { data } = props;

  return (
    <div>
      <Button
        variant="contained"
        disabled={!data.length}
      >
        Create Sheet
      </Button>
    </div>
  );
};

export default CreateSheet;
