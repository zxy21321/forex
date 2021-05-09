/* Minification failed. Returning unminified contents.
(355,38-39): run-time error JS1195: Expected expression: >
(355,72-73): run-time error JS1195: Expected expression: )
(355,74-75): run-time error JS1004: Expected ';': {
(358,11-12): run-time error JS1002: Syntax error: }
(363,35-36): run-time error JS1010: Expected identifier: (
(373,6-7): run-time error JS1195: Expected expression: ,
(374,39-40): run-time error JS1195: Expected expression: )
(374,41-42): run-time error JS1004: Expected ';': {
(389,6-7): run-time error JS1195: Expected expression: ,
(390,27-28): run-time error JS1195: Expected expression: )
(390,29-30): run-time error JS1004: Expected ';': {
(396,6-7): run-time error JS1195: Expected expression: ,
(397,38-39): run-time error JS1195: Expected expression: )
(397,40-41): run-time error JS1004: Expected ';': {
(403,6-7): run-time error JS1195: Expected expression: ,
(404,34-35): run-time error JS1195: Expected expression: )
(404,36-37): run-time error JS1004: Expected ';': {
(414,6-7): run-time error JS1195: Expected expression: ,
(415,27-28): run-time error JS1195: Expected expression: )
(415,29-30): run-time error JS1004: Expected ';': {
(417,8-9): run-time error JS1195: Expected expression: ,
(418,31-32): run-time error JS1195: Expected expression: )
(418,33-34): run-time error JS1004: Expected ';': {
(421,53-54): run-time error JS1195: Expected expression: >
(437,3-4): run-time error JS1002: Syntax error: }
(439,23-24): run-time error JS1004: Expected ';': :
(439,51-52): run-time error JS1004: Expected ';': {
(453,3-4): run-time error JS1002: Syntax error: }
(454,22-23): run-time error JS1195: Expected expression: )
(454,24-25): run-time error JS1004: Expected ';': {
(470,1-2): run-time error JS1002: Syntax error: }
(435,11-24): run-time error JS1018: 'return' statement outside of function: return unique
(416,7-168): run-time error JS1018: 'return' statement outside of function: return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
(410,9-103): run-time error JS1018: 'return' statement outside of function: return /(^[0-9 \-./\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]{1,40})$/
(412,9-70): run-time error JS1018: 'return' statement outside of function: return /(^[0-9A-Za-z \-./\u4e00-\u9fff\u00C0-\u00ff]{1,40})$/
(402,7-16): run-time error JS1018: 'return' statement outside of function: return ""
(400,30-47): run-time error JS1018: 'return' statement outside of function: return "reversed"
(395,7-31): run-time error JS1018: 'return' statement outside of function: return self.label.submit
(393,9-31): run-time error JS1018: 'return' statement outside of function: return self.label.wait
(388,7-21): run-time error JS1018: 'return' statement outside of function: return options
 */

Vue.use(VeeValidate);
Vue.use(VTooltip);
//Vue.directive('tooltip', VTooltip)

Vue.directive('tooltip', VTooltip.VTooltip);
Vue.directive('close-popover', VTooltip.VClosePopover);
Vue.component('v-popover', VTooltip.VPopover);

