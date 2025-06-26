import Footer from "@/app/components/ui/footer"
import Header from "@/app/components/ui/header"
import s from "./category.module.scss";



const CategoryLayout = ({ children }) => {

  return (

    <div className = { s.test2 }>

      <Header />

      <main >

        {children}

      </main>

      <Footer />
      
    </div>

  )
}

export default CategoryLayout
