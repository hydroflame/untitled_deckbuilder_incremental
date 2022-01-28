import LinearProgress, {
  LinearProgressProps,
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
// First we need to redeclare LinearProgress to add a prop.
interface WithColor {
  xcolor: string;
}

type ResourceLinearProgressProps = LinearProgressProps & WithColor;

function ResourceLinearProgress(
  props: ResourceLinearProgressProps
): React.ReactElement {
  return <LinearProgress {...props} />;
}

export const ResourceBar = styled(ResourceLinearProgress)(
  ({ theme, xcolor }) => ({
    height: 20,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    width: "100%",
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[400],
    },
    [`& .${linearProgressClasses.bar}`]: {
      backgroundColor: xcolor,
    },
  })
);
