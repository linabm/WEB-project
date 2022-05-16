import { URL_POST } from "../requestMethods";
import axios from "axios";

function create(name,pseudo,size,desc,price){
    axios.post(URL_POST, { posterName: pseudo,title: name, desc, size,price })
    .then(res=>{console.log(res)})
    .catch(err=>{console.log('err'+  err)});
}


export default create;

