import Component from '@ember/component';
import { get, set } from '@ember/object';
import layout from '../../templates/components/form-fields/text-field';

const TextFieldComponent = Component.extend({
  tagName: '',
  type: 'text',
  layout,

  control: 'one-way-text-exp',

  update(object, propertyName, value) {
    set(object, propertyName, value);
  },

  actions: {
    _update(value) {
      if (this.deserializeValue) {
        this.update(
          this.object,
          this.propertyName,
          this.deserializeValue(
            value,
            get(this.object, this.propertyName)
          )
        );
      } else {
        this.update(this.object, this.propertyName, value);
      }
    }
  }
});

TextFieldComponent.reopenClass({
  positionalParams: ['propertyName']
});

export default TextFieldComponent;
