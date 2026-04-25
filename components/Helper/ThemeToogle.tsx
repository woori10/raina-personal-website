"use client";
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeToogle = () => {
    
    const [mounted, SetMounted]= useState(false);
    const {theme, setTheme, systemTheme} = useTheme();

    useEffect(() => {
        const mountCheck = () => {
            SetMounted(true);
        };
        mountCheck();
    }, []);

    if (!mounted) return null;


    const currentTheme = theme === "system" ? systemTheme : theme ;
    
    return (
        <button
            onClick={()=> setTheme(currentTheme === "dark"?"light":"dark")}
            className='p-2 transition w-10 h-10n cursor-pointer bg-gray-800 dark:bg-white rounded-lg flex flex-col items-center justify-center'
        >
            {currentTheme === "dark"? (
                <Sun className='text-black w-7  h-7 cursor-pointer'/>
            ):(
                <Moon className='text-white w-7  h-7 cursor-pointer'/>
            )}
        </button>
    );
};

export default ThemeToogle