var React = require('react');
var Navigation = require('Navigation');

var Main = (props) => {
    return (
        <div>
            <div>
                <Navigation/>
                Main.jsx rendered
                <div>
                    {props.children}    
                </div>
            </div>
        </div>            
    );
}

module.exports = Main;