Vue.component('live-form', {
  template: '#live-form-template',
  props: ['formid', 'site', 'referrer', 'formcolorcode', 'hidecompanytrustoption'],
  components: {
    "vue-recaptcha": VueRecaptcha,
  },
  data: function () {
    return {
      loading: true,
      submitting: false,
      error: null,
      user: {
        country: '',
        phonePrefix: ''
      },
      restricted: false,
      setting: {
        subscribe: false,
        hidecompanytrustoption: this.hidecompanytrustoption
      },
      label: {
        heading: '',
        name: '',
        firstName: '',
        middleName: '',
        lastName: '',
        country: '',
        applicationType: '',
        phone: '',
        code: '',
        email: '',
        supportingDocuments: '',
        subscribe: '',
        encryption: '',
        submit: '',
        footer: '',
        wait: '',
        marketingConsent: '',
        dataCollectionConsent: ''
      },
      placeholder: {
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        phone: '',
        comments: ''
      },
      tooltip: {
        firstName: '',
        lastName: '',
        country: '',
        applicationType: '',
        phone: '',
        classes: ''
      },
      errorMessage: {
        required: '',
        name: '',
        email: '',
        phone: '',
        submit: '',
        dataCollection: ''
      },
      countries: [],
      applicationTypes: [],
      phoneTypes: [],
      form: {
        site: this.site,
        formId: this.formid,
        customerNo: this.referrer,
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        countryCode: '',
        applicationType: 'Individual',
        phoneType: 'Phone',
        code: '',
        phone: '',
        subscribe: false,
        marketingConsent: false,
        dataCollectionConsent: false,
        recaptchaToken: "",
        tooltipclasses: this.formcolorcode != null ? 'vue-tooltip-theme form-color-' + this.formcolorcode : 'vue-tooltip-theme'
      },
      displayMarketingConsent: false,
      displayDataCollectionConsent: false,
      displayRecaptcha: false,
      displayFacebookPrefill: false,
      recaptchaSiteKey: "",
      fbSignInParams: {
        scope: 'email',
        return_scopes: true
      },
      shortForm: false,
      hideMiddleName: false,
      submitButtonColour: '#008800',
      formType: '',
      reverseNames: false,
      useChineseEncoding: false
    }
  },
  methods: {
    populateForm: function (data) {
      var self = this;
      Vue.util.extend(self.user, data.user);
      Vue.util.extend(self.setting, data.setting);
      Vue.util.extend(self.label, data.label);
      Vue.util.extend(self.placeholder, data.placeholder);
      Vue.util.extend(self.tooltip, data.tooltip);
      Vue.util.extend(self.countries, data.countries);
      Vue.util.extend(self.phoneTypes, data.phoneTypes);
      Vue.util.extend(self.applicationTypes, data.applicationTypes);
      Vue.util.extend(self.errorMessage, data.error);
      self.displayMarketingConsent = data.displayMarketingConsent;
      self.displayDataCollectionConsent = data.displayDataCollectionConsent;

      self.recaptchaSiteKey = data.recaptchaSiteKey;
      self.displayRecaptcha = data.displayRecaptcha;

      self.displayFacebookPrefill = data.displayFacebookPrefill;
      self.shortForm = data.shortForm;
      self.hideMiddleName = data.hideMiddleName;
      self.submitButtonColour = data.submitButtonColour;
      self.formType = data.formType;
      self.reverseNames = data.reverseNames;
      self.useChineseEncoding = data.useChineseEncoding;
      //$.get("//freegeoip.net/json/", function (response) {
      //    self.form.countryCode = response.country_code;
      //}, "jsonp")
      self.form.countryCode = self.user.country;

      self.setupValidation(data);
    },
    setupValidation: function (data) {
      var self = this

      const dictionary = {
        en: {
          messages: {
            required: function (field) {
              console.log(field)
              var msg = data.error.required;
              switch (field) {
                case 'firstName':
                case 'lastName':
                case 'middleName':
                  msg = data.error.name
                  break;
                case 'phone':
                  msg = data.error.phone
                  break;
                case 'comments':
                  msg = data.error.comments
                  break;
                case 'dataCollection':
                  msg = data.error.dataCollection
                  break;
                case 'email':
                  msg = data.error.email;
                  break;
              }
              return msg;
            },
            email: function (field) {
              return data.error.email
            },
            regex: function (field) {
              var msg = 'Please enter a valid ' + field;
              switch (field) {
                case 'firstName':
                case 'lastName':
                case 'middleName':
                  msg = data.error.name
                  break;
                case 'phone':
                  msg = data.error.phone
                  break;
                case 'comments':
                  msg = data.error.comments
                  break;
                case 'dataCollectionConsent':
                  msg = data.error.dataCollection
                  break;
                case 'email':
                  msg = data.error.email;
                  break;
                default:
                  break;
              }
              return msg
            }
          }
        }
      }

      self.$validator.updateDictionary(dictionary)

      self.loading = false
      if (self.displayRecaptcha) self.loadRecaptcha();
    },
    validateBeforeSubmit: function () {
      var self = this;

      // validate returns a promise and provides the validation result
      self.$validator.validateAll().then(function (success) {
        if (!success) {
          return;
        }
        //self.submitForm();

        if (self.displayRecaptcha) {
          self.$refs.invisibleRecaptcha.execute();
        } else {
          self.submitForm();
        }
      }).catch(function (err) {

      });
    },
    submitForm: function () {
      var self = this;
      self.submitting = true;
      self.error = null;

      $.ajax({
        url: '/umbraco/Surface/Form/SubmitForm',
        type: 'post',
        data: self.form,
        error: function (e) {
          self.error = self.errorMessage.submit
          self.submitting = false;
        },
        success: function (d) {
          if (d.success) {
            successUrl = d.url;

            var props = d.dataLayer;

            var doCallback = false;

            if (props != null && props.length > 0) {
              try {
                for (i = 0; i < props.length; i++) {
                  var prop = props[i];

                  if (prop.PropertyName == "event") {
                    var obj = {
                      'event': prop.PropertyValue,
                      'eventCallback': function () {
                        //window.setTimeout(function() { window.location = successUrl; }, 10000);
                        redirectToResult(successUrl);
                      }
                    };

                    dataLayer.push(obj);

                    doCallback = true;
                  }
                  else {
                    var jsonstr = "{\"" + prop.PropertyName + "\":\"" + prop.PropertyValue + "\"}";

                    var jsonobj = JSON.parse(jsonstr);

                    dataLayer.push(jsonobj);
                  }
                }
              }
              catch (e) {
                console.log('error!', e);
                redirectToResult(successUrl);
              }
            }

            if (!doCallback) {
              // no GTM event, redirect immediately
              if (successUrl != null) {
                redirectToResult(successUrl);
              }
              else {
                //check for sucess message
                $('.subscribeForm', form).hide();
                $('.subscribeConfirmation', form).show();
              }
            } else {
              // fallback incase GTM never provides event callback
              window.setTimeout(function () {
                console.log('gtm never completed!');
                redirectToResult(successUrl);
              }, 8000);
            }
          }
          else {
            self.error = d;
            self.submitting = false;
          }
        }
      });
    },
    onCaptchaExpired: function () {
      this.$refs.invisibleRecaptcha.reset();
    },
    onCaptchaVerified: function (recaptchaToken) {
      var self = this;
      self.form.recaptchaToken = recaptchaToken;

      self.submitForm();
    },
    customValidation: function (msg) {
      var self = this;
      return "this.setCustomValidity('" + msg + "')";
    },
    loadRecaptcha: function () {
      let recaptchaScript = document.createElement("script");
      recaptchaScript.setAttribute(
        "src",
        "https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit"
      );
      recaptchaScript.async = true;
      recaptchaScript.defer = true;
      document.head.appendChild(recaptchaScript);
    },
    onSignInSuccess: function (response) {
      var self = this;
      FB.api('/me?fields=name,first_name,middle_name,last_name,email', function (dude) {
        self.form.firstName = dude.first_name;
        self.form.middleName = dude.middle_name;
        self.form.lastName = dude.last_name;
        self.form.email = dude.email;
      });
    },
    onSignInError: function (error) {
      console.log('OH NOES', error);
    },
    setTooltip: function (tooltipContent) {
      var self = this;
      if (!tooltipContent) {
        return null;
      }
      return { content: tooltipContent, classes: self.form.tooltipclasses }
      },
      orderByMeta: function (sorted) {
          let arr = [];
          for (let i = 0; i < sorted.length; i++) {
              if (!arr.find(element => element.meta === sorted[i].meta)) {
                  arr.push(sorted[i]);
              }
          }
          return arr;
      }
  },
  computed: {
    isMiddleNameVisible: function () {
      var self = this;

      if (self.shortForm)
        return false;

      if (self.hideMiddleName)
        return false;

      return true;
    },
    applicationTypeOptions: function () {
      var self = this;

      var options = [];

      for (var i = 0; i < self.applicationTypes.length; i++) {
        if ((self.applicationTypes[i].value == "Company/Trust" && self.restricted)
          ||
          (self.applicationTypes[i].value == "Company/Trust" && self.setting.hidecompanytrustoption)) {
          continue;
        }
        options.push(self.applicationTypes[i]);
      }

      return options;
    },
    submitText: function () {
      var self = this;
      if (self.submitting) {
        return self.label.wait;
      }
      return self.label.submit;
    },
    reverseContainerClass: function () {
      var self = this

      if (self.reverseNames) return "reversed";

      return "";
    },
    nameEncodingRegex: function () {
      var self = this

      console.log(self.useChineseEncoding)

      if (self.useChineseEncoding) {
        return /(^[0-9 \-./\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]{1,40})$/;
      } else {
        return /(^[0-9A-Za-z \-./\u4e00-\u9fff\u00C0-\u00ff]{1,40})$/;
      }
    },
    emailRegex: function () {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
      },
      orderedCodes: function () {

          var self = this
          var countryCopy = this.countries.map((x) => x);
          countryCopy.sort(function (a, b) {
              if (a.meta < b.meta) {
                  return -1;
              }
              if (a.meta > b.meta) {
                  return 1;
              }
              // a must be equal to b
              return 0;
          })

          var unique = this.orderByMeta(countryCopy);

          return unique;
    }
  },
  watch: {
    "form.countryCode": function (newVal, oldVal) {
      var self = this;
      if (newVal) {
        var result = $.grep(self.countries, function (e) { return e.value == newVal; });
        if (result.length > 0) {
          self.form.code = result[0].meta;
          self.restricted = result[0].restricted;

          if (self.restricted && self.form.applicationType == "Company/Trust") {
            self.form.applicationType = null;
          }
        }
      }
    }
  },
  created: function () {
    var self = this;
    $.ajax({
      url: '/umbraco/api/formapi/getform/' + self.formid,
      type: 'get',
      error: function (e) {
      },
      success: function (data) {
        if (data) {
          self.populateForm(data);
        } else {
          self.error = 'There was an error loading the form. Please try again.';
        }
      }
    });
  }
});

