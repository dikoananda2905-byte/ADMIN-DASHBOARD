import { useState } from "react"
import { Link } from "react-router-dom"
import { Plus, Search, ChevronLeft, ChevronRight, Edit, Trash2 } from "lucide-react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"

const DUMMY_USERS = Array.from({ length: 25 }).map((_, i) => ({
  id: i + 1,
  username: `user_${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: i === 0 ? "Admin" : "User",
}))

const ITEMS_PER_PAGE = 5

export default function UsersPage() {
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)

  const filteredUsers = DUMMY_USERS.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  )

  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE)
  const paginatedUsers = filteredUsers.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  )

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Users</h2>
        <Button asChild>
          <Link to="/users/create">
            <Plus className="mr-2 h-4 w-4" /> Tambah User
          </Link>
        </Button>
      </div>

      <div className="flex items-center space-x-2 py-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Cari user..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setPage(1) // Reset page on search
            }}
            className="pl-8"
          />
        </div>
      </div>

      <div className="rounded-md border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-center w-[150px]">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedUsers.length > 0 ? (
              paginatedUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.id}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell className="text-center space-x-2">
                    <Button variant="ghost" size="icon" asChild>
                      <Link to={`/users/edit/${user.id}`}>
                        <Edit className="h-4 w-4 text-blue-500" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <Link to={`/users/view/${user.id}`}>
                        <Search className="h-4 w-4 text-green-500" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => console.log('Delete', user.id)}>
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  Data tidak ditemukan.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page <= 1}
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Previous
        </Button>
        <span className="text-sm text-muted-foreground mx-4">
          Halaman {page} dari {Math.max(1, totalPages)}
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page >= totalPages || totalPages === 0}
        >
          Next
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </div>
  )
}
