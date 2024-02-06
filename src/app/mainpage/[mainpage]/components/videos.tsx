

export default function Video({videoId, modal}){
    console.log(videoId)
    return(<>
        <div className="flex justify-center items-center fixed w-screen h-screen left-0 top-0  overflow-hidden" >
            <div className="absolute left-0 top-0 w-screen h-screen bg-[rgba(0,0,0,0.2)] z-0" onClick={()=>modal(false)}></div>            

            <div className=" bg-white w-[800px] h-[600px] z-10">    
                <iframe height="600" width="800" src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} allow="autoplay"></iframe>
            </div>
        </div>
    </>)
}