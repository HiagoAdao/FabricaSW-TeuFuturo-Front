const buttonStyle = {
  button: {
    minHeight: "auto",
    minWidth: "auto",
    backgroundColor: 'gray',
    color: 'white',
    boxShadow: 'gray',
    border: "none",
    borderRadius: "3px",
    position: "relative",
    padding: "12px 30px",
    margin: ".3125rem 1px",
    fontSize: "12px",
    fontWeight: "400",
    textTransform: "uppercase",
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    transition:
      "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    lineHeight: "1.42857143",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    "&:hover,&:focus": {
      color: 'white',
      backgroundColor: 'gray',
      boxShadow: 'gray'
    },
    "& .fab,& .fas,& .far,& .fal, &.material-icons": {
      position: "relative",
      display: "inline-block",
      top: "0",
      marginTop: "-1em",
      marginBottom: "-1em",
      fontSize: "1.1rem",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "& svg": {
      position: "relative",
      display: "inline-block",
      top: "0",
      width: "18px",
      height: "18px",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        marginTop: "0px",
        position: "absolute",
        width: "100%",
        transform: "none",
        left: "0px",
        top: "0px",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px"
      }
    }
  },
  white: {
    "&,&:focus,&:hover": {
      backgroundColor: 'white',
      color: 'gray'
    }
  },
  rose: {
    backgroundColor: 'rose',
    boxShadow: 'rose',
    "&:hover,&:focus": {
      backgroundColor: 'rose',
      boxShadow: 'rose'
    }
  },
  primary: {
    backgroundColor: '#685AA4',
    boxShadow: '#685AA4',
    "&:hover,&:focus": {
      backgroundColor: '#685AA4',
      boxShadow:'#685AA4'
    }
  },
  info: {
    backgroundColor: '#685AA4',
    boxShadow: '#685AA4',
    "&:hover,&:focus": {
      backgroundColor: '#685AA4',
      boxShadow: '#685AA4' // infoColor
    }
  },
  success: {
    backgroundColor: "#09C774",
    boxShadow: "#09C774",
    "&:hover,&:focus": {
      backgroundColor: "#09C774",
      boxShadow: "#09C774"
    }
  },
  warning: {
    backgroundColor: '#313',
    boxShadow: '#313',
    "&:hover,&:focus": {
      backgroundColor: '#313',
      boxShadow: '#313'
    }
  },
  danger: {
    backgroundColor: '#313',
    boxShadow: '#313',
    "&:hover,&:focus": {
      backgroundColor: '#313',
      boxShadow: '#313'
    }
  },
  simple: {
    "&,&:focus,&:hover": {
      color: 'white',
      background: "transparent",
      boxShadow: "none"
    },
    "&$rose": {
      "&,&:focus,&:hover,&:visited": {
        color: 'rose'
      }
    },
    "&$primary": {
      "&,&:focus,&:hover,&:visited": {
        color: '#685AAA'
      }
    },
    "&$info": {
      "&,&:focus,&:hover,&:visited": {
        color: '#121547'
      }
    },
    "&$success": {
      "&,&:focus,&:hover,&:visited": {
        color: '#09C774'
      }
    },
    "&$warning": {
      "&,&:focus,&:hover,&:visited": {
        color: '#313'
      }
    },
    "&$danger": {
      "&,&:focus,&:hover,&:visited": {
        color: '#313'
      }
    }
  },
  transparent: {
    "&,&:focus,&:hover": {
      color: "inherit",
      background: "transparent",
      boxShadow: "none"
    }
  },
  disabled: {
    opacity: "0.65",
    pointerEvents: "none"
  },
  lg: {
    padding: "1.125rem 2.25rem",
    fontSize: "0.875rem",
    lineHeight: "1.333333",
    borderRadius: "0.2rem"
  },
  sm: {
    padding: "0.40625rem 1.25rem",
    fontSize: "0.6875rem",
    lineHeight: "1.5",
    borderRadius: "0.2rem"
  },
  round: {
    borderRadius: "30px"
  },
  block: {
    width: "100% !important"
  },
  link: {
    "&,&:hover,&:focus": {
      backgroundColor: "transparent",
      color: 'gray',
      boxShadow: "none"
    }
  },
  justIcon: {
    paddingLeft: "12px",
    paddingRight: "12px",
    fontSize: "20px",
    height: "41px",
    minWidth: "41px",
    width: "41px",
    "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
      marginRight: "0px"
    },
    "&$lg": {
      height: "57px",
      minWidth: "57px",
      width: "57px",
      lineHeight: "56px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "32px",
        lineHeight: "56px"
      },
      "& svg": {
        width: "32px",
        height: "32px"
      }
    },
    "&$sm": {
      height: "30px",
      minWidth: "30px",
      width: "30px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "17px",
        lineHeight: "29px"
      },
      "& svg": {
        width: "17px",
        height: "17px"
      }
    }
  }
};

export default buttonStyle;
