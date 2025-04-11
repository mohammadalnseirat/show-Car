import Image from "next/image";
import Link from "next/link";
import { CustomButton } from "@/components";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-6 sm:px-16 py-4 bg-transparent">
        <Link href={"/"} className="flex items-center justify-center">
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <CustomButton
          title="Sign In"
          containerStyles="text-primary-blue rounded-full bg-gray-50 shadow-md hover:shadow-lg hover:bg-primary-blue hover:text-white transitions-all duration-300 min-w-[130px] border border-blue-600"
          btnType="button"
        />
      </nav>
    </header>
  );
};

export default Navbar;
