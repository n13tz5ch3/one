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

export default {
  palette: {
    primary: {
      100: '#fde0dc',
      200: '#fbc2b9',
      300: '#f9a395',
      400: '#f78572',
      500: '#f5664e',
      600: '#ef4b34', // Colore aziendale
      700: '#d33f2a',
      800: '#b73421',
      900: '#9b2a17',
      light: '#f78572',
      main: '#ef4b34', // Colore aziendale come colore principale
      dark: '#d33f2a',
      contrastText: '#fff',
    },
    secondary: {
      100: '#f8e4df',
      200: '#f2c9c0',
      300: '#ebada0',
      400: '#e59181',
      500: '#de7661',
      600: '#d75a42',
      700: '#c14a34',
      800: '#a83b26',
      900: '#8f2c18',
      light: '#e59181',
      main: '#d75a42', // Tonalità complementare al colore aziendale
      dark: '#c14a34',
      contrastText: '#fff',
    },
    error: {
      main: '#ef4b34', // Utilizziamo il colore aziendale anche per gli errori
      light: '#f78572',
      dark: '#d33f2a',
      contrastText: '#fff',
    },
    warning: {
      main: '#ff9800',
      contrastText: '#fff',
    },
    success: {
      main: '#4caf50',
      contrastText: '#fff',
    },
    // Aggiungiamo anche queste proprietà per garantire che l'interfaccia
    // sia completamente coerente, incluso il footer e la topbar
    footer: {
      color: '#fff',
      backgroundColor: '#ef4b34',
    },
    topbar: {
      background: '#ef4b34',
      color: '#fff',
    },
  },
}
