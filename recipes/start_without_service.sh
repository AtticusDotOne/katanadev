#!/bin/sh
echo "--------------------------------------------------------------------------------"
echo "RECIPE: Starting node server"
echo "MANUAL STEPS: "
echo "  (i) WAIT FOR FOR COMPILATION TO FINISH;"
echo "  (ii) CTRL-Z;"
echo "  (iii) bg<ENTER>;"
echo "  (iv) disown<ENTER>"
echo "--------------------------------------------------------------------------------"
HOST='0.0.0.0' PORT=80 npm start
