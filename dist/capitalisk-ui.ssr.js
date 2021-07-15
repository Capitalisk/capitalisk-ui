'use strict';require('fs');var vue=require('vue');function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script$5 = /*#__PURE__*/vue.defineComponent({
  name: 'CapitaliskUiSample',
  // vue component name
  data: function data() {
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
    changedBy: function changedBy() {
      var message = this.message;
      if (!message.action) return 'initialized';
      return "".concat(message.action, " ").concat(message.amount || '').trim();
    }
  },
  methods: {
    increment: function increment(arg) {
      var amount = typeof arg !== 'number' ? 1 : arg;
      this.counter += amount;
      this.message.action = 'incremented by';
      this.message.amount = amount;
    },
    decrement: function decrement(arg) {
      var amount = typeof arg !== 'number' ? 1 : arg;
      this.counter -= amount;
      this.message.action = 'decremented by';
      this.message.amount = amount;
    },
    reset: function reset() {
      this.counter = this.initCounter;
      this.message.action = 'reset';
      this.message.amount = null;
    }
  }
});var _withId$5 = /*#__PURE__*/vue.withScopeId("data-v-58826814");

vue.pushScopeId("data-v-58826814");

var _hoisted_1$4 = {
  class: "capitalisk-ui-sample"
};

var _hoisted_2$1 = /*#__PURE__*/vue.createTextVNode(".");

vue.popScopeId();

var render$5 = /*#__PURE__*/_withId$5(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1$4, [vue.createVNode("p", null, [vue.createTextVNode("The counter was " + vue.toDisplayString(_ctx.changedBy) + " to ", 1), vue.createVNode("b", null, vue.toDisplayString(_ctx.counter), 1), _hoisted_2$1]), vue.createVNode("button", {
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.increment && _ctx.increment.apply(_ctx, arguments);
    })
  }, " Click +1 "), vue.createVNode("button", {
    onClick: _cache[2] || (_cache[2] = function () {
      return _ctx.decrement && _ctx.decrement.apply(_ctx, arguments);
    })
  }, " Click -1 "), vue.createVNode("button", {
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return _ctx.increment(5);
    })
  }, " Click +5 "), vue.createVNode("button", {
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return _ctx.decrement(5);
    })
  }, " Click -5 "), vue.createVNode("button", {
    onClick: _cache[5] || (_cache[5] = function () {
      return _ctx.reset && _ctx.reset.apply(_ctx, arguments);
    })
  }, " Reset ")]);
});function styleInject(css, ref) {
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
}var css_248z$5 = "\n.capitalisk-ui-sample[data-v-58826814] {\n    display: block;\n    width: 400px;\n    margin: 25px auto;\n    border: 1px solid #ccc;\n    background: #eaeaea;\n    text-align: center;\n    padding: 25px;\n}\n.capitalisk-ui-sample p[data-v-58826814] {\n    margin: 0 0 1em;\n}\n";
styleInject(css_248z$5);script$5.render = render$5;
script$5.__scopeId = "data-v-58826814";var script$4 = {
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
  setup: function setup(props) {
    var error = vue.ref(props.error);
    var dirty = vue.ref(props.error ? true : false);
    var input = vue.ref(null);
    return {
      error: error,
      dirty: dirty,
      input: input,
      focus: function focus() {
        return input.value.focus();
      },
      reset: function reset() {
        return error.value = null;
      },
      validate: function () {
        var _validate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var i, rule, e, hasError;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(!props.rules || !props.rules.length)) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return");

                case 2:
                  dirty.value = true;
                  i = 0;

                case 4:
                  if (!(i < props.rules.length)) {
                    _context.next = 19;
                    break;
                  }

                  rule = props.rules[i];
                  _context.next = 8;
                  return rule(props.modelValue);

                case 8:
                  e = _context.sent;

                  if (!(typeof e !== 'string')) {
                    _context.next = 12;
                    break;
                  }

                  error.value = null;
                  return _context.abrupt("continue", 16);

                case 12:
                  hasError = e.length > 0;

                  if (!hasError) {
                    _context.next = 16;
                    break;
                  }

                  error.value = e;
                  return _context.abrupt("break", 19);

                case 16:
                  i++;
                  _context.next = 4;
                  break;

                case 19:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function validate() {
          return _validate.apply(this, arguments);
        }

        return validate;
      }()
    };
  }
};var _withId$4 = /*#__PURE__*/vue.withScopeId("data-v-3b1ed2e7");

vue.pushScopeId("data-v-3b1ed2e7");

