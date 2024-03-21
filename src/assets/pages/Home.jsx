import Navbar from '../components/Navbar';
import '../css/Home.css';


const Home = () => {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="p-3 text-[30px] h-screen homeimage">
                <img className='w-[200px]' src="https://i.ibb.co/Yk9f6ZH/logo.png" alt="fuxk you" />
                Hi bro
            </div>

        </div>
    );
}

export default Home;
