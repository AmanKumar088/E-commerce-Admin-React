export default function SetStorage(data){
    localStorage.setItem("login-info",JSON.stringify(data))
}

export function GetStorage(){
    return JSON.parse(localStorage.getItem("login-info"))
}