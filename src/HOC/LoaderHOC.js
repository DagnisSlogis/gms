// @flow
import React, { Component } from "react";
import { isEmpty } from "lodash";

const LoaderHOC = (propName: any) => (WrapperComponent: any) => {
  type Props = {
    propName: any
  };

  return class LoaderHOC extends Component<Props> {
    render() {
      return isEmpty(this.props[propName]) ? (
        <div>is Loading</div>
      ) : (
        <WrapperComponent {...this.props} />
      );
    }
  };
};

export default LoaderHOC;
