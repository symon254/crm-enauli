import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [phone, setPhone] = useState("");
    const [pin, setPin] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {};
    const handleClick = (e) => {
        navigate("/dashboard");
    };

    return (
        <form className="login" onSubmit={handleSubmit}>
            <h3>Login</h3>
            <label>Phone:</label>
            <input
                type="number"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
            />
            <label>Pin:</label>
            <input
                type="password"
                onChange={(e) => setPin(e.target.value)}
                value={pin}
            />
            <button onClick={handleClick}>Log In</button>
        </form>
    );
};
export default Login;
