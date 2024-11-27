'use client'

import {DropdownDivider, DropdownItem, DropdownLabel, DropdownMenu,} from '@/components/dropdown'
import {Sidebar, SidebarBody, SidebarItem, SidebarLabel, SidebarSection,} from '@/components/sidebar'
import {SidebarLayout} from '@/components/sidebar-layout'
import {
    ArrowRightStartOnRectangleIcon,
    LightBulbIcon,
    ShieldCheckIcon,
    UserCircleIcon,
} from '@heroicons/react/16/solid'
import {Cog6ToothIcon, HomeIcon, Square2StackIcon, TicketIcon,} from '@heroicons/react/20/solid'
import {usePathname} from 'next/navigation'
import {Mission} from "@/app/lib/definitions";
import {fetchMission} from "@/app/lib/data";
import {useState} from "react";

function AccountDropdownMenu({anchor}: { anchor: 'top start' | 'bottom end' }) {
    return (
        <DropdownMenu className="min-w-64" anchor={anchor}>
            <DropdownItem href="#">
                <UserCircleIcon/>
                <DropdownLabel>My account</DropdownLabel>
            </DropdownItem>
            <DropdownDivider/>
            <DropdownItem href="#">
                <ShieldCheckIcon/>
                <DropdownLabel>Privacy policy</DropdownLabel>
            </DropdownItem>
            <DropdownItem href="#">
                <LightBulbIcon/>
                <DropdownLabel>Share feedback</DropdownLabel>
            </DropdownItem>
            <DropdownDivider/>
            <DropdownItem href="#">
                <ArrowRightStartOnRectangleIcon/>
                <DropdownLabel>Sign out</DropdownLabel>
            </DropdownItem>
        </DropdownMenu>
    )
}

export function ApplicationLayout({
                                      children
                                  }: {
    children: React.ReactNode
}) {
    let pathname = usePathname()

    return (
        <SidebarLayout
            sidebar={
                <Sidebar>
                    <SidebarBody>
                        <SidebarSection>
                            <SidebarItem href="/" current={pathname === '/'}>
                                <HomeIcon/>
                                <SidebarLabel>Briefing</SidebarLabel>
                            </SidebarItem>
                            <SidebarItem href="/mission1" current={pathname.startsWith('/mission1')}>
                                <Square2StackIcon/>
                                <SidebarLabel>Mission 1 - Old but gold</SidebarLabel>
                            </SidebarItem>
                            <SidebarItem href="/orders" current={pathname.startsWith('/orders')}>
                                <TicketIcon/>
                                <SidebarLabel>Orders</SidebarLabel>
                            </SidebarItem>
                            <SidebarItem href="/settings" current={pathname.startsWith('/settings')}>
                                <Cog6ToothIcon/>
                                <SidebarLabel>Settings</SidebarLabel>
                            </SidebarItem>
                        </SidebarSection>
                    </SidebarBody>
                </Sidebar>
            }
        >
            {children}
        </SidebarLayout>
    )
}
