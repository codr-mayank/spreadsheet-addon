import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import CreateSheet from './CreateSheet';

const GetData = props => {
  const {isButtonDisabled} = props;

  const [data, setData] = useState([]);

  const handleGetData = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
      if(res && res.status === 200) {
        setData(res.data);
        toast.success('Data fetched!');
        toast.info('Click "Create Sheet" to continue');
      }
    });
  }

  return (
    <div>
      <button
        className= {isButtonDisabled ? "getDataButton disabledButton" : "getDataButton"}
        disabled={isButtonDisabled}
        onClick={handleGetData}
      >
        Get Data
      </button>
      <CreateSheet data={data}/>
    </div>
  );
};

export default GetData;
