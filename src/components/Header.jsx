import { NETFLIX_LOGO } from "../utils/constants";


const Header = () => {
    return (
        <div className="absolute pl-12 pt-8 pr-12 pb-8 bg-gradient-to-b from-black z-10">
            <img 
            className="w-44"
            src={NETFLIX_LOGO}
            alt="NETFLIX logo"
            />
        </div>
    );
};

export default Header;