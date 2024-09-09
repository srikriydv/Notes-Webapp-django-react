import Form from "../components/Form"
import api from "../api"

function Login() {
    console.log(api.defaults.baseURL);
    return <Form route={`/api/token/`} method="login" />
}

export default Login