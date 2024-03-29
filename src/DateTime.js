import  React, { useState , useEffect } from 'react'
import TodayIcon from '@material-ui/icons/Today';



 const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div>
           <p className="date"><TodayIcon />{date.toLocaleDateString()}</p>
        </div>
    )
}

export default DateTime;