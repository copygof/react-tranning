import { colors } from "@material-ui/core";
import { createMuiTheme,  } from "@material-ui/core/styles";

export const Theming = createMuiTheme({
  palette: {
    primary: {
      // main: '#ff9f2e',
    },
    secondary: {
      // main: '#ff9f2e',
    },
    error: {
      // main: '#ff9f2e',
    },
    background: {
      // default: '#ff9f2e',
      // paper: '#ff9f2e'
    },
    success: {
      // main: '#ff9f2e'
    },
    warning: {
      // main: '#ff9f2e'
    },
    info: {
      // main: '#ff9f2e'
    },
    text: {
      primary: "#3E3E3E",
      secondary: "#999BA0"
    }
  },
  typography: {
    fontFamily: [
      'Gotham-Medium',
      'Gotham-Book',
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {fontFamily: 'Gotham-Medium'},
    h2: {fontFamily: 'Gotham-Medium'},
    h3: {fontFamily: 'Gotham-Medium'},
    h4: {fontFamily: 'Gotham-Medium'},
    h5: {fontFamily: 'Gotham-Medium'},
    h6: {fontFamily: 'Gotham-Medium'},
    subtitle1: {fontFamily: 'Gotham-Medium'},
    subtitle2: {fontFamily: 'Gotham-Book'},
    body1: {fontFamily: 'Gotham-Book'},
    body2: {fontFamily: 'Gotham-Book'},
    button: {fontFamily: 'Gotham-Medium'},
    caption: {fontFamily: 'Gotham-Book'},
    overline: {fontFamily: 'Gotham-Book'},
  },
  overrides: {
    MuiListItemIcon: {
      root: {
        minWidth: 30,
        paddingLeft: 20,
      },
    },
    MuiButton: {
      root: {
        textTransform: "none",
        "&:hover": {
          "background-color": "#ebf8ff",
        },
        contained: {},
      },
      contained: {
        // backgroundColor: "#ff9f2e",
        "&:hover": {
          // "background-color": "#ff9f2e",
          "opacity": "80%"
        },
        color: '#ffffff',
      },
      outlined: {
      },
      containedPrimary: {
        // background: "linear-gradient(90deg, #ff9f2e 0%, #ff9f2e 100%)",
      },
      containedSecondary: {
        color: '#ffffff',
      }
    },
    MuiTab: {
      root: {
        textTransform: "none",
        fontWeight: "bold",
        letterSpacing: 1,
      },
    },
    MuiListItemText: {
    },
    
    MuiToolbar: {
      root: {
      },
    },
    MuiIconButton: {
      root: {
      },
    },
    MuiOutlinedInput: {
      root: {
        padding: 0,
        'label + &': {
        },
        marginTop: '1rem',
        '&:hover $notchedOutline': {
          borderRadius: 4,
          borderColor: '#ff9f2e',
          boxShadow: '0px 0px 8px rgb(71, 47, 146, 0.2)'
        }
      },
      notchedOutline: {
        borderColor: '#C6CBD4',
        borderRadius: 4,
      },
    },
    MuiInputLabel: {
      root: {
        color: "#3E3E3E",
        fontSize: '1rem',
        fontFamily: 'Gotham-Medium',
        '&$formLabelFocused': {
          // color: '#555555'
        }
      },
      shrink: {
        marginLeft: -4 * 3,
      },
    },
    MuiFormHelperText: {
      contained: {
        marginLeft: 4,
      }
    },
    MuiDrawer: {
      paper: {
        backgroundColor: '#1E2348'
      }
    },
    MuiDialog: {
      paper: {
        padding: 30,
        borderRadius: 16,
      },
    },
    MuiDialogContent: {
    },
    MuiDialogTitle: {
      root: {
        paddingTop: 0,
        marginBottom: 0,
        paddingBottom: 0,
      }
    },
  },
});
