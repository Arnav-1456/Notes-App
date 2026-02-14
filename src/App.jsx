import { useState } from 'react' 
import { X } from 'lucide-react';
 export const App = () => {
  const submitHandler= (e) => {
    e.preventDefault();
    console.log("title",title);  
    console.log("details",details);
    setTitle('');
    setDetails('');
    const copy = [...tasks];
    copy.push({title,details});
    setTasks(copy);
  }
  const[title,setTitle] = useState('');
  const[details,setDetails] = useState('');
  const[tasks,setTasks] = useState([]);
  const deleteNote = (index) => {
    console.log("delete note",index);
    const copy = [...tasks];
    copy.splice(index,1);
    setTasks(copy);
  }
   return (
      <div className='bg-black text-white h-screen lg:flex'>
        <form  onSubmit= {(e)=>{
          submitHandler(e)
        }}className='flex items-start  gap-4 flex-col lg:w-1/2 p-10 '>
          <h1 className='text-3xl font-bold'>Add Notes</h1>
           <input type="text" placeholder='Enter Note Here ' className='px-5 w-full font-medium py-2 border-2 rounded outline-none' 
           value={title} onChange={(e)=>setTitle(e.target.value)}/>
          <textarea type="text" placeholder='Write Details' className='px-5 w-full font-medium h-32 py-2 border-2 rounded flex items-start ' value={details} onChange={(e)=>setDetails(e.target.value)}/>
          <button className='bg-white text-black   px-5 w-full py-2 rounded'>Add Notes</button>  
        </form>
        <div className='lg:border-l-2 p-10 lg:w-1/2'>
        <h1 className='text-3xl font-bold'>Your Notes</h1>
          <div className='flex flex-wrap  items-start justify-start gap-5 mt-5 overflow-auto h-full'>
           {tasks.map((task,index)=>{  
           return(
            <div key={index} className=" relative h-52 w-40 rounded-xl  bg-cover px-4 py-9 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] text-black">
              <h2 onClick={()=>deleteNote(index)}className='absolute top-4 right-2'><X className='w-5 h-5 text-gray-500'/></h2>
              <h1 className='leading-tight text-xl font-bold'>{task.title}</h1>
              <p className='mt-4 leading-tight font-medium text-gray-500'>{task.details}</p>
            </div>
           )
        })}
        </div>

      </div>
      </div>
   )
 }
 export default App
 