import axios from 'axios';

const user_url = "http://localhost:8079/api/user/user/";
class LoginService {
    constructor() {
        this.id = "Profile";
        this.role = null
    }
    userId = (id) => {
        if (!id) return this.id;
        this.id = id;
    }
    userRole = (role) => {
        if (!role) return this.role;
        this.role = role;
    }

    addUser(user) {
        axios.post(user_url + "new/register", user)
    }

    async getDetails(username) {
        var userDetails = await axios.get(user_url + `${username}`).catch(err => { console.log(err) });
        return userDetails;
    }

    updateUser(username, user) {
        axios.put(user_url + `update/${username}`, user)
    }

    deleteUser(userName) {
        axios.delete(user_url + `delete/${userName}`)
    }

}
const instance = new LoginService()
export default instance;

