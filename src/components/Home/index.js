import Header from '../Header'

import './index.css'

const Home = props => {
  const {history} = props

  const onClickOfFindJobs = () => {
    history.push('/jobs')
    // return <Redirect to="/jobs"/>
  }

  return (
    <div className="home-bg-container">
      <Header />
      <div className="app-info-container">
        <h1 className="app-info-heading">Find The Job That Fits Your Life.</h1>
        <p className="app-info-para">
          Millions of people are searching for jobs,salary information, company
          reviews. Find the job that fits your abilities and potential.
        </p>
        <button onClick={onClickOfFindJobs} type="button">
          Find Jobs
        </button>
      </div>
    </div>
  )
}

export default Home
