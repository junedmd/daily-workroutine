import "./Routine.css"
export default function Routine({id,title,description,priority}){
    return(
        <>
        <div className="perform-container">
            
            <h5 className="routine-title"> {title}</h5>
            <p  className="routine-descri" > {description}</p>
            <h3  className="routine-priority"> 🎯{priority}</h3>
        </div>
       
        
        </>
    )
}