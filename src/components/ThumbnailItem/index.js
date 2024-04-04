import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onChangeImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  const onImageChange = () => {
    onChangeImage(id)
  }
  const thumbnaliClassName = isActive ? 'activeThumb' : 'thumbnali'
  return (
    <li className="list-item">
      <button type="button" onClick={onImageChange} className="img-btn">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnaliClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
