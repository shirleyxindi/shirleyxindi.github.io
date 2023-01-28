import * as React from 'react'
import NavBar from "../components/navbar";
import About from "../components/about";
import Front from "../components/front";

const IndexPage = () => {
  return (
      <div>
          {/*<NavBar/>*/}
          <Front/>
          {/*<About/>*/}
      </div>
  )
}

export const Head = () => <title>Shirley Li</title>

export default IndexPage