import Link from "next/link";
import Button from "./ux/ui/Button";

type HeaderProps = {
  setSortDirection: (sortDirection: boolean | null) => void;
};

const Header = ({ setSortDirection }: HeaderProps) => {
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
          href="/shopping-card"
          className="text-2xl hover:text-blue-700 text-blue-500"
        >
          Shopping card
        </Link>
      </div>
      <div className="flex flex-row justify-around gap-5">
        <Button onClick={() => setSortDirection(true)}>Sort by price asc</Button>
        <Button onClick={() => setSortDirection(false)}>Sort by price desc</Button>
      </div>
    </header>
  );
};

export default Header;
