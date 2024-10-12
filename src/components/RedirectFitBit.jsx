import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const RedirsectFitBit = () => {
    const navigate = useNavigate();
    useEffect(() => {
      const hash = window.location.hash;
      const token = new URLSearchParams(hash.replace('#', '')).get('access_token');
      console.log(token);
  
      if (token) {
        localStorage.setItem('fitbit_token', token);
        navigate('/result');
      } else {
        console.error('Authorization failed');
      }
    }, [history]);
  
    return <div>Authorizing...</div>;
}

export default RedirsectFitBit
