'use client'
import { useState } from "react";


export default function Home() {

    const[number, setNumber] = useState(100);

    function handleSubtract1(){
        setNumber(number - 1);
    }

    function handleAdd1(){
        setNumber(number +1);
    }
    
  return (
    <main >
        <h1>{number}</h1>
        <button onClick={handleSubtract1}>Subtrack 1</button>
        <button onClick={handleAdd1}>Add 1</button>
    </main>
  );
}
