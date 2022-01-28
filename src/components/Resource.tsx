import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { ResourceBar } from "./ResourceLinearProgress";

interface IProps {
  color: string;
  v: number;
  max: number;
}

export function Resource({ v, max, color }: IProps): React.ReactElement {
  return (
    <Tooltip
      title={
        <Typography>
          {v} / {max}
        </Typography>
      }
    >
      <div>
        <ResourceBar
          xcolor={color}
          variant="determinate"
          value={(v / max) * 100}
        />
      </div>
    </Tooltip>
  );
}
