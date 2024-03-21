import MainComponent from '../components/MainComponent';
import Navbar from '../components/Navbar';
import '../css/Home.css';


const Home = () => {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="p-3 text-[30px] h-screen homeimage bg-repeat-y">
                <MainComponent/>
            </div>

        </div>
    );
}

export default Home;
