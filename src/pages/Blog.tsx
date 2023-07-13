
import { usePageTitle, useScrollToTop } from "hooks"
import { Footer, Navbar } from "components"

const Blog = () => {
  usePageTitle("Blog")
  useScrollToTop()

  return (
    <>
    <Navbar />
    <Footer />
    </>
  )
}

export default Blog