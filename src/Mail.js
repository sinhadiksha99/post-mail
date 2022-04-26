import { IconButton } from '@material-ui/core';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DeleteIcon from '@material-ui/icons/Delete';
import PrintIcon from '@material-ui/icons/Print';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import React from 'react';
import './Mail.css';


import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectOpenMail } from './features/mailSlice';

function Mail() {
  const history = useHistory();
  const selectedMail = useSelector(selectOpenMail);

  console.log('Mail');

  return (
    <div className='mail'>
      <div className='mail__tools'>
        <div className='mail__toolsLeft'>
            <IconButton onClick={() => history.push("/")}>
              <ArrowBackIcon />
            </IconButton>
            <IconButton>
              <MoveToInboxIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon />
            </IconButton>
        </div>

        <div className='mail__toolsRight'>
            <IconButton>
              <PrintIcon />
            </IconButton>
        </div>
      </div>
      <div className='mail__body'>
        <div className='mail__bodyHeader'>
          <h2>{selectedMail?.subject}</h2>
          <LabelImportantIcon className="mail__important" />
          <p>{selectedMail?.title}</p>


          <p className='mail__time'>{selectedMail?.time}</p>
        </div>
        
        <div className='mail__message'>
          <p>{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;