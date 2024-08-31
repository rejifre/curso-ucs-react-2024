

import Navbar from "../../components/Navbar/Navbar"
import Profile from "../../components/Profile/Profile"
import  Button  from "@mui/joy/Button"


const Home = () => {
    return ( 
        <div>
            <Navbar/>
            <h1>Bem vindo ao Sistema! </h1>
            <p>Esta é a página inicial</p>
            <Button></Button>
            <Profile 
                imgSrc={"https://th.bing.com/th/id/OIP.Z49LYmg8H6OZApxau131tQHaE8?rs=1&pid=ImgDetMain"} 
                imgAlt={"Hello"} />
        </div>
    )
}

export default Home