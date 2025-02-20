import React, { useState, useEffect } from 'react';
import './EmailCopy.scss';

const EmailCopy = () => {
  const [message, setMessage] = useState('Click to copy email address');
  const email = 'aswiniviswanath97@gmail.com';


  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setMessage('Email address copied to clipboard');
      setTimeout(() => setMessage('Click to copy email address'), 2000);
    }).catch(err => console.error('Failed to copy: ', err));
  };

  const handleClick = (e) => {
    e.preventDefault();
    copyToClipboard(email);
  };

  return (
    <div className="mailto">
      <a href={`mailto:${email}`} className="mailto-link" onClick={handleClick}>
        Email Me
        <span class="material-symbols-outlined">
content_copy
</span>
        <span className="mailto-message">{message}</span>
      </a>
    </div>
  );
};

export default EmailCopy;
