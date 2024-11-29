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
                            <SidebarItem href="/mission2" current={pathname.startsWith('/mission2')}>
                                <TicketIcon/>
                                <SidebarLabel>Mission 2 - Crossroads</SidebarLabel>
                            </SidebarItem>
                            <SidebarItem href="/mission3" current={pathname.startsWith('/mission3')}>
                                <TicketIcon/>
                                <SidebarLabel>Mission 3 - Chillout</SidebarLabel>
                            </SidebarItem>
                            <SidebarItem href="/mission4" current={pathname.startsWith('/mission4')}>
                                <TicketIcon/>
                                <SidebarLabel>Mission 4 - Final encounter</SidebarLabel>
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
