import 'fs';
import { defineComponent, pushScopeId, popScopeId, openBlock, createBlock, createVNode, createTextVNode, toDisplayString, withScopeId, ref, Fragment, renderSlot, mergeProps, createCommentVNode, resolveComponent, inject, onBeforeUpdate, onUpdated, reactive, renderList } from 'vue';

var script$5 = /*#__PURE__*/defineComponent({
  name: 'CapitaliskUiSample',

  // vue component name
  data() {
    return {
      counter: 5,
      initCounter: 5,
      message: {
        action: null,
        amount: null
      }
    };
  },

  computed: {
    changedBy() {
      const {
        message
      } = this;
      if (!message.action) return 'initialized';
      return `${message.action} ${message.amount || ''}`.trim();
    }

  },
  methods: {
    increment(arg) {
      const amount = typeof arg !== 'number' ? 1 : arg;
      this.counter += amount;
      this.message.action = 'incremented by';
      this.message.amount = amount;
    },

    decrement(arg) {
      const amount = typeof arg !== 'number' ? 1 : arg;
      this.counter -= amount;
      this.message.action = 'decremented by';
      this.message.amount = amount;
    },

    reset() {
      this.counter = this.initCounter;
      this.message.action = 'reset';
      this.message.amount = null;
    }

  }
});

const _withId$5 = /*#__PURE__*/withScopeId("data-v-58826814");

pushScopeId("data-v-58826814");

const _hoisted_1$4 = {
  class: "capitalisk-ui-sample"
};

const _hoisted_2$1 = /*#__PURE__*/createTextVNode(".");

popScopeId();

const render$5 = /*#__PURE__*/_withId$5((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1$4, [createVNode("p", null, [createTextVNode("The counter was " + toDisplayString(_ctx.changedBy) + " to ", 1), createVNode("b", null, toDisplayString(_ctx.counter), 1), _hoisted_2$1]), createVNode("button", {
    onClick: _cache[1] || (_cache[1] = (...args) => _ctx.increment && _ctx.increment(...args))
  }, " Click +1 "), createVNode("button", {
    onClick: _cache[2] || (_cache[2] = (...args) => _ctx.decrement && _ctx.decrement(...args))
  }, " Click -1 "), createVNode("button", {
    onClick: _cache[3] || (_cache[3] = $event => _ctx.increment(5))
  }, " Click +5 "), createVNode("button", {
    onClick: _cache[4] || (_cache[4] = $event => _ctx.decrement(5))
  }, " Click -5 "), createVNode("button", {
    onClick: _cache[5] || (_cache[5] = (...args) => _ctx.reset && _ctx.reset(...args))
  }, " Reset ")]);
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$5 = "\n.capitalisk-ui-sample[data-v-58826814] {\n    display: block;\n    width: 400px;\n    margin: 25px auto;\n    border: 1px solid #ccc;\n    background: #eaeaea;\n    text-align: center;\n    padding: 25px;\n}\n.capitalisk-ui-sample p[data-v-58826814] {\n    margin: 0 0 1em;\n}\n";
styleInject(css_248z$5);

script$5.render = render$5;
script$5.__scopeId = "data-v-58826814";

var script$4 = {
  name: 'Input',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: null
    },
    suffix: {
      type: String,
      default: null
    },
    prefix: {
      type: [String, Number],
      default: null
    },
    error: {
      type: String,
      default: null
    },
    rules: {
      type: Array,
      default: null
    },
    hideValidation: {
      type: Boolean,
      default: false
    }
  },

  setup(props) {
    const error = ref(props.error);
    const dirty = ref(props.error ? true : false);
    const input = ref(null);
    return {
      error,
      dirty,
      input,
      focus: () => input.value.focus(),
      reset: () => error.value = null,
      validate: async () => {
        if (!props.rules || !props.rules.length) return;
        dirty.value = true;

        for (let i = 0; i < props.rules.length; i++) {
          const rule = props.rules[i];
          const e = await rule(props.modelValue);

          if (typeof e !== 'string') {
            error.value = null;
            continue;
          }

          const hasError = e.length > 0;

          if (hasError) {
            error.value = e;
            break;
          }
        }
      }
    };
  }

};

const _withId$4 = /*#__PURE__*/withScopeId("data-v-3b1ed2e7");

pushScopeId("data-v-3b1ed2e7");