var _hoisted_1$3 = {
  class: "flex relative align-center"
};
var _hoisted_2 = {
  class: "prefix"
};
var _hoisted_3 = {
  class: "suffix"
};
var _hoisted_4 = {
  key: 0,
  class: "text-danger ml-1"
};

vue.popScopeId();

var render$4 = /*#__PURE__*/_withId$4(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock(vue.Fragment, null, [vue.createVNode("div", _hoisted_1$3, [vue.createVNode("span", _hoisted_2, [vue.createTextVNode(vue.toDisplayString($props.prefix), 1), vue.renderSlot(_ctx.$slots, "prefix")]), vue.createVNode("input", vue.mergeProps(_ctx.$attrs, {
    class: ["input", "input ".concat($setup.error || $setup.error ? 'input-error ' : '').concat($props.prefix || _ctx.$slots.prefix ? 'input-prefix ' : '').concat($props.suffix || _ctx.$slots.suffix ? 'input-suffix' : '')],
    value: $props.modelValue,
    onInput: _cache[1] || (_cache[1] = function (e) {
      return _ctx.$emit('update:modelValue', e.target.value);
    }),
    placeholder: $props.placeholder,
    id: $props.id,
    onBlur: _cache[2] || (_cache[2] = function () {
      return $setup.validate && $setup.validate.apply($setup, arguments);
    }),
    onEnded: _cache[3] || (_cache[3] = function () {
      return $setup.validate && $setup.validate.apply($setup, arguments);
    }),
    onFocus: _cache[4] || (_cache[4] = function () {
      return $setup.reset && $setup.reset.apply($setup, arguments);
    }),
    ref: "input"
  }), null, 16, ["value", "placeholder", "id"]), vue.createVNode("span", _hoisted_3, [vue.createTextVNode(vue.toDisplayString($props.suffix), 1), vue.renderSlot(_ctx.$slots, "suffix")])]), $setup.dirty && $setup.error && !$props.hideValidation ? (vue.openBlock(), vue.createBlock("span", _hoisted_4, vue.toDisplayString($setup.error), 1)) : vue.createCommentVNode("", true)], 64);
});var css_248z$4 = "\n.input[data-v-3b1ed2e7] {\n  border: none;\n  padding: 0.75rem;\n  border-radius: var(--border-radius);\n  text-decoration: none;\n  flex: 1;\n  background-color: var(--primary);\n  color: var(--dark);\n}\n.input.danger[data-v-3b1ed2e7] {\n  background-color: var(--danger);\n  color: var(--permanent-white);\n}\n.input.primary-darkest[data-v-3b1ed2e7] {\n  background-color: var(--primary-darkest);\n  color: var(--dark);\n}\n.input.primary-darker[data-v-3b1ed2e7] {\n  background-color: var(--primary-darker);\n  color: var(--dark);\n}\n.input[data-v-3b1ed2e7]:disabled {\n  color: var(--disabled) !important;\n}\n.input[data-v-3b1ed2e7]:focus {\n  outline: none;\n  border: none;\n  box-sizing: border-box;\n  box-shadow: inset 0 0 0 1px var(--dark);\n}\n.input-error[data-v-3b1ed2e7] {\n  outline: none;\n  border: none;\n  box-sizing: border-box;\n  box-shadow: inset 0 0 0 1px var(--danger);\n}\n.input-prefix[data-v-3b1ed2e7] {\n  padding-left: 2.5rem;\n}\n.input-suffix[data-v-3b1ed2e7] {\n  padding-right: 2.5rem;\n}\n.prefix[data-v-3b1ed2e7] {\n  position: absolute;\n  left: 1em;\n}\n.suffix[data-v-3b1ed2e7] {\n  position: absolute;\n  right: 1rem;\n}\nlabel[data-v-3b1ed2e7] {\n  position: relative;\n  left: 15px;\n}\n.input[data-v-3b1ed2e7]::placeholder {\n  color: var(--dark);\n}\n";
styleInject(css_248z$4);script$4.render = render$4;
script$4.__scopeId = "data-v-3b1ed2e7";var script$3 = {
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
};var _withId$3 = /*#__PURE__*/vue.withScopeId("data-v-6775c02a");

vue.pushScopeId("data-v-6775c02a");

var _hoisted_1$2 = {
  key: 1,
  class: "fa fa-circle-notch fa-spin mr-1"
};

vue.popScopeId();

