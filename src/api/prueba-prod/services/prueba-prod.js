'use strict';

/**
 * prueba-prod service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::prueba-prod.prueba-prod');