const _hoisted_1$3 = {
  class: "flex relative align-center"
};
const _hoisted_2 = {
  class: "prefix"
};
const _hoisted_3 = {
  class: "suffix"
};
const _hoisted_4 = {
  key: 0,
  class: "text-danger ml-1"
};

popScopeId();

const render$4 = /*#__PURE__*/_withId$4((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock(Fragment, null, [createVNode("div", _hoisted_1$3, [createVNode("span", _hoisted_2, [createTextVNode(toDisplayString($props.prefix), 1), renderSlot(_ctx.$slots, "prefix")]), createVNode("input", mergeProps(_ctx.$attrs, {
    class: ["input", `input ${$setup.error || $setup.error ? 'input-error ' : ''}${$props.prefix || _ctx.$slots.prefix ? 'input-prefix ' : ''}${$props.suffix || _ctx.$slots.suffix ? 'input-suffix' : ''}`],
    value: $props.modelValue,
    onInput: _cache[1] || (_cache[1] = e => _ctx.$emit('update:modelValue', e.target.value)),
    placeholder: $props.placeholder,
    id: $props.id,
    onBlur: _cache[2] || (_cache[2] = (...args) => $setup.validate && $setup.validate(...args)),
    onEnded: _cache[3] || (_cache[3] = (...args) => $setup.validate && $setup.validate(...args)),
    onFocus: _cache[4] || (_cache[4] = (...args) => $setup.reset && $setup.reset(...args)),
    ref: "input"
  }), null, 16, ["value", "placeholder", "id"]), createVNode("span", _hoisted_3, [createTextVNode(toDisplayString($props.suffix), 1), renderSlot(_ctx.$slots, "suffix")])]), $setup.dirty && $setup.error && !$props.hideValidation ? (openBlock(), createBlock("span", _hoisted_4, toDisplayString($setup.error), 1)) : createCommentVNode("", true)], 64);
});

var css_248z$4 = "\n.input[data-v-3b1ed2e7] {\n  border: none;\n  padding: 0.75rem;\n  border-radius: var(--border-radius);\n  text-decoration: none;\n  flex: 1;\n  background-color: var(--primary);\n  color: var(--dark);\n}\n.input.danger[data-v-3b1ed2e7] {\n  background-color: var(--danger);\n  color: var(--permanent-white);\n}\n.input.primary-darkest[data-v-3b1ed2e7] {\n  background-color: var(--primary-darkest);\n  color: var(--dark);\n}\n.input.primary-darker[data-v-3b1ed2e7] {\n  background-color: var(--primary-darker);\n  color: var(--dark);\n}\n.input[data-v-3b1ed2e7]:disabled {\n  color: var(--disabled) !important;\n}\n.input[data-v-3b1ed2e7]:focus {\n  outline: none;\n  border: none;\n  box-sizing: border-box;\n  box-shadow: inset 0 0 0 1px var(--dark);\n}\n.input-error[data-v-3b1ed2e7] {\n  outline: none;\n  border: none;\n  box-sizing: border-box;\n  box-shadow: inset 0 0 0 1px var(--danger);\n}\n.input-prefix[data-v-3b1ed2e7] {\n  padding-left: 2.5rem;\n}\n.input-suffix[data-v-3b1ed2e7] {\n  padding-right: 2.5rem;\n}\n.prefix[data-v-3b1ed2e7] {\n  position: absolute;\n  left: 1em;\n}\n.suffix[data-v-3b1ed2e7] {\n  position: absolute;\n  right: 1rem;\n}\nlabel[data-v-3b1ed2e7] {\n  position: relative;\n  left: 15px;\n}\n.input[data-v-3b1ed2e7]::placeholder {\n  color: var(--dark);\n}\n";
styleInject(css_248z$4);

script$4.render = render$4;
script$4.__scopeId = "data-v-3b1ed2e7";

var script$3 = {
  name: 'Button',
  props: {
    value: {
      type: String
    },
    routerLink: {
      type: Boolean,
      default: false
    },
    href: {
      type: [String, Object],
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    }
  }
};

const _withId$3 = /*#__PURE__*/withScopeId("data-v-6775c02a");

pushScopeId("data-v-6775c02a");

const _hoisted_1$2 = {
  key: 1,
  class: "fa fa-circle-notch fa-spin mr-1"
};

popScopeId();

