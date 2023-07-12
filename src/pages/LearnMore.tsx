
import { Footer, Navbar } from "components"
import { usePageTitle } from "hooks"

const LearnMore = () => {
  usePageTitle("Learn More")
  
  return (
    <>
    <Navbar />
    <Footer />
    </>
  )
}

export default LearnMore