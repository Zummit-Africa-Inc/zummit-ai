import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import ReactGA from "react-ga4"

export const usePageTracker = () => {
  const location = useLocation()

  useEffect(() => {
    ReactGA.ga("set", "page", location.pathname)
    ReactGA.ga("send", "pageview")
  },[location])
}