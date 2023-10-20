module.exports = {
    semi:true,
    singleQuote:false,
    toolbaWidth:2,
    usetabs:true,
    plugins:[
        require("prettier-plugin-astro")
    ],
    overrides:[
        {
            files:"**/*astro",
            options:{
                parser:"astro",
            },
        },
    ],
};