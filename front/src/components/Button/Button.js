import React from "react";

// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import styles from "./buttonStyle";

const useStyles = makeStyles(styles);

export default function RegularButton(props) {
  const classes = useStyles();
  const {
    color,
    round,
    children,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    muiClasses,
    ...rest
  } = props;
  return (
    <Button {...rest} classes={muiClasses}>
      {children}
    </Button>
  );
}
