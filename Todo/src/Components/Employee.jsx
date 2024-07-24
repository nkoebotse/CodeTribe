import React, { useEffect, useState } from 'react';

const Employee = () => {

  const [list, setList] = useState([]);
  const [input, setInput] = useState({
    Task: '',
  
  });
  const [isEditing, setIsEditing] = useState(null); 
  const handleFileChange = (e) => {
    setInput({ ...input, image: e.target.files[0] }); 
  };

  const addOrUpdateTodo = () => {
    if (isEditing) {
      const updatedList = list.map(todo =>
        todo.id === isEditing ? { ...todo, ...input } : todo
      );
      setList(updatedList);
      setIsEditing(null);
    } else {
      const newTodo = {
        id: Math.random(),
        ...input,
      };
      setList([...list, newTodo]);
    }
    setInput({ Task: '' });
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  const editTodo = (todo) => {
    setInput(todo);
    setIsEditing(todo.id);
  };


  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user data from localStorage or backend API upon component mount
    const userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData);
  }, []);

  return (
    <div className="employee-container">
      <h1>Welcome {user ? user.email : 'Employee'}</h1>
      
     


                      
      <div className="container2">
     
     <div className="employee-position">
       <h1>to-do list items</h1>

       <input
         type="text"
         value={input.Task}
         placeholder="Task"
         onChange={(e) => setInput({Task: e.target.value })}
       />
       <select>

         <option value="Low" >Low</option>
         <option value="medium">Medium</option>
         <option value="high">High</option>
       </select>
       
       <button onClick={addOrUpdateTodo}>
         {isEditing ? 'Update Data' : 'Add Data'}
       </button>

       <table>
         <thead>
           <tr>
             <th> Task Description</th>
             
            
           </tr>
         </thead>
         <tbody>
           {list.map((todo) => (
             <tr key={todo.id}>
               <td>{todo.Task}</td>
               
               <td>
                
               </td>
               <td>
                 <button onClick={() => editTodo(todo)}>Edit</button>
                 <button onClick={() => deleteTodo(todo.id)}>&times; Delete</button>
               </td>
             </tr>
           ))}
         </tbody>
       </table>
     </div>
   </div>

    </div>
    
  );
};




export default Employee;
