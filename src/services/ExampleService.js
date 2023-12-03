import { ApiService } from "./ApiService"


export const ExampleGet = async () =>{
    return await ApiService.fetchData({
        method:'get',
        url:'users',
    })
}
export const ExamplePost = async (data) =>{
    return await ApiService.fetchData({
        method:'post',
        url:'users',
        data
    })
}