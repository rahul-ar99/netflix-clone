export default function LoginDetails({
    params,}
    :{
        params:{login:string};
    }){
    return <h1>this is login page {params.login}</h1>
}