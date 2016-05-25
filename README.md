# Webpack + React

# clone this repo
git clone https://github.com/bhingindiano/webpack-react.git

# install npm packages required
npm update (might require sudo)
sudo npm install -g webpack-dev-server

# bundle assets
node_modules/.bin/webpack -d

# run webpack-dev-server
webpack-dev-server --content-base=src/client --progress --colors

# try in browser
http://localhost:8080/
