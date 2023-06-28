import axios from 'axios';
export  const createPackage = async(pkg)=>{
    return await axios.post("http://52.205.142.120:3000/package/create", pkg);
}
