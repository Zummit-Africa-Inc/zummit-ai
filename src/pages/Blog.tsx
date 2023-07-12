
import { Footer, Navbar } from "components"
import { usePageTitle } from "hooks"

const Blog = () => {
  usePageTitle("Blog")

  return (
    <>
    <Navbar />
    <Footer />
    </>
  )
}

export default Blog