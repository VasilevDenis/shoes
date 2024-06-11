import './IconSwitch.css';

function IconSwitch( { icon, onSwitch } ) {
    return <div className="material-icons md-48 icon" onClick={ onSwitch }>{ icon }</div>
}

export default IconSwitch