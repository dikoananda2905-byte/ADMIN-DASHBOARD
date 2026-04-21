import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2 } from "lucide-react"
import { Link } from "react-router-dom"

import { Button } from "../ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "../ui/card"

const loginSchema = z.object({
  email: z.string().email({ message: "Email tidak valid." }),
  password: z.string().min(6, { message: "Password minimal 6 karakter." }),
})

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values) {
    setIsLoading(true)
    setTimeout(() => {
      console.log(values)
      setIsLoading(false)
    }, 1500)
  }

  return (
    <Card className="shadow-lg border-blue-100">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-blue-900 text-center">Login</CardTitle>
        <CardDescription className="text-center text-blue-600/80">
          Masukkan email dan password untuk masuk ke dashboard
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-blue-900 font-medium">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="admin@example.com"
                      className="border-blue-200 focus-visible:ring-blue-500 bg-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-blue-900 font-medium">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="******"
                      className="border-blue-200 focus-visible:ring-blue-500 bg-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md shadow-blue-600/20"
              disabled={isLoading}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isLoading ? "Memproses..." : "Masuk"}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-center flex-col gap-2 text-sm text-blue-600/70 pb-6">
        <div className="text-sm text-blue-900">
          Belum punya akun?{" "}
          <Link to="/register" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
            Daftar di sini
          </Link>
        </div>
        <span>&copy; 2026 Kelompok B - 15</span>
      </CardFooter>
    </Card>
  )
}
