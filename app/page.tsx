import { auth } from '@/auth'
import { UserButton } from '@/components/user-button'

export default async function Home() {
  const session = await auth()

  if (!session?.user) return null

  return (
    <div className="p-2">
      Hello World
      <UserButton imageUrl={session.user.image} />
    </div>
  )
}
