const { Model } = require('objection');
const knex = require('../config/config')
Model.knex(knex)

class LikeDislike extends Model {
  static get tableName() {
    return 'likeDislike';
  }
  static get jsonSchema() {
    return {
        type : Object,
        required : ['user_id'],
        properties: {
            id: { type: 'integer' },
            userId: { type: 'integer' },
            like: { type: Boolean},
            dislike: { type: Boolean },
    }
}
}
}
module.exports = LikeDislike;
