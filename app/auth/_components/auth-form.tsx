'use client'

import { signIn } from 'next-auth/react'

import { GithubIcon } from '@/components/icons/GithubIcon'
import { GoogleIcon } from '@/components/icons/GoogleIcon'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

export const AuthForm = () => {
  const handleProviderLogin = (provider: 'github' | 'google') => {
    signIn(provider, {
      callbackUrl: '/',
    })
  }

  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>Login to BBDC Web</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              required
              placeholder="********"
            />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Separator />
          <Button variant="outline" className="w-full">
            <GoogleIcon className="mr-2 size-4" />
            Login with Google
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => handleProviderLogin('github')}
          >
            <GithubIcon className="mr-2 size-4" />
            Login with Github
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
