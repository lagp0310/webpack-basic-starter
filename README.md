# Webpack Starter.

## About.
A simple Webpack Starter configured for Development with [webpack-dev-server](https://github.com/webpack/webpack-dev-server) and Production with [Zero Server](https://github.com/remoteinterview/zero).

## How To Use.
There're 3 scripts which you can see in `package.json`:  
- `npm run build`: Creates the bundle.js file in `dist/` folder.  
- `npm run dev`: Runs the `webpack-dev-server` with `webpack.dev.js` configuration.  
- `npm run prod`: Runs `npm run build` and then runs `zero` to serve your project as if it's on production.  

## Additional Notes.
- All assets in the `static` folder are copied into the `dist/` directory when running any of the commands listed above. This folder structure is preserved when copied to `dist/`.

## Acknowledgments.
Thanks [Katerina Limpitsouni](https://twitter.com/ninalimpi) for the awesome illustrations!. Check them out at [Undraw](https://undraw.co/).

## Useful Guides.
- [Webpack Guides - Development: Using webpack-dev-server.](https://webpack.js.org/guides/development#using-webpack-dev-server)  
- [Html Webpack Plugin - Documentation.](https://github.com/jantimon/html-webpack-plugin#options)  
- [Copy Webpack Plugin - Documentation.](https://webpack.js.org/plugins/copy-webpack-plugin)  

## License.
MIT.