import { Link } from "react-router-dom"
import { Plus, Edit, Search as ViewIcon, Trash2 } from "lucide-react"
import { Button } from "../../components/ui/button"
import { DataTable } from "../../components/ui/data-table"

const DUMMY_USERS = Array.from({ length: 25 }).map((_, i) => ({
  id: i + 1,
  username: `user_${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: i === 0 ? "Admin" : "User",
}))

export const columns = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    id: "actions",
    header: "Aksi",
    meta: {
      className: "text-center w-[150px]"
    },
    cell: ({ row }) => {
      const user = row.original

      return (
        <div className="flex items-center justify-center space-x-2">
          <Button variant="ghost" size="icon" asChild>
            <Link to={`/dashboard/users/edit/${user.id}`}>
              <Edit className="h-4 w-4 text-blue-500" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link to={`/dashboard/users/view/${user.id}`}>
              <ViewIcon className="h-4 w-4 text-green-500" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" onClick={() => console.log('Delete', user.id)}>
            <Trash2 className="h-4 w-4 text-red-500" />
          </Button>
        </div>
      )
    },
  },
]

export default function UsersPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Users</h2>
        <Button asChild>
          <Link to="/dashboard/users/create">
            <Plus className="mr-2 h-4 w-4" /> Tambah User
          </Link>
        </Button>
      </div>

      <DataTable columns={columns} data={DUMMY_USERS} searchPlaceholder="Cari user..." />
    </div>
  )
}
