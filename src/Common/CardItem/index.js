import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const CardItem = styled(Paper)(({theme, cardbackground, cardtext, cardborder, cardpadding }) => ({
  backgroundColor: cardbackground ? cardbackground : theme.palette['--theme-font-color__primary'][theme.palette.mode],
  padding: cardpadding ? cardpadding : theme.spacing(3),
  boxShadow: 'unset',
  color: cardtext ? cardtext : theme.palette['--theme-font-color__tertiary'][theme.palette.mode],
  border: cardborder ? cardborder : "unset",
}));

export default CardItem