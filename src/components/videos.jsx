import { useEffect,useState } from "react";
import "../styles/videos.css"
import VideosLogic from "./videoslogic"
const Videos = () => {

    let [videos,setUser]=useState([])

    useEffect(()=>{
        let fetchData=async()=>{
            let response =await fetch("http://localhost:4000/videos")
            let data =await response.json()
            setUser(data)
        }
        fetchData()
    },[])
    
    let remove = (id) => {
        setUser(videos.filter((data) =>id!== data.id))
        alert(`deleted ${id}`)
        console.log(videos);

    }

    return (

        <div className="videos">

            <VideosLogic videos_data={videos} fn={remove}  title={"All videos"} />
            {/* <VideosLogic videos_data={state.filter(x=>x.view>5)} fn={remove} title={">5M views"}/>
            <VideosLogic videos_data={state.filter(x=>x.view<65)} fn={remove} title={"<5M views"}/> */}

        </div>

    )
}

export default Videos;

