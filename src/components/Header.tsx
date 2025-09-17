import Link from "next/link";
import Button from "./ux/ui/Button";
import { Flower } from "../types/Flower";
import { useRouter } from "next/navigation";

type HeaderProps = {
  setSortDirection: (sortDirection: boolean | null) => void;
  selectedFlowers: Flower[];
};

const Header = ({ setSortDirection, selectedFlowers }: HeaderProps) => {
  const handleClick = () => {
    const router = useRouter();
    const encoded = encodeURIComponent(JSON.stringify(selectedFlowers));
    router.push(`/shopping-card?flowers=${encoded}`);
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
          href=""
          className="text-2xl hover:text-blue-700 text-blue-500"
          onClick={handleClick}
        >
          Shopping card
        </Link>
      </div>
      <div className="flex flex-row justify-around gap-5">
        <Button onClick={() => setSortDirection(true)}>
          Sort by price asc
        </Button>
        <Button onClick={() => setSortDirection(false)}>
          Sort by price desc
        </Button>
      </div>
    </header>
  );
};

export default Header;
