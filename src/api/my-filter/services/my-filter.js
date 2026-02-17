'use strict';

/**
 * my-filter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::my-filter.my-filter');
