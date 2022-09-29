import React, { ReactNode } from "react"

type AboutPropsType={
    children:React.ReactNode
}
const About:React.FC<AboutPropsType> = ({children}) => {
  return (
    <>
    <h5>About here</h5>
    {children}
    </>
  )
}

export default About