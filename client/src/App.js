
import {useState} from 'react';
import axios from 'axios'

function App() {

  const [name,setName]=useState("");
  const [attendance,setAttendance]=useState("");
  const [time,setTime]=useState("")

  const handleForm=(e)=>{

    e.preventDefault();
    console.log(name,attendance,time)

    const data=await axios.post('http://localhost:3001/users',{
      name:name,attendance:attendance,time:time
    }).then((res)=>{
      console.log(res)
    })

  }
  return (
    <div className="App">

      <form onSubmit={handleForm}>

        <input type="text" placeholder="Enter name" name="name" value={name}
          onChange={(e)=>setName(e.target.value)}/>
        <input type="text" placeholder="Enter attendance" name="attendance" value={attendance}
         onChange={(e)=>setAttendance(e.target.value)}/>
        <input type="text" placeholder="Enter time" name="time" value={time}
         onChange={(e)=>setTime(e.target.value)}/>

         <button type="submit">Add User</button>

      </form>

      

    </div>
  );
}

export default App;
