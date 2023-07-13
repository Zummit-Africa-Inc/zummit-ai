
import { usePageTitle, useScrollToTop } from "hooks"
import { Footer, Navbar } from "components"

const Portfolio = () => {
  usePageTitle("Portfolio")
  useScrollToTop()

  return (
    <>
    <Navbar />
    <Footer />
    </>
  )
}

export default Portfolio