import { useNavigate } from "react-router-dom";

function Header(){

    const navigate = useNavigate();

    const style = {
        cursor: "pointer",
    }

    return(
        <div className="header">
            <h1 style={style} onClick={() => navigate("/")}>Anonymous Letter</h1>
        </div>
    )
}

export default Header