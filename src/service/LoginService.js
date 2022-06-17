import axios from 'axios';

const productList_url = "http://localhost:9001/user/";
class LoginService  {
    constructor() {
        this.id = "Profile";
    }
    userId = (id)=>{
        if(!id) return this.id;
        this.id = id;
    }
     
    async getDetails(username){
        var userDetails =  await axios.get(productList_url+`${username}`);
        return userDetails;
    }

    deleteUser(userName){
        axios.delete(productList_url+`delete/${userName}`)
    }
    
}
const instance = new LoginService()
export default  instance; 

