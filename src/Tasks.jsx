import Card from "./Card";
function Tasks({data,setData}){

    return(
        <div className="flex flex-col items-center justify-center gap-5">
            
                {
                    data.map((item)=>{
                       return <Card item={item} setData={setData} data={data}></Card>
                    })
                }
            
        </div>
    )
    

}
export default Tasks;