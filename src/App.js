import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
 
function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState(['hello']);

    const [name , setName] = useState('');
    
    const handleChange =(e)=>{
      setTask(e.target.value);
    }
    
    const handleSubmit=(e)=>{
      setTaskItems([...taskItems, task])
      setTask(null);
        //alert('A form was submitted with Name :"' + name);
      e.preventDefault();
 
    }

    const completeTask = (index) => {
      let itemsCopy = [...taskItems];
      itemsCopy.splice(index, 1);
      setTaskItems(itemsCopy)
    }

    
  return (
    <div className="App">
    <header className="App-header">
    <form onSubmit={(e) => {handleSubmit(e)}}>
     {/*when user submit the form , handleSubmit()
        function will be called .*/}
    <h2> Todos </h2>

    <div>
      {taskItems.length > 0 ? (
        taskItems.map((task) => task)
      ) : (
        <p>No User Records found</p>
      )}
    </div>

    <h3> Add Form </h3>
        <label >
          Name:
        </label><br/>
        <input type="text" value={name} required onChange={(e)
              => {handleChange(e)}} /><br/>
          { /*when user write in name input box , handleChange()
              function will be called. */}
        
        <input type="submit" value="Add"/>
      </form>
    </header>
    </div>
  );
}
 
export default App;