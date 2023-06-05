import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { setMenuDisplay } from "../../redux/reducers/sharedSlice";
import { AppDispatch, RootState } from "../../redux/store";
import logo from "../../assets/logo.png";

const Aside = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { menuDisplay } = useSelector((state: RootState) => state.shared);

  return (
    <aside>
      <nav
        className={
          "menu bg-zinc-800 py-8 fixed inset-0 right-1/3 min-h-screen h-auto overflow-y-scroll z-20 transition-all ease-in-out duration-500 overflow-hidden flex flex-col lg:justify-center lg:pb-36 " +
          (menuDisplay
            ? "!translate-x-0 w-60 lg:w-[563px] px-7 bg-neutral-800 bg-opacity-50 backdrop-blur-md"
            : "w-0 lg:w-20")
        }
      >
        <div className="lg:hidden mt-36 mb-10">
          <Link
            aria-current="page"
            className="logo flex items-center justify-center text-dark-gray"
            to="/"
          >
            <img src={logo} alt="wild life" className="w-20" />
          </Link>
        </div>
        <ul
          className={
            "socials mt-10 w-full flex justify-center font-medium text-white px-2  gap-6 lg:gap-12 " +
            (!menuDisplay
              ? " items-center order-1 flex-col"
              : " items-start order-2")
          }
        >
          <li className="lg:border lg:border-white flex items-center justify-center p-2 rounded-full">
            <a
              href="/"
              className="flex items-center justify-center w-4 h-4 mx-auto"
            >
              <i className="fa-brands fa-twitter text-stone-300"></i>
            </a>
          </li>
          <li className="lg:border lg:border-white flex items-center justify-center p-2 rounded-full">
            <a
              href="/"
              className="flex items-center justify-center w-4 h-4 mx-auto"
            >
              <i className="fa-brands fa-facebook-f text-stone-300"></i>
            </a>
          </li>
          <li className="lg:border lg:border-white flex items-center justify-center p-2 rounded-full">
            <a
              href="/"
              className="flex items-center justify-center w-4 h-4 mx-auto"
            >
              <i className="fa-brands fa-instagram text-stone-300"></i>
            </a>
          </li>
          <li className="lg:border lg:border-white flex items-center justify-center p-2 rounded-full">
            <a
              href="/"
              className="flex items-center justify-center w-4 h-4 mx-auto pl-1"
            >
              <i className="fa-sharp fa-solid fa-play text-red-600"></i>
            </a>
          </li>
        </ul>
        <ul
          className={
            "mt-10 w-full flex flex-col  justify-center font-medium text-white px-2 uppercase " +
            (!menuDisplay ? " items-center hidden" : " items-start")
          }
        >
          <li className="py-5 w-full flex">
            <NavLink
              onClick={() => dispatch(setMenuDisplay(false))}
              to="/artists"
              end
              className={({ isActive }) =>
                "rounded-md w-full cursor-pointer transition-all relative text-center" +
                (!isActive ? "" : " font-bold bg-zinc-300 bg-opacity-50")
              }
            >
              artists
            </NavLink>
          </li>
          <li className="py-5 w-full flex">
            <NavLink
              onClick={() => dispatch(setMenuDisplay(false))}
              to="/services"
              end
              className={({ isActive }) =>
                "rounded-md w-full cursor-pointer transition-all relative text-center" +
                (!isActive ? "" : " font-bold bg-zinc-300 bg-opacity-50")
              }
            >
              services
            </NavLink>
          </li>
          <li className="py-5 w-full flex">
            <NavLink
              onClick={() => dispatch(setMenuDisplay(false))}
              to="/discography"
              end
              className={({ isActive }) =>
                "rounded-md w-full cursor-pointer transition-all relative text-center" +
                (!isActive ? "" : " font-bold bg-zinc-300 bg-opacity-50")
              }
            >
              discography
            </NavLink>
          </li>
          <li className="py-5 w-full flex">
            <NavLink
              onClick={() => dispatch(setMenuDisplay(false))}
              to="/about"
              end
              className={({ isActive }) =>
                "rounded-md w-full cursor-pointer transition-all relative text-center" +
                (!isActive ? "" : " font-bold bg-zinc-300 bg-opacity-50")
              }
            >
              about
            </NavLink>
          </li>

          <li className="py-5 w-full flex">
            <NavLink
              onClick={() => dispatch(setMenuDisplay(false))}
              to="/contact"
              end
              className={({ isActive }) =>
                "rounded-md w-full cursor-pointer transition-all relative text-center" +
                (!isActive ? "" : " font-bold bg-zinc-300 bg-opacity-50")
              }
            >
              contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
