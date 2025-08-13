#!/bin/bash

# === USO ===
# ./build_fireedge.sh <REMOTE_USER> <REMOTE_HOST> [-r]
# Esempio:
#   ./build_fireedge.sh opennebula 192.168.1.100
#   ./build_fireedge.sh opennebula 192.168.1.100 -r

if [ "$#" -lt 2 ] || [ "$#" -gt 3 ]; then
    echo "❌ Uso: $0 <REMOTE_USER> <REMOTE_HOST> [-r]"
    exit 1
fi

REMOTE_USER="$1"
REMOTE_HOST="$2"
RESTART=false

if [ "$3" == "-r" ]; then
    RESTART=true
fi

# === CONFIGURAZIONE ===
NVM_DIR="$HOME/.nvm"
REMOTE_PATH="/usr/lib/one/fireedge/dist/"
REMOTE_SUDO="sudo"
NODE_VERSION="16"

# === RILEVA SISTEMA OPERATIVO ===
OS_TYPE=$(uname -s)
echo "💻 Sistema rilevato: $OS_TYPE"

# === INSTALLA NVM SE MANCANTE ===
if ! command -v nvm >/dev/null 2>&1; then
    echo "📥 NVM non trovato, installo..."
    if [[ "$OS_TYPE" == "Darwin" ]]; then
        if ! command -v brew >/dev/null 2>&1; then
            echo "❌ Homebrew non trovato. Installalo da https://brew.sh/"
            exit 1
        fi
        brew install nvm
        mkdir -p ~/.nvm
        export NVM_DIR="$HOME/.nvm"
        [ -s "$(brew --prefix nvm)/nvm.sh" ] && \. "$(brew --prefix nvm)/nvm.sh"
    else
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
        export NVM_DIR="$HOME/.nvm"
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    fi
else
    export NVM_DIR="$HOME/.nvm"
    if [[ "$OS_TYPE" == "Darwin" ]]; then
        [ -s "$(brew --prefix nvm)/nvm.sh" ] && \. "$(brew --prefix nvm)/nvm.sh"
    else
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    fi
fi

# === ATTIVA NODE ===
echo "⚙️ Attivo Node $NODE_VERSION..."
nvm install $NODE_VERSION
nvm use $NODE_VERSION

# === INSTALLA YARN SE MANCANTE ===
if ! command -v yarn >/dev/null 2>&1; then
    echo "📦 Yarn non trovato, installo..."
    npm install -g yarn
fi

# === BUILD FIREEDGE ===
echo "📦 Installo dipendenze..."
yarn install

echo "🏗 Compilo build di produzione..."
yarn build

# === COPIA SU SERVER ===
echo "📤 Copio build su $REMOTE_HOST..."
scp -r dist/* "$REMOTE_USER@$REMOTE_HOST:/tmp/fireedge_build/"

# === INSTALLAZIONE SU SERVER ===
echo "🔄 Aggiorno cartella FireEdge sul server..."
ssh "$REMOTE_USER@$REMOTE_HOST" "
    $REMOTE_SUDO rm -rf $REMOTE_PATH/* &&
    $REMOTE_SUDO cp -r /tmp/fireedge_build/* $REMOTE_PATH/ &&
    rm -rf /tmp/fireedge_build
    $( $RESTART && echo "&& $REMOTE_SUDO systemctl restart opennebula-fireedge" )
"

if $RESTART; then
    echo "✅ FireEdge ricompilato e riavviato su $REMOTE_HOST!"
else
    echo "✅ FireEdge ricompilato su $REMOTE_HOST (nessun riavvio eseguito)"
fi
