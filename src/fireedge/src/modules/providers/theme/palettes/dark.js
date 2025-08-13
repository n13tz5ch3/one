/* ------------------------------------------------------------------------- *
 * Copyright 2002-2025, OpenNebula Project, OpenNebula Systems               *
 *                                                                           *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may   *
 * not use this file except in compliance with the License. You may obtain   *
 * a copy of the License at                                                  *
 *                                                                           *
 * http://www.apache.org/licenses/LICENSE-2.0                                *
 *                                                                           *
 * Unless required by applicable law or agreed to in writing, software       *
 * distributed under the License is distributed on an "AS IS" BASIS,         *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  *
 * See the License for the specific language governing permissions and       *
 * limitations under the License.                                            *
 * ------------------------------------------------------------------------- */
import { colors as materialColors, alpha } from '@mui/material'
import { colors as sunstoneColors } from '@modules/providers/theme/colors'

const primaryColor = sunstoneColors.red[600] // Colore aziendale #ef4b34
const secondaryColor = sunstoneColors.darkRed[400]

export const darkPalette = {
  mode: 'dark',

  // Primary color for app and MUI library
  primary: {
    main: primaryColor,
    light: sunstoneColors.red[500],
    dark: sunstoneColors.red[700],
    contrastText: '#FFFFFF',
  },

  // Secondary color for MUI library
  secondary: {
    main: secondaryColor,
    light: sunstoneColors.darkRed[300],
    dark: sunstoneColors.darkRed[500],
    contrastText: '#fff',
  },

  logo: {
    color: sunstoneColors.white,
    spinnerColor: primaryColor,
    textColorOpen: sunstoneColors.white,
    textColorNebula: sunstoneColors.white,
    textColorBeta: primaryColor,
  },

  // Main container of the app
  mainContainer: {
    backgroundColor: sunstoneColors.darkGrey[500],
  },

  // Buttons used in the app
  buttons: {
    main: {
      filled: {
        normal: {
          backgroundColor: primaryColor,
          color: sunstoneColors.darkGrey[500],
          borderColor: primaryColor,
        },
        hover: {
          backgroundColor: sunstoneColors.red[300],
          color: sunstoneColors.darkGrey[500],
          borderColor: sunstoneColors.red[300],
        },
        focus: {
          backgroundColor: sunstoneColors.red[300],
          color: sunstoneColors.darkGrey[500],
          borderColor: sunstoneColors.red[300],
        },
        active: {
          backgroundColor: sunstoneColors.red[300],
          color: sunstoneColors.darkGrey[500],
          borderColor: sunstoneColors.red[300],
        },
        disabled: {
          backgroundColor: sunstoneColors.darkGrey[400],
          color: sunstoneColors.grey[500],
          borderColor: sunstoneColors.darkGrey[400],
        },
      },
      outlined: {
        normal: {
          backgroundColor: 'transparent',
          color: sunstoneColors.grey[100],
          borderColor: primaryColor,
        },
        hover: {
          backgroundColor: 'transparent',
          color: sunstoneColors.red[100],
          borderColor: primaryColor,
        },
        focus: {
          backgroundColor: 'transparent',
          color: sunstoneColors.red[100],
          borderColor: primaryColor,
        },
        active: {
          backgroundColor: 'transparent',
          color: sunstoneColors.red[100],
          borderColor: primaryColor,
        },
        disabled: {
          backgroundColor: 'transparent',
          color: sunstoneColors.darkGrey[100],
          borderColor: sunstoneColors.darkGrey[100],
        },
      },
    },
    secondary: {
      filled: {
        normal: {
          backgroundColor: sunstoneColors.darkGrey[300],
          color: sunstoneColors.grey[100],
          borderColor: sunstoneColors.darkGrey[300],
        },
        hover: {
          backgroundColor: sunstoneColors.darkGrey[200],
          color: sunstoneColors.grey[100],
          borderColor: primaryColor,
        },
        active: {
          backgroundColor: alpha(primaryColor, 0.12),
          color: sunstoneColors.grey[100],
          borderColor: primaryColor,
        },
        focus: {
          backgroundColor: alpha(primaryColor, 0.12),
          color: sunstoneColors.grey[100],
          borderColor: primaryColor,
        },
        disabled: {
          backgroundColor: sunstoneColors.darkGrey[400],
          color: sunstoneColors.grey[500],
          borderColor: sunstoneColors.darkGrey[400],
        },
      },
      outlined: {
        normal: {
          backgroundColor: 'transparent',
          color: sunstoneColors.grey[200],
          borderColor: sunstoneColors.grey[200],
        },
        hover: {
          backgroundColor: alpha(primaryColor, 0.12),
          color: sunstoneColors.grey[100],
          borderColor: primaryColor,
        },
        active: {
          backgroundColor: alpha(primaryColor, 0.12),
          color: sunstoneColors.grey[100],
          borderColor: primaryColor,
        },
        focus: {
          backgroundColor: alpha(primaryColor, 0.12),
          color: sunstoneColors.grey[100],
          borderColor: primaryColor,
        },
        disabled: {
          backgroundColor: 'transparent',
          color: sunstoneColors.darkGrey[100],
          borderColor: sunstoneColors.darkGrey[100],
        },
      },
      outlinedIcon: {
        normal: {
          backgroundColor: 'transparent',
          color: sunstoneColors.grey[200],
          borderColor: sunstoneColors.grey[200],
        },
        hover: {
          backgroundColor: alpha(primaryColor, 0.12),
          color: sunstoneColors.grey[100],
          borderColor: primaryColor,
        },
        active: {
          backgroundColor: alpha(primaryColor, 0.12),
          color: sunstoneColors.grey[100],
          borderColor: primaryColor,
        },
        focus: {
          backgroundColor: alpha(primaryColor, 0.12),
          color: sunstoneColors.grey[100],
          borderColor: primaryColor,
        },
        disabled: {
          backgroundColor: 'transparent',
          color: sunstoneColors.darkGrey[100],
          borderColor: sunstoneColors.darkGrey[100],
        },
      },
      noborder: {
        normal: {
          backgroundColor: 'transparent',
          color: sunstoneColors.grey[200],
        },
        hover: {
          backgroundColor: 'transparent',
          color: primaryColor,
        },
        disabled: {
          backgroundColor: 'transparent',
          color: sunstoneColors.darkGrey[100],
        },
      },
    },
    danger: {
      outlined: {
        normal: {
          backgroundColor: 'transparent',
          color: sunstoneColors.red[600], // Utilizziamo il colore aziendale per coerenza
          borderColor: sunstoneColors.red[600],
        },
        hover: {
          backgroundColor: sunstoneColors.red[600],
          color: sunstoneColors.white,
          borderColor: sunstoneColors.red[600],
        },
        active: {
          backgroundColor: sunstoneColors.red[600],
          color: sunstoneColors.white,
          borderColor: sunstoneColors.red[600],
        },
        focus: {
          backgroundColor: sunstoneColors.red[600],
          color: sunstoneColors.white,
          borderColor: sunstoneColors.red[600],
        },
        disabled: {
          backgroundColor: 'transparent',
          textColor: sunstoneColors.grey[100],
          borderColor: sunstoneColors.grey[100],
        },
      },
    },
  },

  // Colors of Enhanced table component
  tables: {
    cards: {
      normal: {
        backgroundColor: sunstoneColors.darkGrey[400],
        hover: {
          backgroundColor: sunstoneColors.darkGrey[300],
        },
      },
      pressed: {
        backgroundColor: sunstoneColors.darkGrey[400],
        borderColor: sunstoneColors.red[500],
        hover: {
          backgroundColor: sunstoneColors.darkGrey[300],
          borderColor: sunstoneColors.red[500],
        },
      },
    },
    refreshIcon: {
      backgroundColor: 'transparent',
      color: primaryColor,
      borderColor: primaryColor,
    },
  },

  // Info tabs of resources
  tabs: {
    header: {
      borderColor: primaryColor,
      insideBorderColor: sunstoneColors.darkGrey[400],
      indicatorColor: sunstoneColors.red[600],
      backgroundColor: sunstoneColors.darkGrey[400],
      color: sunstoneColors.grey[400],
      hover: {
        backgroundColor: sunstoneColors.darkGrey[300],
        color: sunstoneColors.grey[400],
      },
      selected: {
        backgroundColor: sunstoneColors.darkGrey[400],
        color: sunstoneColors.grey[200],
      },
    },
    content: {
      borderColor: primaryColor,
      backgroundColor: sunstoneColors.darkGrey[400],
    },
  },

  // Search bar of the tables
  searchBar: {
    normal: {
      backgroundColor: sunstoneColors.darkGrey[300],
      color: sunstoneColors.grey[300],
      borderColor: sunstoneColors.darkGrey[300],
    },
    hover: {
      backgroundColor: sunstoneColors.darkGrey[200],
      color: sunstoneColors.grey[300],
      borderColor: primaryColor,
    },
    focus: {
      backgroundColor: alpha(primaryColor, 0.12),
      color: primaryColor,
      borderColor: primaryColor,
    },
    icon: {
      color: sunstoneColors.grey[300],
    },
  },

  // Sidebar menu colors
  sidebar: {
    backgroundColorSelectedLink: sunstoneColors.darkGrey[200],
    backgroundColorSelectedCollapse: sunstoneColors.darkGrey[200],
    backgroundColorHover: sunstoneColors.darkGrey[300],
    colorTextParent: sunstoneColors.grey[200],
    colorTextChildSelected: primaryColor,
  },

  // Scrollbar color
  scrollbar: {
    color: sunstoneColors.grey[400],
  },

  // Login colors
  login: {
    backgroundColor: sunstoneColors.darkGrey[400],
  },

  // Switch between card and list component
  switchViewTable: {
    button: {
      normal: {
        backgroundColor: 'transparent',
        borderColor: sunstoneColors.grey[200],
        color: sunstoneColors.grey[100],
      },
      hover: {
        backgroundColor: sunstoneColors.darkGrey[400],
      },
      selected: {
        backgroundColor: alpha(primaryColor, 0.4),
      },
    },
    icon: {
      color: sunstoneColors.grey[100],
    },
  },

  // Breadcrumb colors
  breadCrumb: {
    title: {
      color: sunstoneColors.grey[100],
    },
  },

  accentColor: {
    main: sunstoneColors.yellow[700],
  },
  common: {
    black: sunstoneColors.black,
    white: sunstoneColors.white,
  },
  background: {
    paper: '#2a2d3d',
    default: '#222431',
  },

  // Topbar colors
  topbar: {
    backgroundColor: primaryColor, // Utilizziamo il colore aziendale per la topbar
    color: sunstoneColors.white,
    borderBottomColor: sunstoneColors.darkGrey[100],
  },

  // Footer colors
  footer: {
    backgroundColor: primaryColor, // Utilizziamo il colore aziendale per il footer
    color: sunstoneColors.white,
  },

  // Graphs colors
  graphs: {
    vm: {
      cpu: {
        real: primaryColor,
        forecast: sunstoneColors.grey[300],
        forecastFar: '#DEA700',
      },
      memory: {
        real: primaryColor,
        forecast: sunstoneColors.grey[300],
        forecastFar: '#DEA700',
      },
      diskReadBytes: {
        real: primaryColor,
        forecast: sunstoneColors.grey[300],
        forecastFar: '#DEA700',
      },
      diskReadIOPS: {
        real: primaryColor,
        forecast: sunstoneColors.grey[300],
        forecastFar: '#DEA700',
      },
      diskWriteBytes: {
        real: primaryColor,
        forecast: sunstoneColors.grey[300],
        forecastFar: '#DEA700',
      },
      diskWriteIOPS: {
        real: primaryColor,
        forecast: sunstoneColors.grey[300],
        forecastFar: '#DEA700',
      },
      netDownloadSpeed: {
        real: primaryColor,
        forecast: sunstoneColors.grey[300],
        forecastFar: '#DEA700',
      },
      netUploadSpeed: {
        real: primaryColor,
        forecast: sunstoneColors.grey[300],
        forecastFar: '#DEA700',
      },
    },
    host: {
      cpu: {
        free: {
          real: '#C93F7A',
          forecast: '#A892E1',
          forecastFar: '#FF7D2E',
        },
        used: {
          real: primaryColor,
          forecast: sunstoneColors.grey[300],
          forecastFar: '#DEA700',
        },
      },
      memory: {
        free: {
          real: '#C93F7A',
          forecast: '#A892E1',
          forecastFar: '#FF7D2E',
        },
        used: {
          real: primaryColor,
          forecast: sunstoneColors.grey[300],
          forecastFar: '#DEA700',
        },
      },
    },
    cloud: {
      cpu: {
        real: primaryColor,
      },
      memory: {
        real: primaryColor,
      },
      networks: {
        netDownloadSpeed: primaryColor,
        netUploadSpeed: sunstoneColors.grey[300],
      },
      disks: {
        diskReadIOPS: primaryColor,
        diskWriteIOPS: sunstoneColors.grey[300],
      },
      hostCpu: {
        real: primaryColor,
      },
      hostMemory: {
        real: primaryColor,
      },
    },
    axis: {
      color: sunstoneColors.white,
    },
  },

  error: {
    100: '#e98e7f',
    200: '#ee6d58',
    300: '#e95f48',
    400: '#e34e3b',
    500: '#dd452c',
    600: '#ef4b34', // Colore aziendale
    700: '#d33f2a',
    800: '#c61414',
    light: '#ee6d58',
    main: '#ef4b34', // Colore aziendale come main
    dark: '#d33f2a',
    contrastText: '#FFFFFF',
  },
  warning: {
    100: '#fff4db',
    200: '#ffedc2',
    300: '#ffe4a3',
    400: '#ffc980',
    500: '#fcc419',
    600: '#fab005',
    700: '#f1a204',
    800: '#db9a00',
    light: '#ffe4a3',
    main: '#f1a204',
    dark: '#f1a204',
    contrastText: '#FFFFFF',
  },
  info: {
    light: '#64b5f6',
    main: '#2196f3',
    dark: '#01579b',
    contrastText: '#FFFFFF',
  },
  success: {
    100: '#bce1bd',
    200: '#a6d7a8',
    300: '#8fcd92',
    400: '#79c37c',
    500: '#62b966',
    600: '#4caf50',
    700: '#419b46',
    800: '#388e3c',
    light: '#3adb76',
    main: '#4caf50',
    dark: '#388e3c',
    contrastText: '#FFFFFF',
  },
  debug: {
    light: materialColors.grey[300],
    main: materialColors.grey[600],
    dark: materialColors.grey[700],
    contrastText: '#FFFFFF',
  },
}
