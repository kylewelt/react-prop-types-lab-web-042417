import React from 'react'
import PropTypes from 'prop-types'

class Product extends React.Component {
  render () {
    return (
      <div className='product'>
        <h1>{this.props.name}</h1>
        <p><strong>Producer: </strong>{this.props.producer}</p>
        <p><strong>Has Watermark: </strong>{this.props.hasWatermark ? 'yes' : 'no'}</p>
        <p><strong>Color: </strong>{this.props.color}</p>
        <p><strong>Weight: </strong>{this.props.weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function (props, propName) {
    if (!props[propName]) {
      return new Error(propName + ' is required.')
    }
    if (typeof props[propName] !== 'number') {
      return new Error(propName + ' must be a number.')
    }
    if ((props[propName] < 80 || props[propName] > 300)) {
      return new Error(propName + ' must be between 80 and 300.')
    }
  }
}

export default Product
