import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { Link } from "react-router-dom";
import { setMenuDisplay } from "../../redux/reducers/sharedSlice";
import logo from "../../assets/logo.png";

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { menuDisplay } = useSelector((state: RootState) => state.shared);

  const menuToggle = () => {
    dispatch(setMenuDisplay(!menuDisplay));
  };

  return (
      <header className=" flex items-start justify-between w-full lg:w-[calc(100%_-_80px)] lg:ml-auto lg:mr-0 mt-14 lg:mt-20 mx-8 lg:px-14 max-w-2xl lg:max-w-none md:mx-auto">
        <div className="">
          <div className="">
            <Link
              aria-current="page"
              className="logo flex items-center justify-center text-dark-gray"
              to="/"
            >
              <img src={logo} alt="wild life" className="w-14 lg:w-32" />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center gap-20">
          <button className="text-white hidden lg:block">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <button
            type="button"
            aria-label="hamburger menu toggle"
            onClick={menuToggle}
            className="z-30 top-4 right-6 group"
          >
            <div className="flex items-center justify-center rounded-full w-6 h-6 transform transition-all duration-200">
              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center ">
                <div className="h-[2px] w-[20px] rounded transform transition-all duration-300 origin-right delay-75 bg-white"></div>
                <div className="h-[2px] rounded bg-white"></div>
                <div className="h-[2px] w-[15px] rounded self-end transform transition-all duration-300 origin-left delay-75 bg-white"></div>
              </div>
            </div>
          </button>
        </div>
      </header>
  );
};

export default Header;
