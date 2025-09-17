import Link from "next/link"
import Button from "./ux/ui/Button"

const Header =()=> {
  return(
  <header className="flex flex-row justify-between items-center h-[70px] p-5">
    <div className="flex flex-row justify-around  gap-5">
      <Link href="/" className="text-2xl hover:text-blue-700 text-blue-500">Shop</Link>
      <Link href="/shopping card" className="text-2xl hover:text-blue-700 text-blue-500">Shopping card</Link>
    </div>
    <div className="flex flex-row justify-around  gap-5">
      <Button>Sort by price</Button>
      <Button>Sort by date</Button>
    </div>
  </header>
  )
}

export default Header