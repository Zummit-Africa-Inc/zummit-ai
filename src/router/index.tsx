import { Route, Routes } from "react-router-dom"
import { Suspense } from "react"

import { Blog, Contact, Home, Internship, LearnMore } from "pages"
import { useConcurrentTransition } from "hooks"
import { Loader } from "components"

const Router = () => {
  const location = useConcurrentTransition()

  return (
    <Suspense fallback={<Loader />}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/internship" element={<Internship />} />
      </Routes>
    </Suspense>
  )
}

export default Router