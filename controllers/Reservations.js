'use strict';

/**
 * Reservations.js controller
 *
 * @description: A set of functions called "actions" of the `reservations` plugin.
 */

module.exports = {

  /**
   * Default action.
   *
   * @return {Object}
   */

  index: async (ctx) => {
    // Add your own logic here.

    const reservations = await strapi.query('reservations').find({});

    // Send 200 `ok`
    ctx.send({
      message: 'ok',
      reservations
    });
  }
};
