
import Order from '@/components/Order'
import Link from 'next/link'
import React from 'react'


const PageDetail =  () => {
  return (
      <div>
            <h1>Page Detail app2</h1>
            <a href="/app-1" > Go to app 1</a>
            <Link href="/blog" > Go to blog</Link>
      <Order  />
    </div>
  )
}

export default PageDetail