import "./Home.css"
import Routine from "../../component/Routine/Routine"
import { useState } from "react"
export default function Home(){
    const [Task,setTask] = useState([
        {
            id:1,
            title: "ghar jaana hai",
            description:" kaam hai mujhe",
            priority:" very high"
        },
        
      
    ]);

    const [title ,setTitle]=useState('');
    const [description, setdescription ]= useState('');
    const [priority, setpriority ]= useState('');

  
    const addtopriority =()=>{
         const randomId = Math.floor(Math.random() *100);

         const obj ={
            id: randomId,
            title : title,
            description : description,
            priority:priority
         }

         setTask([...Task, obj]);
         
         setTitle('');
         setdescription('');
         setpriority('');
    }
    return(

        <>
        <h1 className="main-head"> Daily Routine 📃</h1>

        <div className="main-container">
            <div className="firt-div" > 
                    <h1 className="sec-head"> Routine list</h1>
                     {
                        Task.map((Taskinfo , index) => {
                            const {id, title,description, priority} = Taskinfo;
                            return <Routine id={id}  title={title} description={description } 
                            priority={priority}
                            />

                        })
                     }

            </div>

            <div className="second-div">  
                <h1  className="sec-head" > Add list</h1>
                <div className="form-list">
                    <h3> title :{title}</h3>
                     <form>
                       
                        <input  type="text" 
                        value={title}
                        onChange={(event) => {
                        setTitle(event.target.value)  
                        }}
                        placeholder="Title "
                        className="priority-input"/>
                                    <br/>
                          
                        <input  type="text"
                         value={description}
                         onChange={(event) => {
                         setdescription(event.target.value)  
                        }}
                        placeholder="description "
                        className="priority-input"
                        
                        />
                                <br/>
                        
                        <input  type="text"
                         value={priority}
                         onChange={(event) => {
                         setpriority(event.target.value)  
                        }}
                        placeholder="priority: "
                        className="priority-input"/><br></br>

                        <button type="button" className="prio-btn" onClick={addtopriority}> add priority</button>
                     </form>
                </div>
              
            </div>
        </div>
     
        
        </>
    )
}
