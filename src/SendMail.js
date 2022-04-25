import React from 'react';
import "./SendMail.css";
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';

function SendMail() {
  const { register, handleSubmit, watch, errors } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className='sendMail'>
      <div className='sendMail__header'>
        <h3>New Message</h3>
        <CloseIcon className='sendMail__close' />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
          name='to' 
          type='text' 
          placeholder='To'
          ref={register("to", { required: true })} 
        />
        
        <input 
          name='subject' 
          type='text' 
          placeholder='Subject' 
          ref={register("subject", { required: true })} 
        />
        
        <input 
          name='message' 
          className='sendMail__message' 
          type='text' 
          placeholder='Message...' 
          ref={register("message", { required: true })}
        />

        <div className='sendMail__options'>
          <Button className='sendMail__send'
            variant='contained'
            color='primary'
            type='submit'>Send</Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;