import { footerLinks } from "@/constant/constant";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100  mt-5 border-t-8 border-blue-600">
      <div className="flex bg-gray-100 max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex  flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Carhub{" "}
            <span className="text-green-500 font-medium">
              {new Date().getFullYear()}
            </span>{" "}
            <br />
            All Rights Reserved <span className="text-green-500">&copy;</span>
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((item) => (
            <div key={item.title} className="footer__link">
              <h3 className="font-bold">{item.title}</h3>
              <div className="flex flex-col gap-5">
                {item.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.url}
                    className="text-gray-900 hover:text-gray-700  hover:pl-2 transition-all duration-200"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap border-t-2 border-blue-600 rounded bg-gray-200 sm:px-16 px-6 py-10">
        <p>
          @{" "}
          <span className="font-bold text-green-500 italic">
            {new Date().getFullYear()}
          </span>{" "}
          CarHub. All rights reserved
        </p>

        <div className="footer__copyrights-link">
          <Link
            href="/"
            className="text-blue-500 font-semibold hover:underline hover:text-blue-600 hover:scale-105 transition-all duration-200"
          >
            Privacy & Policy
          </Link>
          <Link
            href="/"
            className="text-green-500 font-semibold hover:underline hover:text-green-600 hover:scale-105 transition-all duration-200"
          >
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
