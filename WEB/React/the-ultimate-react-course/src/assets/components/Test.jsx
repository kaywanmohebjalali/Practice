// import React, { useEffect, useRef, useState } from 'react'

import { memo } from "react";

const Test = (prop) => {
  console.log('Test');
 const{get}=prop
  return (
    <>

  <p>{Math.random()}</p>
    </>
  )
}

export default Test;
// export default memo(Test);