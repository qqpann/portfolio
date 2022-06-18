import { Footer } from './Footer'

type Props = {
  children: React.ReactNode
}
export const Layout = ({ children }: Props) => {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}
