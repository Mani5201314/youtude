const VideosLogic = ({videos_data,fn,title}) => {
    return ( 
        <div><h1>{title}</h1>
        <div className="videos_logic">
                        {
        videos_data.map((data)=>(
            <div className="video">
                <div className="thumb">
                     <img src={data.thumbnail} alt="" />
                </div>
        <div className="detail">
            <div className="icon">
                <img src={data.channelIcon} alt="" />
            </div>
       
            <div className="title1">
                <p>{data.title}</p>
                <p>{data.channelname}</p>
                <p>{data.view}M views 
                <button id="delete" onClick={()=>fn(data.id)}>Delete</button></p>
            </div>
            </div>
        </div>
                ))} 
        </div>
        </div>
     );
} 
export default VideosLogic;