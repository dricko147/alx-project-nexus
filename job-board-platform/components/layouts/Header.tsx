import Link from "next/link"
import Button from "../commons/Button"

const Header: React.FC = () => {
  return (
    <header className="h-28 flex items-center bg-[#171D22] px-4 md:px-16 lg:px-44 text-white">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-xl md:text-4xl font-semibold">Job<span className="text-[#E2D609]">Naija</span></h2>
        <nav className="hidden md:flex flex-1 justify-center space-x-8">
          <Link href="/" className="hover:text-[#E2D609] px-4 md:px-8 text-xl transition-colors duration-300 font-semibold">Home</Link>
          <Link href="/jobs/all_jobs" className="hover:text-[#E2D609] px-4 md:px-8 text-xl transition-colors duration-300 font-semibold">Jobs</Link>
          <Link href="/contact" className="hover:text-[#E2D609] px-4 md:px-8 text-xl transition-colors duration-300 font-semibold">Contact</Link>
        </nav>
        <div className="flex md:hidden">
        <Link href="/login"><Button title="Log in" /></Link>
        </div>
        <div className="hidden md:flex">
        <Link href="/login"><Button title="Log in" /></Link>
        </div>
        
        <div className="flex md:hidden">
        <Link href="/signup"><Button title="Sign Up" /></Link>
        </div>
        <div className="hidden md:flex">
        <Link href="/signup"><Button title="Sign Up" /></Link>
        </div>
      </div>
      
    </header>

  )
}

export default Header