'use client'

import {Switch} from "@/components/ui/switch";
import {useTheme} from "next-themes";
import {Moon, Sun} from "lucide-react";
import {useEffect, useState} from "react";

export function SwitchTheme() {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null

    return (
        <div className="flex items-center gap-2">
            <Switch
                id="theme-toggle"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            />
            <div>
                {theme === 'dark' ? <Moon/> : <Sun/>}
            </div>
        </div>
    );
}