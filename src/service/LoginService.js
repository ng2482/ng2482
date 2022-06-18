import axios from 'axios';

const user_url = "http://localhost:9001/user/";
class LoginService  {
    constructor() {
        this.id = "Profile";
    }
    userId = (id)=>{
        if(!id) return this.id;
        this.id = id;
    }
     
    addUser(user){
        axios.post(user_url+"new/register",user)
    }

    async getDetails(username){
        var userDetails =  await axios.get(user_url+`${username}`);
        return userDetails;
    }

    deleteUser(userName){
        axios.delete(user_url+`delete/${userName}`)
    }
    
}
const instance = new LoginService()
export default  instance; 

