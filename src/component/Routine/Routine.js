import "./Routine.css"
export default function Routine({id,title,description,priority,removeFromTaskList,updateTaskList }){
    return(
        <>
        <div className="perform-container">
            
            <h5 className="routine-title"> {title}</h5>
            <p  className="routine-descri" > {description}</p>
            <h3  className="routine-priority"> 🎯{priority}</h3>
            <span className="routine-delete"
           onClick={()=>{
            removeFromTaskList(id); 
           }}
            
            > 🗑️ </span>

            <span className=" routine-edit "

            onClick={ ()=>{
                updateTaskList(id);
            }

            }
            
            > ✏️ </span>
        </div>
       
        
        </>
    )
}