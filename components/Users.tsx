import Link from 'next/link'
import React from 'react'

interface userData{
    userData:any;
}
const Users:React.FC<userData> = ({userData}) => {
  return (
    <div className='grid sm:grid-cols-2 mx-4'>
        {
            userData?.map((user:any)=>(
                <li key={user.id}>
                    <Link href={`/bar/${user.login}`}>{user.login}</Link>
                </li>
            ))
        }
    </div>
  )
}

export default Users