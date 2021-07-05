import { Grid } from "@adobe/react-spectrum"
import Header from "./Header"
import MainContent from "./MainContent"

export type LayoutProps = {
  children:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>[]
}

export default ({ children }: LayoutProps) => {
  return (
    <Grid columns={["100%"]} rows={["50px", "100%"]} height="100%">
      <Header />
      <MainContent>{children}</MainContent>
    </Grid>
  )
}
