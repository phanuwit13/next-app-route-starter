import FormLogin from '@/components/Pages/Login/FormLogin/FormLogin'

interface Props {}

const LoginPage = (props: Props) => {
  return (
    <div className='max-w-[425px] m-auto mt-10 border p-8'>
      login page
      <FormLogin />
    </div>
  )
}

export default LoginPage
