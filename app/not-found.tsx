import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='text-center'>
      <h2 className='text-2xl'>Not Found</h2>
      <p className='text-2xl'>ページが存在しません。</p>
      <Link className='text-blue-700' href="/">ホームに戻る</Link>
    </div>
  )
}