var redirectToResult = function (url) {
  try {
    var tracker = ga.getAll()[0];
    var linker = new window.gaplugins.Linker(tracker);
    location.href = linker.decorate(url);
  } catch (e) {
    location.href = url;
  }
};
;
// Inject script dependencies
var injectScript = function (src, cb) {
    var sj = document.createElement('script');
    sj.type = 'text/javascript';
    sj.async = true;
    sj.src = src;
    sj.addEventListener ? sj.addEventListener('load', cb, false) : sj.attachEvent('onload', cb);
    var allScripts = document.getElementsByTagName('script');
    var s = allScripts[allScripts.length - 1];
    s.parentNode.insertBefore(sj, s);
};

Vue.component('live-spread-quote', {
    template: '#live-spread-quote',
    props: ['pair', 'ispro'],
    data: function () {
        return {
            na: '-',
            hubState: AXI.livePriceWidget.hubStore.state,
        }
    },
    computed: {
        quote: function () {
            var self = this;
            return this.hubState.quotes.find(function (e) {
                return e.symbol === self.pair;
            });
        },
        std: function () {
            return this.quote.std;
        },
        pro: function () {
            return this.quote.pro === null ? "n/a" : this.quote.pro;
        },
    }
});

Vue.component('live-price-quote', {
    template: '#live-price-quote',
    props: ['pair'],
    data: function () {
        return {
            na: '-',
            hubState: AXI.livePriceWidget.hubStore.state,
        }
    },
    filters: {
        formatted: function (val, precision) {
            var self = this
            if (!isNaN(parseFloat(val)) && isFinite(val)) {
                if (precision === null || precision === undefined) {
                    precision = 1
                }
                return val.toFixed(precision)
            }
            return val
        }
    },
    directives: {
        highlight: {
            update: function (el, binding) {
                if (binding.value > binding.oldValue) {
                    el.classList.add("text-secondary-e")
                }
                if (binding.value < binding.oldValue) {
                    el.classList.add("text-brand-accent")
                }
                setTimeout(function () {
                    el.classList.remove("text-secondary-e")
                    el.classList.remove("text-brand-accent")
                }, 1000)
            }
        }
    },
    methods: {
        isNumeric: function (val) {
            return !isNaN(parseFloat(val)) && isFinite(val)
        }
    },
    computed: {
        quote: function () {
            var self = this;
            return this.hubState.quotes.find(function (e) {
                return e.symbol === self.pair;
            });
        },
        bid: function () {
            return this.quote.bid;
        },
        ask: function () {
            return this.quote.ask;
        },
        std: function () {
            return this.quote.std;
        },
        pro: function () {
            return this.quote.pro === null ? "n/a" : this.quote.pro;
        },
        digits: function () {
            return this.quote.digits;
        },
        precision: function () {
            return this.quote.precision;
        }
    }
});

