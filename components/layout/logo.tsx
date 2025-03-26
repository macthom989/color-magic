import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/" className="flex items-center space-x-2">
            {/* Logo for Light Theme */}
            <Image
                src="/images/logo.png"
                alt="Color Convert Logo Light"
                width={40}
                height={40}
                className="block dark:hidden"
            />

            {/* Logo for Dark Theme */}
            <Image
                src="/images/logo.png"
                alt="Color Convert Logo Dark"
                width={40}
                height={40}
                className="hidden dark:block"
            />

            <span
                className="font-bold text-2xl animate-text-gradient bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
  Color Magic
</span>
        </Link>
    );
};

export default Logo;