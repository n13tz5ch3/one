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
import { ThemeOptions } from '@mui/material'
import { colors } from './colors'

/** @type {ThemeOptions} Sunstone theme */
export default {
  palette: {
    primary: {
      100: colors.red[100],
      200: colors.red[200],
      300: colors.red[300],
      400: colors.red[400],
      500: colors.red[500],
      600: colors.red[600],
      700: colors.red[700],
      800: colors.darkRed[100],
      900: colors.darkRed[200],
      light: colors.red[400],
      main: colors.red[600], // Colore aziendale come colore principale
      dark: colors.red[700],
      contrastText: colors.white,
    },
    secondary: {
      100: colors.grey[100],
      200: colors.grey[200],
      300: colors.grey[300],
      400: colors.grey[400],
      500: colors.grey[500],
      600: colors.grey[600],
      700: colors.grey[700],
      800: colors.darkGrey[300],
      900: colors.darkGrey[400],
      light: colors.grey[300],
      main: colors.grey[500], // Tonalità di grigio come colore secondario
      dark: colors.grey[700],
      contrastText: colors.white,
    },
    error: {
      light: colors.red[400],
      main: colors.red[600], // Utilizziamo il colore aziendale anche per gli errori
      dark: colors.red[700],
      contrastText: colors.white,
    },
    warning: {
      main: colors.yellow[700],
      contrastText: colors.white,
    },
    success: {
      main: colors.green[500],
      contrastText: colors.white,
    },
    background: {
      default: colors.grey[100],
      paper: colors.white,
    },
    text: {
      primary: colors.black,
      secondary: colors.grey[600],
    },
  },
}
