import { Link, useNavigate } from "react-router-dom"
import { ChevronLeft } from "lucide-react"

import { Button } from "../../components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card"
import { UserForm } from "./components/user-form"

export default function UserCreatePage() {
  const navigate = useNavigate()

  function onSubmit(values) {
    console.log("User terdaftar:", values)
    navigate("/dashboard/users")
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" asChild>
          <Link to="/dashboard/users">
            <ChevronLeft className="h-5 w-5" />
          </Link>
        </Button>
        <h2 className="text-3xl font-bold tracking-tight">Tambah User</h2>
      </div>

      <div className="max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Data User Baru</CardTitle>
          </CardHeader>
          <CardContent>
            <UserForm onSubmit={onSubmit} isEdit={false} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
