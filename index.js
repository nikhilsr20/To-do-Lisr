import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client'

const Hi=()=>{
    const [s,setS]=useState(()=>{
        const stored=localStorage.getItem('s');
        return stored ? JSON.parse(stored) : [0];
    });
     const addItem = () => {
    setS([...s, s[s.length-1]+1]); 
  };
  const remove=(i)=>{
    if(s.length>1){
 console.log(i);
   setS(s.filter((id, index) => id !== i));
    }
    else {
        console.log(i)
    }
 
  }
    useEffect(() => {
   
    localStorage.setItem('tasks', JSON.stringify(s));
  }, [s]);
    
    return (
        <div className='main'>
            <h1 className='name'>TO DO LIST</h1>
            <div className='list'>
                
            {
                s.map((item,ind)=>{
                    return (
                        <div key={item} id={item} className='box'>
                      <input type='checkbox' className='check'></input>
                      <input type='text' className='texts'></input>
                      <h1 className='remove' onClick={() => remove(item)}>❌</h1>
               </div>
                    )
                })
            }
               
               
            </div>
            <button className='additem' onClick={()=>addItem()}>Add Box</button>

        </div>
    )
}
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hi/>)