var render$3 = /*#__PURE__*/_withId$3(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = vue.resolveComponent("router-link");

  return !$props.routerLink ? (vue.openBlock(), vue.createBlock("a", {
    key: 0,
    class: ["button cursor-pointer text-center", $props.value ? 'default' : '']
  }, [!$props.loading && $props.icon ? (vue.openBlock(), vue.createBlock("i", {
    key: 0,
    class: "fa fa-".concat($props.icon, " ").concat($props.value ? 'mr-1' : '')
  }, null, 2)) : vue.createCommentVNode("", true), $props.loading ? (vue.openBlock(), vue.createBlock("i", _hoisted_1$2)) : vue.createCommentVNode("", true), vue.createTextVNode(vue.toDisplayString($props.value), 1)], 2)) : (vue.openBlock(), vue.createBlock(_component_router_link, {
    key: 1,
    class: ["button", $props.value ? 'default' : ''],
    to: $props.href
  }, {
    default: _withId$3(function () {
      return [!$props.loading && $props.icon ? (vue.openBlock(), vue.createBlock("i", {
        key: 0,
        class: "fa fa-".concat($props.icon, " mr-2")
      }, null, 2)) : vue.createCommentVNode("", true), vue.createTextVNode(" " + vue.toDisplayString($props.value), 1)];
    }),
    _: 1
  }, 8, ["class", "to"]));
});var css_248z$3 = "\na.button[data-v-6775c02a] {\n  display: block;\n  border: 0;\n  border-radius: var(--border-radius);\n  text-decoration: none;\n  background-color: var(--primary-lighter);\n  color: var(--permanent-white);\n  text-transform: uppercase;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 1.25px;\n  text-transform: uppercase;\n}\na.button.default[data-v-6775c02a] {\n  padding: var(--unit-1) var(--unit-3) !important;\n}\na.button.outline[data-v-6775c02a] {\n  border: 1px solid var(--primary-lighter);\n  background-color: var(--primary-lighter-bg);\n  color: var(--dark);\n}\na.button.outline.warning[data-v-6775c02a] {\n  border: 1px solid var(--warning);\n  background-color: var(--warning);\n  color: var(--permanent-dark);\n}\na.button.outline.danger[data-v-6775c02a] {\n  border: 1px solid var(--danger);\n  background-color: var(--danger-bg);\n}\na.button.warning[data-v-6775c02a] {\n  background-color: var(--warning);\n  color: var(--permanent-dark);\n}\na.button.danger[data-v-6775c02a] {\n  background-color: var(--danger);\n}\na.button.success[data-v-6775c02a] {\n  background-color: var(--success);\n}\n";
styleInject(css_248z$3);script$3.render = render$3;
script$3.__scopeId = "data-v-6775c02a";var script$2 = {
  name: 'Tooltip',
  props: {
    content: {
      type: String,
      required: true
    }
  },
  setup: function setup() {
    var tooltipRef = vue.ref(null);
    var tooltipActive = vue.ref(false);
    return {
      tooltipRef: tooltipRef,
      tooltipActive: tooltipActive
    };
  }
};var _withId$2 = /*#__PURE__*/vue.withScopeId("data-v-71345c84");

var render$2 = /*#__PURE__*/_withId$2(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock(vue.Fragment, null, [vue.createVNode("i", {
    class: "far fa-question-circle cursor-pointer",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.tooltipActive = !$setup.tooltipActive;
    }),
    ref: "tooltipRef"
  }, null, 512), $setup.tooltipActive ? (vue.openBlock(), vue.createBlock("div", {
    key: 0,
    class: "tooltip pa-1 no-select",
    style: {
      top: _ctx.$refs.tooltipRef.getBoundingClientRect().bottom + 5 + 'px',
      left: _ctx.$refs.tooltipRef.getBoundingClientRect().left + 5 + 'px'
    }
  }, vue.toDisplayString($props.content), 5)) : vue.createCommentVNode("", true)], 64);
});var css_248z$2 = "\n.tooltip[data-v-71345c84] {\n  position: fixed;\n  /* border: 1px solid var(--dark); */\n  border-radius: var(--border-radius);\n  background-color: var(--primary-darker);\n  max-width: 30vw;\n  z-index: 10;\n}\n.tooltip.danger[data-v-71345c84] {\n  border: 1px solid var(--danger);\n  color: var(--danger);\n  font-weight: 900;\n}\n";
styleInject(css_248z$2);script$2.render = render$2;
script$2.__scopeId = "data-v-71345c84";var script$1 = {
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
};var _withId$1 = /*#__PURE__*/vue.withScopeId("data-v-7dd076b2");

vue.pushScopeId("data-v-7dd076b2");

var _hoisted_1$1 = {
  class: "switch"
};

vue.popScopeId();

