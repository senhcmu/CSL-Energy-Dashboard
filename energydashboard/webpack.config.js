module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {test: /\.jsx$/
              , loader: 'jsx-loader'},
            {
              test: /.(jpg|png)$/,
              use: ['url-loader']
            },

            // {
            //     use: ['style-loader', 'css-loader'],
            //     test: /\.css$/
            // },
            // {
            //     test: /\.less$/,
            //     use:[{loader: 'css-loader',},
            //         {loader: 'style-loader',},
            //         {
                
            //     loader: 'less-loader',
            //     options: {
            //     // paths: ['node_modules'],
            //      modifyVars: {
            //        'primary-color': '#8ea51d',
            //        'link-color': '#8ea51d',
            //        'border-radius-base': '2px'
            //      },
            //      javascriptEnabled: true,
            //    },
            // }]

            //   }

            {
                test: /\.(css|less)$/,
                use: [
                  'style-loader',
                  'css-loader',
                //   'postcss-loader',
                  {
                    loader: 'less-loader',
                    options: {
                        modifyVars: {
                                   'primary-color': '#8ea51d',
                                   'link-color': '#8ea51d',
                                   'border-radius-base': '2px'
                                 },
                      javascriptEnabled: true,
                    },
                  },
                ],
              }
        ]
    }
}