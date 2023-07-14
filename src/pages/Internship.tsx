
import { usePageTitle, useScrollToTop } from "hooks"
import { Footer, Navbar } from "components"

const Internship = () => {
  usePageTitle("Internship")
  useScrollToTop()
  
  return (
    <>
    <Navbar />
    <Footer />
    </>
  )
}

export default Internship