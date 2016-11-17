const React = require('react');

class Product extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <h2>{this.props.producer}</h2>
        <h2>{this.props.hasWatermark}</h2>
        <h2>{this.props.color}</h2>
        <h2>{this.props.weight}</h2>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName) => {
    const weight = props[propName];

    if (weight === undefined) {
      return new Error('The `weight` prop is required.');
    }

    if (isNaN(weight)) {
      return new Error('The `weight` prop is not a number.');
    }

    const weightValid = weight > 80 && weight < 300;

    if (!weightValid) {
      return new Error('The `weight` prop should range between 80 and 300.');
    }
  }
};

module.exports = Product;
