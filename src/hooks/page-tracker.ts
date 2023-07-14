import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import ReactGA from "react-ga"

export const usePageTracker = () => {
  const location = useLocation()

  useEffect(() => {
    ReactGA.pageview(location.pathname)
  },[location])
}