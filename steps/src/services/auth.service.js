import axios from "axios";
const API_URL = "http://localhost:3000/users/";
class AuthService {
    login(email, password) {
        return axios
            .post(API_URL + "login", {
                email,
                password
            },{withCredentials: true})
            .then(response => {
                if (response.data.data) {
                    //TODO guardar jwt token em cookie em vez de local storage
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    }
    create(name, email, password) {
        return axios.post(API_URL + "signup", {
            name,
            email,
            password
        });
    }
    getCurrentUser() {
        //TODO cookie em vez de local storage
        return JSON.parse(localStorage.getItem('user'));
    }
    logout() {
        //TODO cookie em vez de local storage
        localStorage.removeItem("user");
    }
}
export default new AuthService();