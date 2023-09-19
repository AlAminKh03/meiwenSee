import React, { useEffect, useState } from "react";

type Props = {};

const Navbar = (props: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setIsMobileMenuOpen(false);

    if (prevScrollPos < currentScrollPos) {
      // Scrolling down
      setIsScrollingUp(false);
    } else {
      // Scrolling up
      setIsScrollingUp(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav
      className={`${
        isMobileMenuOpen
          ? " delay-300 ease-in duration-[700ms]"
          : " delay-0 ease-linear"
      } bg-[#f7f5ed] fixed w-full top-0  text-[#42423f] z-50 transition    px-[23px] py-[23px] lg:px-[52px] lg:py-[30px]`}
      id="navbar"
    >
      <div className="container mx-auto ">
        <div className="flex items-center justify-between">
          <div className=" flex  items-center ">
            <a
              href="/"
              className=" font-semibold text-[#3b3b3a] tracking-widest mr-[32px] font-mono text-lg"
            >
              MEIWEN SEE
            </a>

            <div className="hidden lg:flex gap-x-[15px] text-lg tracking-tighter">
              <a href="#" className="text-[#42423f] hover:text-[#696968]">
                Design
              </a>
              <a href="#" className="text-[#42423f] hover:text-[#696968]">
                Photography
              </a>
              <a href="#" className="text-[#42423f] hover:text-[#696968]">
                Journal
              </a>
              <a href="#" className="text-[#42423f] hover:text-[#696968]">
                Contact
              </a>
            </div>
          </div>
          <div className="hidden lg:block">some logo</div>

          <div className="lg:hidden">
            <button onClick={toggleMobileMenu} className="p-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-[#42423f] relative  z-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`${
          isMobileMenuOpen ? "translate-y-0 " : "translate-y-full "
        } bg-[#f7f5ed]  lg:hidden fixed top-[70px] right-0 h-full w-full  shadow-lg transform transition-transform duration-[700ms] ease-in-out `}
      >
        <div className="p-4 relative top-[120px] md:top-[90px] flex flex-col items-center justify-end gap-y-20">
          <ul className="space-y-4 flex flex-col justify-center items-center text-4xl gap-y-6">
            <li>
              <a
                href="#"
                className="block text-[#42423f] hover:text-[#696968] "
                onClick={toggleMobileMenu}
              >
                Design
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-[#42423f] hover:text-[#696968] "
                onClick={toggleMobileMenu}
              >
                Photography
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-[#42423f] hover:text-[#696968] "
                onClick={toggleMobileMenu}
              >
                Journal
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-[#42423f] hover:text-[#696968] "
                onClick={toggleMobileMenu}
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="justify-self-end">some logo</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
