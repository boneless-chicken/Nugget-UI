import React from "react";
import { Paper } from "@material-ui/core";

interface Props {
  children?: JSX.Element[] | JSX.Element | string;
}

export default function PaperBase(props: Props) {
  return <Paper>{props.children}</Paper>;
}