const render$3 = /*#__PURE__*/_withId$3((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_router_link = resolveComponent("router-link");

  return !$props.routerLink ? (openBlock(), createBlock("a", {
    key: 0,
    class: ["button cursor-pointer text-center", $props.value ? 'default' : '']
  }, [!$props.loading && $props.icon ? (openBlock(), createBlock("i", {
    key: 0,
    class: `fa fa-${$props.icon} ${$props.value ? 'mr-1' : ''}`
  }, null, 2)) : createCommentVNode("", true), $props.loading ? (openBlock(), createBlock("i", _hoisted_1$2)) : createCommentVNode("", true), createTextVNode(toDisplayString($props.value), 1)], 2)) : (openBlock(), createBlock(_component_router_link, {
    key: 1,
    class: ["button", $props.value ? 'default' : ''],
    to: $props.href
  }, {
    default: _withId$3(() => [!$props.loading && $props.icon ? (openBlock(), createBlock("i", {
      key: 0,
      class: `fa fa-${$props.icon} mr-2`
    }, null, 2)) : createCommentVNode("", true), createTextVNode(" " + toDisplayString($props.value), 1)]),
    _: 1
  }, 8, ["class", "to"]));
});

var css_248z$3 = "\na.button[data-v-6775c02a] {\n  display: block;\n  border: 0;\n  border-radius: var(--border-radius);\n  text-decoration: none;\n  background-color: var(--primary-lighter);\n  color: var(--permanent-white);\n  text-transform: uppercase;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 1.25px;\n  text-transform: uppercase;\n}\na.button.default[data-v-6775c02a] {\n  padding: var(--unit-1) var(--unit-3) !important;\n}\na.button.outline[data-v-6775c02a] {\n  border: 1px solid var(--primary-lighter);\n  background-color: var(--primary-lighter-bg);\n  color: var(--dark);\n}\na.button.outline.warning[data-v-6775c02a] {\n  border: 1px solid var(--warning);\n  background-color: var(--warning);\n  color: var(--permanent-dark);\n}\na.button.outline.danger[data-v-6775c02a] {\n  border: 1px solid var(--danger);\n  background-color: var(--danger-bg);\n}\na.button.warning[data-v-6775c02a] {\n  background-color: var(--warning);\n  color: var(--permanent-dark);\n}\na.button.danger[data-v-6775c02a] {\n  background-color: var(--danger);\n}\na.button.success[data-v-6775c02a] {\n  background-color: var(--success);\n}\n";
styleInject(css_248z$3);

script$3.render = render$3;
script$3.__scopeId = "data-v-6775c02a";

var script$2 = {
  name: 'Tooltip',
  props: {
    content: {
      type: String,
      required: true
    }
  },

  setup() {
    const tooltipRef = ref(null);
    const tooltipActive = ref(false);
    return {
      tooltipRef,
      tooltipActive
    };
  }

};

const _withId$2 = /*#__PURE__*/withScopeId("data-v-71345c84");

const render$2 = /*#__PURE__*/_withId$2((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock(Fragment, null, [createVNode("i", {
    class: "far fa-question-circle cursor-pointer",
    onClick: _cache[1] || (_cache[1] = $event => $setup.tooltipActive = !$setup.tooltipActive),
    ref: "tooltipRef"
  }, null, 512), $setup.tooltipActive ? (openBlock(), createBlock("div", {
    key: 0,
    class: "tooltip pa-1 no-select",
    style: {
      top: _ctx.$refs.tooltipRef.getBoundingClientRect().bottom + 5 + 'px',
      left: _ctx.$refs.tooltipRef.getBoundingClientRect().left + 5 + 'px'
    }
  }, toDisplayString($props.content), 5)) : createCommentVNode("", true)], 64);
});

var css_248z$2 = "\n.tooltip[data-v-71345c84] {\n  position: fixed;\n  /* border: 1px solid var(--dark); */\n  border-radius: var(--border-radius);\n  background-color: var(--primary-darker);\n  max-width: 30vw;\n  z-index: 10;\n}\n.tooltip.danger[data-v-71345c84] {\n  border: 1px solid var(--danger);\n  color: var(--danger);\n  font-weight: 900;\n}\n";
styleInject(css_248z$2);

script$2.render = render$2;
script$2.__scopeId = "data-v-71345c84";

var script$1 = {
  name: 'Switch',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: ''
    }
  }
};

const _withId$1 = /*#__PURE__*/withScopeId("data-v-7dd076b2");

pushScopeId("data-v-7dd076b2");

const _hoisted_1$1 = {
  class: "switch"
};

