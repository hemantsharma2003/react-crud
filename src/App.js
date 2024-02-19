//https://youtu.be/HOR9THgngU0?si=NbiCezOP0bHWGlUm
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import CustomInput from './components/CustomInput';
import CustomButton from './components/CustomButton';
import Card from './components/Card';
import { useState } from 'react';

function App() {
  const [add, setAdd] = useState(false);
  const[tasks, setTasks] = useState([]);
  const [singleTask, setSingleTask] = useState('');
  const [singleDesc, setsingleDesc] = useState('');

  const handleCustomInput = (e) => { 
    setSingleTask(e.target.value);
  }

  const handleCustomInputDesc = (e) => { 
    setsingleDesc(e.target.value);
  }
  
  const handleInput = () => { 
    setAdd(!add);
  }

  const addToCard = () => {
      const id = tasks.length==0?1:tasks.length+1;
      setTasks([...tasks, {id, task: singleTask, desc: singleDesc}]);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id!== id));
  }

  const clearInput = () => {
    setSingleTask('');
    setsingleDesc('');
  }

  const updateTask = (task) => {
   
    setTasks(
      tasks.map((task) => {
        if(task.id === task.id){
          return {id: task.id, task: task.task, desc: task.desc}
        }
        return task;
      })
    )
    
  }
  return (
    <div className="main">
      <div className="inputsection">
        <Header handleInput={handleInput} />
          {
            add===true?
            <>
            <CustomInput value={singleTask} placeHolder='Enter Task' change={handleCustomInput} label='Task' />
            <CustomInput value={singleDesc} placeHolder='Enter Description' change={handleCustomInputDesc} name='Description' label='Task' />
            <div className='btnwrapper'>
          <CustomButton name='Save Task' click={addToCard} color='white' bg='#000EEE' />
        <CustomButton click={clearInput} name='Clear' color='red' bg='#000EEE' />
          </div>
            </>: null
          }
        
         
      </div>
      <div className="cardsection">
     {
      tasks.map((task) =>{
        return <Card key={task.id} title={task.task} des={task.desc} delete={()=> deleteTask(task.id)} 
        update={()=>updateTask(task.id)} 
        complete={task.complete}/>
      })
     }
     
      </div>
         
    </div>
  );
}

export default App;
