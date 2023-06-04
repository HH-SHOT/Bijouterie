import './globals.css'
import Nav from './components/Nav'
import { Inter } from 'next/font/google'
import { getServerSession } from 'next-auth'
import { auth0options} from '@/pages/api/auth/[...nextauth]'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(auth0options)

  return (
    <html lang="en">
  
      <body className={inter.className}>
        <Nav user ={session?.user} expires={session?.expires as string} />
        {children}</body>
    </html>
  )
}
