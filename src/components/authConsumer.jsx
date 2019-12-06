import React from "react";
import {AuthContext} from "../app.jsx";


const authConsumer = (WrappedComponent) => {
  return class extends React.PureComponent{
      static displayName = "authconsumer-hoc";
      render(){
          return (
            <AuthContext.Consumer>
                {
                    (value) => <WrappedComponent {...this.props} {...value}/>
                }
            </AuthContext.Consumer>
          );
      }
  };
};

export default authConsumer; 