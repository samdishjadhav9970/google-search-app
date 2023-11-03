import Logo from "../assets/google-logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
const Home = () => {
    return (
        <div className="flex h-[100vh] flex-col ">
            <HomeHeader />
            <main className="grow flex justify-center">
                <div className="w-full px-5 flex flex-col items-center mt-28">
                    <img src={Logo} className="w-[172px] 2xl:w-[272px] mb-8 " alt="" />
                    <SearchInput />
                    <div className="flex gap-2 text-[#3c4043] mt-8">
                        <button className="h-9 px-4 text-sm rounded-md border border-[#f8f9fa] bg-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2 ">Google Search</button>
                        <button className="h-9 px-4 text-sm rounded-md border border-[#f8f9fa] bg-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2 ">I'm Feeling Lucky</button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
};

export default Home;
