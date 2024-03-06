import Link from 'next/link'

type Props = {}

const PageIndex = (props: Props) => {
  return (
    <div className='space-y-2 p-8'>
      <h1>PageIndex</h1>
      <br />
      <Link className='border py-1 px-2' href='/products'>
        Product List
      </Link>
    </div>
  )
}

export default PageIndex
