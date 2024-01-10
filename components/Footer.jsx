import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-10">
        <div className="p-5">
          <ul>
            <div className="flex flex-col sm:flex-row text-center pb-5">
              <Image
                src="/assets/images/logo.svg"
                alt="logo"
                width={30}
                height={30}
                className="object-contain sm:mr-2 sm:mb-5 "
              />
              <p className="text-gray-800 font-bold text-3xl pb-6">
                Prompt<span className="text-blue-600">Social</span>
              </p>
            </div>

            <div className="flex gap-6 pb-5"></div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">
              Important Links
            </p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/login">Login</Link>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/register">Profile</Link>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Contact Us
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Create Prompt
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
        <h1 className=" text-gray-800 font-semibold">
          © 2021-2022 All rights reserved | PromptSocial
        </h1>
      </div>
    </>
  );
};

export default Footer;
