import ReactGA from "react-ga"

export const useEventTracker = (category: string) => {
  const eventTracker = (action: string, label: string) => {
    ReactGA.event({category, action, label})
  }
  return eventTracker
}