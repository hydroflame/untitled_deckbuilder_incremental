import MCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface IProps {
  title: string;
}

//25 x 35
export function Card({ title }: IProps): React.ReactElement {
  return (
    <MCard
      variant="outlined"
      sx={{ width: "100px", height: "140px", borderRadius: 2 }}
    >
      <CardContent>
        <Typography align="center">{title}</Typography>
      </CardContent>
    </MCard>
  );
}
