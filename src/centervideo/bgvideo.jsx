import React from 'react';
import "node_modules/video-react/dist/video-react.css";
import '../assets/'
import { Player } from 'video-react';

export default function Bgvideo(){
  return (
      <div className='main'>
      <video src={Bgvideo} />
      </div>
  )
};