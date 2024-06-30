import React from 'react'
import { useState,useEffect } from 'react'

const Demo1 = () => {
    const [count,setCount] = useState(0);
    let c=0;
    // useEffect(()=>{
    //     console.log("load during mouint");
    //     inc();
    // },[])//empty array means it will only load during mounting.

    // useEffect(()=>{
    //     console.log("load during update");
    // },[count])//count is the state variable, so it will load during update of count.

    useEffect(()=>{
        console.log("load during update");
        c=c+1;
    },[c])//c is the variable, so it will load during update of c.

    const inc=()=>{
        setCount(count+1);
    }
    const dec=()=>{
        setCount(count-1);
    }
  return (
    <div>
        <h1>Here's the count: {count}</h1>
        <h1>Here's the c: {c}</h1>
        <button onClick={inc}>➕</button>
        <button onClick={dec}>➖</button> 
    </div>

    
  )
}

export default Demo1