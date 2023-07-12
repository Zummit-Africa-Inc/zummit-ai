
import { Footer, Navbar } from "components"
import { usePageTitle } from "hooks"

const Portfolio = () => {
  usePageTitle("Portfolio")

  return (
    <>
    <Navbar />
    <Footer />
    </>
  )
}

export default Portfolio