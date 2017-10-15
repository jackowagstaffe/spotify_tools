export REACT_APP_CALLBACK="https://jackowagstaffe.github.io/spotify-tools/"
npm run build
rsync -ov /home/jack/projects/spotify_tools/build /home/jack/projects/spotify-tools-build
cd /home/jack/projects/spotify-tools-build
git push --set-upstream git@github.com:jackowagstaffe/spotify-tools.git master
cd /home/jack/projects/spotofy_tools
