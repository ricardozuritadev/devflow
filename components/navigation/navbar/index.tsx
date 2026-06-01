import Link from "next/link";
import Image from "next/image";
import ThemeSwitcher from "./Theme";

export default function Navbar() {
    return (
        <nav className="flex-between background-light900_dark200 dar:shadow-none fixed z-50 w-full p-6 sm:px-12">
            <Link href="/" className="flex items-center gap-1">
                <Image src="/images/site-logo.svg" alt="DevFlow" width={23} height={23} />
                <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
                    Dev<span className="text-primary-500">Flow</span>
                </p>
            </Link>

            <p>Gobal Search</p>

            <ThemeSwitcher />
        </nav>
    );
}
