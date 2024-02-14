import './globals.css'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import SubHeader from '@/components/common/SubHeader'
import { Metadata } from 'next';
import { customMetadata } from '@/utils/metadata';

export const runtime = 'edge' // 'nodejs' (default) | 'edge'

export const metadata: Metadata = customMetadata({
  title: 'MK勉強記'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>  
        <Header />
        <SubHeader />
        <div className='z-10'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
