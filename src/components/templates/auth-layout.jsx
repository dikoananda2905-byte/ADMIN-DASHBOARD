export function AuthLayout({ children }) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6 md:p-10 bg-slate-50">
      <div className="w-full max-w-sm">
        {children}
      </div>
    </div>
  )
}
