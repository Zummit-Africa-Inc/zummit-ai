import { FiFacebook, FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi"

export const NAVIGATION = [
  {label: 'What you get', url: '/learn-more'},
  {label: 'Internship', url: '/internship'},
  {label: 'Blog', url: '/blog'},
]

export const FOOOTER = [
  {title: 'Et sed vel', menu: [
    {label: 'accumsan ', url: '/'},
    {label: 'hendrerit enim ', url: '/'},
    {label: 'eu est eu  ', url: '/'},
  ]},
  {title: 'Know more', menu: [
    {label: 'blog', url: '/blog'},
    {label: 'internship', url: '/internship'},
    {label: 'what you get', url: '/learn-more'},
  ]},
  {title: 'Get in touch', menu: [
    {label: 'contact us', url: '/contact-us'},
    {label: 'contact@zummitafrica.com', url: 'mailto:contact@zummitafrica.com'},
    {label: 'phone number', url: 'tel:'},
  ]},
]

export const COMMUNITY = [
  {icon: <FiLinkedin />, url: "https://linkedin.com/company/zummit-africa/"},
  {icon: <FiFacebook />, url: "https://facebook.com/"},
  {icon: <FiTwitter />, url: "https://twitter.com/zummitafrica"},
  {icon: <FiInstagram />, url: "https://instagram.com/"},
]