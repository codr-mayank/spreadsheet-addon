import { Button } from '@mui/material';
import React from 'react';

const CreateSheet = (props) => {
  const { data } = props;

  const handleCreateSheet = () => {
    // TODO: create spreadsheet api using gapi-script
    // window.gapi.client.sheets.spreadsheets.create
    createGoogleSheet(data);
  };

  return (
    <div>
      <Button variant="contained" disabled={!data.length} onClick={handleCreateSheet}>
        Create Sheet
      </Button>
    </div>
  );
};

export default CreateSheet;