Vue.component('live-spread-table', {
    template: '#live-spread-table',
    props: ['quotes']
});

Vue.component('live-price-tab', {
    template: '#live-price-tab',
    props: ['title', 'quotes', 'index', 'currentTabIndex', 'maxTabIndex'],
    computed: {
        visible: function () {
            return this.currentTabIndex === this.index;
        },
        nextVisible: function () {
            return this.maxTabIndex > this.currentTabIndex;
        },
        prevVisible: function () {
            return this.currentTabIndex > 0;
        }
    },
    methods: {
        next: function () {
            this.$parent.currentTabIndex++;
        },
        prev: function () {
            this.$parent.currentTabIndex--;
        }
    }
});

Vue.component('live-price-widget', {
    template: '#live-price-widget-template',
    props: {
        tabs: {
            type: [Object, Array]
        }
    },
    data: function () {
        return {
            hubState: AXI.livePriceWidget.hubStore.state,
            currentTabIndex: this.tabs[0].index,
            maxTabIndex: this.tabs.length - 1
        }
    }
    /*,
    created: function () {

    },
    computed:  {
        q: function () {
            console.log(this.hubState.quotes);
            return this.hubState.quotes;
        }
    },
    watch: {
        "hubState.quotes": {
            handler: function (val, oldVal) {
                console.log(val);
            },
            deep: true
        }
    }*/
});

