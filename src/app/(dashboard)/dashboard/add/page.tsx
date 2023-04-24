import { FC } from 'react'
import AddFriendButton from '@/components/AddFriendButton'

interface pageProps {
  
}

const page: FC = () => {
  return <main className='pt-8'>
    <h1 className='font-bold text-5x1 mb-8'>Add a friend</h1>
    <AddFriendButton />
  </main>
}

export default page