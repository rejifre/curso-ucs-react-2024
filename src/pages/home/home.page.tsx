

import Navbar from "../../components/Navbar/Navbar"
import Profile from "../../components/Profile/Profile"


const Home = () => {
    return ( 
        <div>
            <Navbar/>
            <h1>Bem vindo ao Sistema! </h1>
            <p>Esta é a página inicial</p>
            <Profile 
                imgSrc={"https://th.bing.com/th/id/OIP.Z49LYmg8H6OZApxau131tQHaE8?rs=1&pid=ImgDetMain"} 
                imgAlt={"Hello"} />
        </div>
    )
}

export default Home