var render$1 = /*#__PURE__*/_withId$1(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("label", _hoisted_1$1, [vue.createVNode("input", {
    type: "checkbox",
    checked: $props.modelValue,
    onChange: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('update:modelValue', !$props.modelValue);
    })
  }, null, 40, ["checked"]), vue.createVNode("span", {
    class: "slider cursor-pointer",
    id: $props.id
  }, null, 8, ["id"])]);
});var css_248z$1 = "\n.switch[data-v-7dd076b2] {\n  position: relative;\n  display: inline-block;\n  width: 30px;\n  height: 17px;\n}\n.switch input[data-v-7dd076b2] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.slider[data-v-7dd076b2] {\n  border-radius: 17px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--switch-background);\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n.slider[data-v-7dd076b2]:before {\n  border-radius: 50%;\n  position: absolute;\n  content: '';\n  height: 13px;\n  width: 13px;\n  left: 3px;\n  bottom: 2px;\n  background-color: var(--dark);\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\ninput:checked + .slider[data-v-7dd076b2] {\n  background-color: var(--primary-lighter);\n}\ninput:focus + .slider[data-v-7dd076b2] {\n  box-shadow: 0 0 1px var(--primary-lighter);\n}\ninput:checked + .slider[data-v-7dd076b2]:before {\n  -webkit-transform: translateX(11px);\n  -ms-transform: translateX(11px);\n  transform: translateX(11px);\n  background-color: var(--permanent-white);\n}\n";
styleInject(css_248z$1);script$1.render = render$1;
script$1.__scopeId = "data-v-7dd076b2";var script = {
  name: 'Notification',
  setup: function setup() {
    vue.inject('store');
    var divs = vue.ref([]);
    vue.onBeforeUpdate(function () {
      return divs.value = [];
    });
    vue.onUpdated(function () {
      for (var i = 0; i < divs.value.length; i++) {
        var notification = divs.value[i];
        var bottom = (notification.offsetHeight + 10) * i;
        notification.style.bottom = "".concat(bottom, "px");
      }
    });
    var notifications = vue.reactive([]);

    var denotify = function denotify(index) {
      return notifications.splice(index, 1);
    };

    var notify = function notify(n) {
      notifications.push(n);
      if (n.seconds) setTimeout(function () {
        var index = notifications.findIndex(function (m) {
          return m === n.message;
        });
        denotify(index);
      }, n.seconds * 1000);
    };

    return {
      notifications: notifications,
      divs: divs,
      notify: notify,
      denotify: denotify
    };
  }
};var _withId = /*#__PURE__*/vue.withScopeId("data-v-78ef17b6");

vue.pushScopeId("data-v-78ef17b6");

var _hoisted_1 = {
  class: "break mr-2"
};

vue.popScopeId();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.notifications ? (vue.openBlock(true), vue.createBlock(vue.Fragment, {
    key: 0
  }, vue.renderList($setup.notifications, function (notification, i) {
    return vue.openBlock(), vue.createBlock("div", {
      key: i,
      class: ["notification pa-4 ma-2", notification.error ? 'danger' : ''],
      ref: function ref(el) {
        if (el) $setup.divs[i] = el;
      }
    }, [vue.createVNode("div", {
      class: "close-btn cursor-pointer",
      onClick: function onClick($event) {
        return $setup.denotify(i);
      }
    }, "✕", 8, ["onClick"]), vue.createVNode("div", _hoisted_1, vue.toDisplayString(notification.message), 1)], 2);
  }), 128)) : vue.createCommentVNode("", true);
});var css_248z = "\n.notification[data-v-78ef17b6] {\n  position: fixed;\n  border: 1px solid var(--dark);\n  border-radius: var(--border-radius);\n  bottom: 0px;\n  right: 0px;\n  background-color: var(--primary);\n  max-width: 30vw;\n  z-index: 10;\n}\n.notification.danger[data-v-78ef17b6] {\n  border: 1px solid var(--danger);\n  color: var(--danger);\n  font-weight: 900;\n}\n.close-btn[data-v-78ef17b6] {\n  position: absolute;\n  right: var(--unit-2);\n  font-size: var(--unit-2);\n  color: var(--dark) !important;\n}\n";
styleInject(css_248z);script.render = render;
script.__scopeId = "data-v-78ef17b6";var components$1=/*#__PURE__*/Object.freeze({__proto__:null,Sample: script$5,Input: script$4,Button: script$3,Tooltip: script$2,Switch: script$1,Notification: script});var install = function installCapitaliskUi(app) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    app.component("Clsk".concat(componentName), component);
  });
}; // Create module definition for Vue.use()
var components=/*#__PURE__*/Object.freeze({__proto__:null,'default': install,Sample: script$5,Input: script$4,Button: script$3,Tooltip: script$2,Switch: script$1,Notification: script});// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)

Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') {
    install["Clsk".concat(componentName)] = component;
  }
});module.exports=install;