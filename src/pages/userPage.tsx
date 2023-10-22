import Header from '@/components/ui/header/header'
import Menu from '@/components/ui/menu/menu'
import SectionContent from '@/components/ui/sectionContent/sectionContent'

const UserPage = () => {
  return (
    <main className="container">
      <Menu />
      <SectionContent>
        <Header />
        <h2>User page</h2>
        <div></div>
      </SectionContent>
    </main>
  )
}
export default UserPage
