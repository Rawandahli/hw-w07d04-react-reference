import React, { Component } from 'react';




class JSXInfo extends component {
    render() {
        <div>
          <h6>JSXInfo</h6>  
          <p>JSX compiles into calls to React.createElement, the React library must also always be in scope from your JSX code. For example, both of the imports are necessary in this code, even though React and CustomButton are not directly referenced from JavaScript</p>
        </div>
    }

}
export default JSXInfo;