import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Link, useNavigate } from "react-router-dom"
import { ChevronLeft } from "lucide-react"

import { Button } from "../components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form"
import { Input } from "../components/ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username minimal 2 karakter.",
  }),
  email: z.string().email({
    message: "Email tidak valid.",
  }),
  password: z.string().min(6, {
    message: "Password minimal 6 karakter.",
  }),
})

export default function UserCreatePage() {
  const navigate = useNavigate()
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  })

  function onSubmit(values) {
    // Log data while no real API exists
    console.log("User terdaftar:", values)
    navigate("/users")
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" asChild>
          <Link to="/users">
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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="johndoe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="*****" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center justify-end space-x-2">
                  <Button variant="outline" asChild>
                    <Link to="/users">Batal</Link>
                  </Button>
                  <Button type="submit">Simpan</Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
