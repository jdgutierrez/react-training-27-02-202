import React, { Component, PureComponent } from 'react';

const ExtraFooter = () => {
    return <div>Extra Footer</div>;
}

class Footer extends PureComponent {
    constructor(props) {
        super(props);
    
    }
   render() {
       console.log('Footer', this.props.key);
       return <React.Fragment><div>
           {this.props.children}
       </div><div>asda</div></React.Fragment>;
   }
}
export { ExtraFooter };

export default Footer;