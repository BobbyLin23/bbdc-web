import { auth } from '@/auth'
import { ModeToggle } from '@/components/mode-toggle'
import { UserButton } from '@/components/user-button'

export const Header = async () => {
  const session = await auth()

  if (!session?.user) {
    return null
  }

  return (
    <header className="flex w-full items-center justify-between px-4">
      <UserButton imageUrl={session.user.image} />

      <ModeToggle />
    </header>
  )
}
