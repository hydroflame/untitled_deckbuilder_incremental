import { IEnemy } from "../IEnemy";
import Typography from "@mui/material/Typography";
import { Resource } from "./Resource";

interface IProps {
  enemy: IEnemy;
}

export function Enemy({ enemy }: IProps): React.ReactElement {
  return (
    <>
      <Typography>{enemy.name}</Typography>
      <Resource color={"#f00"} v={enemy.currentHP} max={enemy.maxHP} />
    </>
  );
}
