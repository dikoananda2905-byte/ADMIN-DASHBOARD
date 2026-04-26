import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Link } from "react-router-dom"
import { Button } from "../../../components/ui/button"
import { Eye, EyeOff } from "lucide-react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
} from "../../../components/ui/alert-dialog"

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../../../components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form"
import { Input } from "../../../components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username minimal 2 karakter.",
  }),
  email: z.string().email({
    message: "Email tidak valid.",
  }),
  password: z.string().optional(),
  confirmPassword: z.string().optional(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Konfirmasi password tidak cocok.",
  path: ["confirmPassword"],
})

export function UserForm({ defaultValues, onSubmit, isEdit }) {
  const [openDialog, setOpenDialog] = useState(false)
  const [formData, setFormData] = useState(null)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues || {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  const handleSubmit = (values) => {
    if (!isEdit && !values.password) {
      form.setError("password", { type: "manual", message: "Password minimal 6 karakter." })
      return
    }
    const { confirmPassword, ...submitData } = values
    setFormData(submitData)
    setOpenDialog(true)
  }

  const handleConfirm = () => {
    setOpenDialog(false)
    if (formData) {
      onSubmit(formData)
    }
  }

  return (
    <>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
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
              <FormLabel>{isEdit ? "Password Baru (Opsional)" : "Password"}</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input type={showPassword ? "text" : "password"} placeholder={isEdit ? "Biarkan kosong jika tidak ingin ubah" : "*****"} {...field} />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4 text-muted-foreground" /> : <Eye className="h-4 w-4 text-muted-foreground" />}
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Konfirmasi Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input type={showConfirmPassword ? "text" : "password"} placeholder={isEdit ? "Ulangi password baru" : "Ulangi password"} {...field} />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4 text-muted-foreground" /> : <Eye className="h-4 w-4 text-muted-foreground" />}
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-end space-x-2">
          <Button variant="outline" asChild>
            <Link to="/dashboard/users">Batal</Link>
          </Button>
          <Button type="submit">{isEdit ? "Update" : "Simpan"}</Button>
        </div>
      </form>
    </Form>

    <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
      <AlertDialogContent className="p-0 border-none bg-transparent shadow-none w-full max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>{isEdit ? "Konfirmasi Update" : "Konfirmasi Simpan"}</CardTitle>
          </CardHeader>
          <CardContent>
            {isEdit 
              ? "Apakah Anda yakin ingin menyimpan perubahan data user ini?" 
              : "Apakah Anda yakin ingin menyimpan data user baru ini?"}
          </CardContent>
          <CardFooter className="flex justify-end space-x-2">
            <AlertDialogCancel asChild>
              <Button variant="outline">Batal</Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button onClick={handleConfirm} className="bg-blue-600 hover:bg-blue-700">
                {isEdit ? "Update" : "Simpan"}
              </Button>
            </AlertDialogAction>
          </CardFooter>
        </Card>
      </AlertDialogContent>
    </AlertDialog>
    </>
  )
}
