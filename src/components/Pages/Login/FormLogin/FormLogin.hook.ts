import { useLogin } from '@/services/auth/auth'
import { useAuth } from '@/store/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schemaFormLogin = z.object({
  username: z.string().trim().min(1, {
    message: 'please enter Username',
  }),
  password: z.string().trim().min(1, {
    message: 'please enter Password',
  }),
})

type SchemaFormInput = z.infer<typeof schemaFormLogin>

const useFormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaFormInput>({
    resolver: zodResolver(schemaFormLogin),
  })

  const { login } = useAuth()
  const mutateLogin = useLogin()

  const form = {
    fieldUsername: register('username'),
    fieldPassword: register('password'),
    errors,
  }

  const onLogin = (v: SchemaFormInput) => {
    mutateLogin.mutateAsync(
      { username: v.username, password: v.password },
      {
        onSuccess: ({ data }) => {
          const user = {
            username: data.username,
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            gender: data.gender,
            image: data.image,
            permission: [],
          }
          login({
            user: user,
            token: data.token,
            redirectUri: '/',
          })
        },
        onError: (error) => {
          alert(`error ${error.message}`)
        },
      }
    )
  }

  return { form, handleSubmit: handleSubmit(onLogin) }
}

export { useFormLogin }

