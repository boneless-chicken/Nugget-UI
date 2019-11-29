import { Theme, createMuiTheme } from "@material-ui/core";
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface DashboardThemeProps extends Theme {
    appBar?: {
      color: string;
    };
    appBarTitle: {
      color: string;
    };
  }
}

export interface DashboardThemeProps extends Theme {
  appBar?: {
    color: string;
  };
  appBarTitle: {
    color: string;
  };
}

export default function DashboardTheme(options: ThemeOptions) {
  return createMuiTheme({
    ...options
  });
}