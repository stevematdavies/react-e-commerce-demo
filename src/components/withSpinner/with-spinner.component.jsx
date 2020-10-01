import React from 'react'
import {SpinnerContainer, SpinnerOverlay} from "./with-spinner.styles";

const withSpinner = (isLoading, props) =>
  (WrappedComponent) =>
    isLoading
      ? <SpinnerOverlay>
          <SpinnerContainer/>
        </SpinnerOverlay>
      : <WrappedComponent {...props} />

export default withSpinner
