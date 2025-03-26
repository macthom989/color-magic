'use client'

import {motion} from "framer-motion";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function NotFound() {
    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white-500 to-green-500 text-white text-center">
            <motion.h1
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                className="text-8xl font-extrabold drop-shadow-lg"
            >
                404
            </motion.h1>
            <motion.p
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.3, duration: 0.5}}
                className="mt-4 text-xl max-w-md mx-auto opacity-90"
            >
                Oops! Trang bạn tìm không tồn tại. Hãy kiểm tra lại địa chỉ hoặc quay về trang chủ.
            </motion.p>
            <motion.div
                initial={{opacity: 0, scale: 0.8}}
                animate={{opacity: 1, scale: 1}}
                transition={{delay: 0.6, duration: 0.5}}
            >
                <Link href="/">
                    <Button
                        className="mt-6 px-6 py-3 text-lg font-semibold bg-white text-blue-600 rounded-lg shadow-lg hover:bg-gray-200 transition-all">
                        Quay lại trang chủ
                    </Button>
                </Link>
            </motion.div>
        </div>
    );
}