import Link from "next/link";

import { Flower } from "../types/Flower";
type HeaderProps = {
  selectedFlowers: Flower[];
  children?: React.ReactNode;
};

const Header = ({ selectedFlowers, children }: HeaderProps) => {
  const handleClick = () => {
    localStorage.setItem("selectedFlowers", JSON.stringify(selectedFlowers));
  };

  return (
    <header className="flex flex-row justify-between items-center h-[100px] p-10">
      <div className="flex flex-row justify-around gap-5 items-center">
        <Link
          href="/"
          className="text-2xl hover:text-blue-700 text-blue-500 border-r-3 border-blue-300 p-3"
        >
          Shop
        </Link>
        <Link
          href="/shopping-cart"
          className="text-2xl hover:text-blue-700 text-blue-500"
          onClick={handleClick}
        >
          Shopping cart
        </Link>
      </div>
      <div className="flex flex-row justify-around gap-5">
        {children&& children}
      </div>
    </header>
  );
};
export default Header