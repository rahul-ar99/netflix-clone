

export default function Video({videoId, modal}){
    console.log(videoId)
    return(<>
        <div className="flex justify-center items-center fixed w-screen h-screen left-0 top-0  overflow-hidden" >
            <div className="absolute left-0 top-0 w-screen h-screen bg-[rgba(0,0,0,0.2)] z-0" onClick={()=>modal(false)}></div>            

            <div className=" bg-white z-10">
                <video src={`https://www.youtube.com/watch?v=${videoId}`}></video>
                {/* <video width="420" height="315"
                    src={`https://www.youtube.com/watch?v=${videoId}`}>
                    </video>  */}
                    {/* <iframe height="580" width="500"
            src={`https://www.youtube.com/watch?v=${videoId}`}>
            </iframe> */}
 
            </div>
        </div>
    </>)
}