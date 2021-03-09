import React, {Component} from 'react';
require('../../scss/style.scss');

class App extends Componenet {
    render(){
        return(
            <div>
                This is our app
                {this.props.children}
            </div>
        )
}
}

export default App;
