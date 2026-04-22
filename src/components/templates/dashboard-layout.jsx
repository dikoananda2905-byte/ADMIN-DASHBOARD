import { Link, useLocation } from "react-router-dom"
import { Home, LayoutDashboard, Settings, Users } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "../ui/sidebar"

export function AppSidebar() {
  const location = useLocation()

  const items = [
    { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  ]

  const settings = [
    { title: "Users", url: "/users", icon: Users },
  ]

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Smart Farm Admin</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = location.pathname === item.url
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link to={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Setting</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settings.map((item) => {
                const isActive = location.pathname === item.url
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link to={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export function DashboardLayout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex-1 flex flex-col relative w-full overflow-hidden">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-background px-6">
          <SidebarTrigger />
        </header>
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </SidebarProvider>
  )
}
