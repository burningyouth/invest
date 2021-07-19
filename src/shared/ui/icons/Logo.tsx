import GraphDonut from "@spectrum-icons/workflow/GraphDonut"

export type LogoProps = {
  size?: "S" | "M" | "L"
}

export default ({ size }: LogoProps) => {
  return <GraphDonut aria-label="Logo" size={size} />
}
