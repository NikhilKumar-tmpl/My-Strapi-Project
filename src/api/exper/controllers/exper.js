'use strict';

/**
 * exper controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::exper.exper', ({  strapi }) =>({

    async byFilter(ctx){
        try{
            let { filters } = ctx.query;
            console.log(filters);
            // example query for filters: ?filters=adventure,beach,kids
            // @ts-ignore
            filters = filters?.split(',') || [];
            // @ts-ignore
            if (!filters.length){
                const res = await strapi.db.query('api::exper.exper').findMany({
                    populate: {
                        image: true,
                    }
                });
                return res;
            }
            console.log(filters);
            const res = await strapi.db.query("api::exper.exper").findMany({
                where: {
                    my_filters: {
                        slug: {
                            $in: filters,
                        }
                    },
                    publishedAt: {
                        $notNull: true,
                    }
                },
                populate: {
                    image: true,
                }
            });
            return res;
        }
        catch (err){
            console.log(err);
            return ctx.internalServerError("Something went wrong");
        }
    },
}));
