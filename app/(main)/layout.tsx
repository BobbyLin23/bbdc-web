export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto h-full max-w-2xl border-x md:max-w-4xl">
      {children}
    </div>
  )
}