popScopeId();

const render$1 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("label", _hoisted_1$1, [createVNode("input", {
    type: "checkbox",
    checked: $props.modelValue,
    onChange: _cache[1] || (_cache[1] = $event => _ctx.$emit('update:modelValue', !$props.modelValue))
  }, null, 40, ["checked"]), createVNode("span", {
    class: "slider cursor-pointer",
    id: $props.id
  }, null, 8, ["id"])]);
});

var css_248z$1 = "\n.switch[data-v-7dd076b2] {\n  position: relative;\n  display: inline-block;\n  width: 30px;\n  height: 17px;\n}\n.switch input[data-v-7dd076b2] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.slider[data-v-7dd076b2] {\n  border-radius: 17px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--switch-background);\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n.slider[data-v-7dd076b2]:before {\n  border-radius: 50%;\n  position: absolute;\n  content: '';\n  height: 13px;\n  width: 13px;\n  left: 3px;\n  bottom: 2px;\n  background-color: var(--dark);\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\ninput:checked + .slider[data-v-7dd076b2] {\n  background-color: var(--primary-lighter);\n}\ninput:focus + .slider[data-v-7dd076b2] {\n  box-shadow: 0 0 1px var(--primary-lighter);\n}\ninput:checked + .slider[data-v-7dd076b2]:before {\n  -webkit-transform: translateX(11px);\n  -ms-transform: translateX(11px);\n  transform: translateX(11px);\n  background-color: var(--permanent-white);\n}\n";
styleInject(css_248z$1);

script$1.render = render$1;
script$1.__scopeId = "data-v-7dd076b2";

var script = {
  name: 'Notification',

  setup() {
    inject('store');
    const divs = ref([]);
    onBeforeUpdate(() => divs.value = []);
    onUpdated(() => {
      for (let i = 0; i < divs.value.length; i++) {
        const notification = divs.value[i];
        const bottom = (notification.offsetHeight + 10) * i;
        notification.style.bottom = `${bottom}px`;
      }
    });
    const notifications = reactive([]);

    const denotify = index => notifications.splice(index, 1);

    const notify = n => {
      notifications.push(n);
      if (n.seconds) setTimeout(() => {
        const index = notifications.findIndex(m => m === n.message);
        denotify(index);
      }, n.seconds * 1000);
    };

    return {
      notifications,
      divs,
      notify,
      denotify
    };
  }

};

const _withId = /*#__PURE__*/withScopeId("data-v-78ef17b6");

pushScopeId("data-v-78ef17b6");

const _hoisted_1 = {
  class: "break mr-2"
};

popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return $setup.notifications ? (openBlock(true), createBlock(Fragment, {
    key: 0
  }, renderList($setup.notifications, (notification, i) => {
    return openBlock(), createBlock("div", {
      key: i,
      class: ["notification pa-4 ma-2", notification.error ? 'danger' : ''],
      ref: el => {
        if (el) $setup.divs[i] = el;
      }
    }, [createVNode("div", {
      class: "close-btn cursor-pointer",
      onClick: $event => $setup.denotify(i)
    }, "✕", 8, ["onClick"]), createVNode("div", _hoisted_1, toDisplayString(notification.message), 1)], 2);
  }), 128)) : createCommentVNode("", true);
});

var css_248z = "\n.notification[data-v-78ef17b6] {\n  position: fixed;\n  border: 1px solid var(--dark);\n  border-radius: var(--border-radius);\n  bottom: 0px;\n  right: 0px;\n  background-color: var(--primary);\n  max-width: 30vw;\n  z-index: 10;\n}\n.notification.danger[data-v-78ef17b6] {\n  border: 1px solid var(--danger);\n  color: var(--danger);\n  font-weight: 900;\n}\n.close-btn[data-v-78ef17b6] {\n  position: absolute;\n  right: var(--unit-2);\n  font-size: var(--unit-2);\n  color: var(--dark) !important;\n}\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-78ef17b6";

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Sample: script$5,
  Input: script$4,
  Button: script$3,
  Tooltip: script$2,
  Switch: script$1,
  Notification: script
});

// Import vue components

const install = function installCapitaliskUi(app) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(`Clsk${componentName}`, component);
  });
}; // Create module definition for Vue.use()

export default install;
export { script$3 as Button, script$4 as Input, script as Notification, script$5 as Sample, script$1 as Switch, script$2 as Tooltip };
