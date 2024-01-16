import React from "react";
import { useRef } from "react";
const Addvideos = () => {

    let thumbnail = useRef()
    let channelIcon = useRef()
    let title = useRef()
    let channelname = useRef()
    let views = useRef()

    let submitUser= (e)=>{
        e.preventDefault()
        let user={
            thumbnail:thumbnail.current.value,
            channelIcon:channelIcon.current.value,
            title:title.current.value,
            channelname:channelname.current.value,
            views:views.current.value
        }
        fetch('http://localhost:4000/videos',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(user)
        }) 
    }

    return (
        <div className="addvideos">
            <center>
            <h1>Add video</h1><br />
            <form style={{border:"2px solid black",width:"25%",paddingRight:"55px",paddingBottom:"25px", textAlign:"right"}} onClick={submitUser}><br />
            <h4>            
            Thumbnail: <input ref={thumbnail} type="text" name="" id="" /><br />
            ChannelIcon: <input ref={channelIcon} type="text" name="" id="" /><br />
            Title: <input ref={title} type="text" name="" id="" /><br />
            Channelname: <input ref={channelname} type="text" name="" id="" /><br />
            Views: <input ref={views} type="text" name="" id="" /><br /><br />

            <input type="submit" value="submit" />
            </h4>        
            </form>   
            </center>         
        </div>
     );
} 
export default Addvideos;