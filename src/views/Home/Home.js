import "./Home.css"
import imgback from "./../../images/image-back.jpeg"
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
       
        
      
    ]);
    const [id ,setId]=useState(0)
    const [title ,setTitle]=useState('');
    const [description, setdescription ]= useState('');
    const [priority, setpriority ]= useState('');
    const [isUpdate ,setisUpdate]=useState(false);
    

        useEffect ( ()=>{
            const list = JSON.parse(localStorage.getItem('Routinelist'));
            if( list && list.length>0 )
                setTask(list)
        },[]

        )

  
    const addtopriority =()=>{

        if ( !title || !description || !priority){
            return;
        }
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

    const updateTaskList = (id)=>{
      
        setisUpdate(true);
        setId(id);

        let currentUpdateTask ;

        Task.forEach((task)=>{
            if(task.id===id){
                currentUpdateTask=task;
            }
        })
        
        setTitle(currentUpdateTask.title);
        setdescription(currentUpdateTask.description);
        setpriority(currentUpdateTask.priority);
    }
   
    const updateSetValue = ()=>{
        let indexValue;
             
          Task.forEach((task ,i)=>{
            if(task.id === id){
                indexValue =i;
            }
          }) 

          const tempArray = Task;
          tempArray[indexValue] = {
            id:id,
            title:title,
            description:description,
            priority:priority

          }

          setTask([...tempArray]);
          setId('')
          setTitle('');
          setdescription('')
          setpriority('')
         

    }
   
    return(

        <>
        <h1 className="main-head"> Daily Routine 📃</h1>

        <div className="main-container"  >
            <div className="firt-div" > 
                    <h1 className="sec-head" > Routine list</h1>
                    <div className="showcontainer">

                    
                     {
                        Task.map((Taskinfo , index) => {
                            const {id, title,description, priority  } = Taskinfo;
                            return <Routine id={id}  title={title} description={description } 
                            priority={priority}
                            key={index}
                            removeFromTaskList={removeFromTaskList}
                            updateTaskList={updateTaskList}
                            updateSetValue={updateSetValue}
                             
                           
                            />

                        })
                     }
                    </div>

            </div>

            <div className="second-div">  
                <h1  className="sec-head" > 
                {  isUpdate? "Update " : "Add " }

            
                </h1>
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

                           <div> {
                            isUpdate ?
                            <button type="button" className="prio-btn" onClick={updateSetValue}> Update </button>
                            :
                            <button type="button" className="prio-btn" onClick={addtopriority}> Add </button>}
                            </div>         
                       
                     </form>
                </div>
              
            </div>
        </div>
     
        
        </>
    )
}
