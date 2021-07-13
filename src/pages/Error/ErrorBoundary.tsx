import React from "react"
import Error from "."

type Props = { location: any; fullScreen?: boolean }
type State = {
  hasError: boolean
  error?: Error
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidUpdate(prevProps: any) {
    if (this.props.location !== prevProps.location) {
      this.setState({ hasError: false })
    }
  }

  render() {
    return (
      <Error
        showError={this.state.hasError}
        heading="Произошла ошибка"
        content={
          <React.Fragment>
            <div>
              {this.state.error?.message ??
                "Не удалось обработать полученные данные."}
            </div>
          </React.Fragment>
        }
        buttons={["refresh"]}
      >
        {this.props.children}
      </Error>
    )
  }
}
