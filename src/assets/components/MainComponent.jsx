import Button from "@mui/material/Button";

const MainComponent = () => {
    return (
        <div className="w-full pb-[100px]">
            <div className="w-[80%] flex-wrap  m-auto flex justify-center items-center">
                <div className="text-center text-[40px] font-extrabold">
                    Revolutionizing Farming Insurance Refunds with Cryptocurrency
                </div>
                <div className="mt-7">
                    <div className="text-sm  text-center p-5">
                        Get refunds for your farming insurance claims using Cryptocurrency.
                        Join us today and experience the future of insurance.
                    </div>
                    <div className="p-3 flex items-center justify-center">
                        <Button variant="outlined">SignUp</Button>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mt-[100px] flex-wrap  m-auto flex justify-center items-center">
                <div className="text-center text-[#5EBC67] text-[40px] font-extrabold">
                    Revolutionizing Farming Insurance Refunds with Cryptocurrency
                </div>
                <div className="mt-7">
                    <div className="text-sm  text-center p-5">
                        At Farming Insurance Company, we are committed to supporting
                        farmers. We provide refunds for successful insurance claims and
                        accept donations in cryptocurrency to further empower the farming
                        community.
                    </div>
                    <div className="p-3 flex items-center justify-center">
                        <Button variant="contained">Donate</Button>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mt-[100px] m-auto flex justify-center items-center">
                <div className="text-center ">
                    <div className="text-[40px] font-extrabold p-6">
                        Start Your Claim Today
                    </div>
                    <div className="text-sm">
                        Get the refunds you deserve for your farming insurance claims. Donate to supprot farmers worldwide.
                    </div>
                    <div></div>
                </div>
                <div className="img p-6">
                    <img className="w-[300px] rounded-3xl" src="https://i.ibb.co/7KrTPD7/crop1.jpg" alt="" />
                    
                </div>
            </div>
        </div>
    );
};

export default MainComponent;
