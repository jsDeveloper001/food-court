import {
    Navbar,
    Typography,
    Button,
    IconButton,
    Collapse,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const StickyNavbar = () => {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to={'/'} className="text-white">Home</NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to={'/contact'} className="text-white">Contact Us</NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to={'/dashboard'} className="text-white">Dashboard</NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to={'/menu'} className="text-white">Our Menu</NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to={'/menu'} className="text-white">Our Shop</NavLink>
            </Typography>
        </ul>
    );

    return (
        <div className="flex justify-center">
            <Navbar className="fixed bg-[#15151580] top-0 z-10 rounded-none px-4 py-2 lg:px-4 lg:py-2">
                <div className="flex items-center justify-between text-white">
                    <div>
                        <h2 className="font-bold text-2xl">Food Court</h2>
                        <h3>Restaurant</h3>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <div className="flex items-center gap-x-1">
                            <Link to={'/login'}>
                                <Button fullWidth color="green" size="sm" className="">
                                    <span>login</span>
                                </Button>
                            </Link>
                            <Link to={'/register'}>
                                <Button fullWidth color="blue" size="sm" className="">
                                    <span>Register</span>
                                </Button>
                            </Link>
                        </div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <Collapse open={openNav}>
                    <div className="mt-5">
                        {navList}
                    </div>
                    <div className="flex items-center gap-x-1">
                        <Link to={'/login'}>
                            <Button fullWidth color="green" size="sm" className="">
                                <span>login</span>
                            </Button>
                        </Link>
                        <Link to={'/register'}>
                            <Button fullWidth color="blue" size="sm" className="">
                                <span>Register</span>
                            </Button>
                        </Link>
                    </div>
                </Collapse>
            </Navbar>
        </div>
    )
};

export default StickyNavbar;