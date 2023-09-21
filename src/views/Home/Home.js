import "./Home.css"
import Routine from "../../component/Routine/Routine"
import { useEffect, useState } from "react"
export default function Home(){
    const [Task,setTask] = useState([
        {
            id:1,
            title: "javascript ",
            description:" jaavscript practise karni hai",
            priority:" very high"
        },
        {
            id:2,
            title: "job",
            description:" paisa kamana hai mujhe ",
            priority:" very high"
        }
        
      
    ]);

    const [title ,setTitle]=useState('');
    const [description, setdescription ]= useState('');
    const [priority, setpriority ]= useState('');

        useEffect ( ()=>{
            const list = JSON.parse(localStorage.getItem('Routinelist'));
                setTask(list)
        },[]

        )

  
    const addtopriority =()=>{
         const randomId = Math.floor(Math.random() *100);

         const obj ={
            id: randomId,
            title : title,
            description : description,
            priority:priority
         }

            const newArray = [...Task, obj] ;

         setTask(newArray);
         
         setTitle('');
         setdescription('');
         setpriority('');

         saveToLocalStorage(newArray );
         
    };

    const removeFromTaskList = (id)=>{
        let index;
        Task.forEach((task ,i)=>{
            if(task.id===id){
                index=i
            }
        }
        )
        
        const tempArray = Task;
        tempArray.splice(index,1);

        setTask([...tempArray]);

        saveToLocalStorage(tempArray );

    }

    const saveToLocalStorage = (Tasks) =>{
        localStorage.setItem('Routinelist',JSON.stringify(Tasks));
    }

   
   
    return(

        <>
        <h1 className="main-head"> Daily Routine 📃</h1>

        <div className="main-container">
            <div className="firt-div" > 
                    <h1 className="sec-head"> Routinelist</h1>
                     {
                        Task.map((Taskinfo , index) => {
                            const {id, title,description, priority  } = Taskinfo;
                            return <Routine id={id}  title={title} description={description } 
                            priority={priority}
                            key={index}
                            removeFromTaskList={removeFromTaskList}
                             
                           
                            />

                        })
                     }

            </div>

            <div className="second-div">  
                <h1  className="sec-head" > Add list</h1>
                <div className="form-list">
                  
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
