'use client'

import { signIn } from 'next-auth/react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
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
import { Separator } from '@/components/ui/separator'

export const authFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(20),
})

export const AuthForm = () => {
  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const handleProviderLogin = (provider: 'github' | 'google') => {
    signIn(provider, {
      callbackUrl: '/',
    })
  }

  const handleSubmit = (data: z.infer<typeof authFormSchema>) => {
    console.log(data)
  }

  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>Login to BBDC Web</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="grid gap-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="grid gap-2">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="m@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="grid gap-2">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Form>
        <Separator />
        <Button
          variant="outline"
          className="w-full"
          onClick={() => handleProviderLogin('google')}
        >
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
      </CardContent>
    </Card>
  )
}
