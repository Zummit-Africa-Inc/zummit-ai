
import { Footer, Navbar } from "components"
import { usePageTitle } from "hooks"

const Contact = () => {
  usePageTitle("Contact Us")

  return (
    <>
    <Navbar />
    <Footer />
    </>
  )
}

export default Contact