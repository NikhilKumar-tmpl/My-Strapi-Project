'use strict';

module.exports={
    routes:[
        {
        method: 'GET',
        path: '/expers/by-filter',
        handler: 'exper.byFilter',
        config:{
            auth: false,
        },
     },
  ],
};