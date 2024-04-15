const path = require('path');
module.exports={
    entry:'./project_todolist/src/todo.ts',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'./project_todolist/dist')
    },
    module:{
        rules:[
            {
                test:/\.ts$/,
                use:'ts-loader',
                exclude:/node_modules/
            }
        ]
    },
    resolve:{
        extensions:['.ts','.js']
    }

}