// Write your code here.
import './index.css'

const Banner = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <li className={className}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="card-descrption">{description}</p>
        <button type="button" className="card-button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default Banner