if (AXI.livePriceWidget && AXI.livePriceWidget.enabled) {
	injectScript('https://cdnjs.cloudflare.com/ajax/libs/signalr.js/2.4.0/jquery.signalR.min.js', function () {
        injectScript(AXI.livePriceWidget.hubPath + 'signalr/hubs', function () {
            new Vue({
                el: '#live-price-hub-template',
                data: {
                    hubState: AXI.livePriceWidget.hubStore.state
                },
                methods: {
                    updateSymbol: function (model) {
                        AXI.livePriceWidget.hubStore.setSymbol(model.symbol, model);
                    }
                },
                created: function () {
                    var self = this;
                    //var hub = $.connection.axHub;
                    var hub;
                    if (AXI.livePriceWidget.hubType === 'cn') {
                        hub = $.connection.cnHub;
                    }
                    if (AXI.livePriceWidget.hubType === 'ae') {
                        hub = $.connection.aeHub;
                    }
                    if (AXI.livePriceWidget.hubType === 'ax') {
                        hub = $.connection.axHub;
                    }
                    hub.client.updatePrice = self.updateSymbol;

                    $.connection.hub.url = AXI.livePriceWidget.hubPath + 'signalr';
                    $.connection.hub.start().done(function () {
                        console.debug('starting live price widget');
                    });
                }
            });
        });
    });
}

;
