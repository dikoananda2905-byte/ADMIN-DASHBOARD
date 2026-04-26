import { Link, useNavigate, useParams } from "react-router-dom"
import { ChevronLeft } from "lucide-react"

import { Button } from "../../components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card"
import { UserForm } from "./components/user-form"

export default function UserEditPage() {
  const navigate = useNavigate()
  const { id } = useParams()

  const defaultValues = {
    username: `user_${id}`,
    email: `user${id}@example.com`,
    password: "",
  }

  function onSubmit(values) {
    console.log("User diupdate:", values)
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
        <h2 className="text-3xl font-bold tracking-tight">Edit User</h2>
      </div>

      <div className="max-w-2xl">
        <Card className="rounded-lg">
          <CardHeader>
            <CardTitle>Update Data User ID: {id}</CardTitle>
          </CardHeader>
          <CardContent>
            <UserForm defaultValues={defaultValues} onSubmit={onSubmit} isEdit={true} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
