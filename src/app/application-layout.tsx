'use client'

import {Sidebar, SidebarBody, SidebarItem, SidebarLabel, SidebarSection,} from '@/components/sidebar'
import {SidebarLayout} from '@/components/sidebar-layout'

import {Cog6ToothIcon, HomeIcon, Square2StackIcon, TicketIcon,} from '@heroicons/react/20/solid'
import {usePathname} from 'next/navigation'

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
            navbar={}
        >
            {children}
        </SidebarLayout>
    )
}
