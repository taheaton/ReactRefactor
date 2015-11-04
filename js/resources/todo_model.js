import Backbone from 'backbone';
import {APP_URL} from '../parse_auth';


// const TodoModel = Backbone.Model.extend({
//   urlRoot: APP_URL,
//   idAttribute: 'objectId',
//   isComplete() {
//     return !!this.get('completeAt');
//   }
// });

// export default TodoModel;

export default Backbone.Model.extend({

  urlRoot: APP_URL,

  idAttribute: 'objectId',

  templateData() {
    let data = this.toJSON();
    return data;
  }

});
