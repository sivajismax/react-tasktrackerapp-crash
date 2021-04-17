import PropTypes from 'prop-types';


const Button = ({ text, color, onClick}) => {
    return(
        <button className="btn" style={{backgroundColor: color }} 
          onClick={onClick}>
            {text}
        </button>
    );
}

//Default values to set if not in props
Button.defaultTypes = {
    text: 'Add',
    color: '',
}

//Dynamic values from props
Button.propTypes= {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}


export default Button;
