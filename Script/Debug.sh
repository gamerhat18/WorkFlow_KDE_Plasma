SCRIPT=/home/$USER/.local/share/kwin/scripts/sticky-window-snapping_MOD/contents/code/main.js




#dbus-send --print-reply --dest=org.kde.KWin /Scripting org.kde.kwin.Scripting.unloadScript string:"$SCRIPT"
#num=$(dbus-send --print-reply --dest=org.kde.KWin /Scripting org.kde.kwin.Scripting.loadScript string:"$SCRIPT" | awk 'END {print $2}')
#dbus-send --print-reply --dest=org.kde.KWin /$num org.kde.kwin.Scripting.run

qdbus org.kde.KWin /Scripting unloadScript $SCRIPT
num=$(qdbus org.kde.KWin /Scripting loadScript $SCRIPT)
qdbus org.kde.KWin /$num run




