import React from 'react'
import {Link} from 'react-router-dom'

// import WhitelistedInstructions from '../../components/WhitelistedInstructions'
// import NotWhitelisted from '../../components/NotWhitelisted'

export const Home = (props) => (
  <div className="pure-g">
    <div className="pure-u-1-1">
      <p>
        Are you an investor with Shopin? Check with your investor group for a unique url for your group. If you're unsure who that is, contact us!
      </p>
    </div>
    <div className="pure-u-1-1">
      <p>
        If you're a syndicate and you have not received token factory of your own, head over to the syndicate page: <Link to="/syndicate">/syndicate</Link>.
      </p>
    </div>
  </div>
)

export default Home