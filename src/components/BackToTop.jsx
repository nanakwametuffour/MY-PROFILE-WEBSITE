import React from 'react'
 import ScrollToTop from "react-scroll-to-top";
import TopBtn from './TopBtn';


export default function BackToTop() {
  return (
    <div>
      <div />
      <ScrollToTop smooth component={<TopBtn/>}/>
    </div>
  );
}
