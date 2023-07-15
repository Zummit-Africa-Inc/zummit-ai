
import { Footer, Navbar, PaddedBlock } from "components"
import { usePageTitle, useScrollToTop } from "hooks"

const Internship = () => {
  usePageTitle("Internship")
  useScrollToTop()
  
  return (
    <>
    <Navbar />
    <PaddedBlock>
      hello
    </PaddedBlock>
    <Footer />
    </>
  )
}

export default Internship