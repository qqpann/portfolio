ssh -T git@github.com > /dev/null 2>&1
if [ $? -eq 1 ]; then
  echo "SSH connection to GitHub successful, using SSH for git clone."
  git clone git@github.com:qqpann/dotfiles.git ~/.dotfiles
else
  echo "SSH connection to GitHub failed, using HTTPS for git clone."
  git clone https://github.com/qqpann/dotfiles.git ~/.dotfiles
fi
sh ~/.dotfiles/init.sh