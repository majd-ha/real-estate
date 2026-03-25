import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLink({ children, is_active = false, props }) {
    return (
        <Link {...props} className={` ${is_active ? "text-[#9a442d] dark:text-[#e07a5f] border-b-2 border-[#9a442d] pb-1" : " text-[#2c2c2c] dark:text-[#fafaf5] opacity-70 hover:opacity-100"}   hover:text-[#9a442d] transition-all duration-300`}>{children}</Link>
    )
}
