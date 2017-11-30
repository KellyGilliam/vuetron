import test from 'tape';
import { mount } from 'vue-test-utils';
import { shallow, createLocalVue } from 'vue-test-utils';
import APIDisplay from '../../src/components/event-stream/displays/APIDisplay.vue';

const localVue = createLocalVue()

test('APIDisplay.vue renders', t => { 
  t.plan(4);
  const wrapper = mount(APIDisplay, {
      localVue,
      propsData: {
          event: {
            title: 'API REQUEST / RESPONSE',
            display: {
                requestObj: [{method: 'get'}],
                responseObj: [{type: "cors", url: "https://www.url.com/", redirected: false ,status: 200 ,ok: true, statusText: "OK", headers: {}, body: {}, bodyUsed: false}]
            },
          }
			},
      computed: {
        // passes the event's request and response objects to 'Request' and 'Response' vue-object-views
        processRequest() {
          this.processedRequest = Object.assign({}, this.event.display.requestObj);
          return this.processedRequest;
        },
        processResponse() {
          this.processedResponse = Object.assign({}, this.event.display.responseObj);
          return this.processedResponse;
        }
      }
  });  
  t.test('API mounts', st => {
    st.plan(1);
    st.equal(typeof wrapper, 'object');
  });
  t.test('APIDisplay renders API REQUEST / RESPONSE as title', st => {
    st.plan(1);
    const requestDisplay = wrapper.findAll('strong');
    let title = requestDisplay.wrappers[0].vnode.children[0].text
    st.equal(requestDisplay.wrappers[0].vnode.children[0].text, 'API REQUEST / RESPONSE');
  });
  t.test('Request view displays the same value as the Event Request Object', st => {
      st.plan(1);
			const vueObjectViews = wrapper.findAll('vue-object-view');
			// set values to the value property of the Response vue-object-view
			let requestVueObjViewValue = vueObjectViews.wrappers[0].vnode.data.attrs.value;
			// locate and assign the requestViewValue 
      let viewRequestObject = '';
      for(let prop in requestVueObjViewValue) {
					viewRequestObject = requestVueObjViewValue[prop];
			}
			// locate and assign the requestObj from the example propsData above
      let propsRequestObject = wrapper.vm.$options.propsData.event.display.requestObj[0]      
      st.equal(viewRequestObject,propsRequestObject);         
  })
  t.test('Response view displays the same value as the Event Response Object', st => {
    	st.plan(1);
			const vueObjectViews = wrapper.findAll('vue-object-view');
			// set values to the value property of the Response vue-object-view
      let responseVueObjViewValue = vueObjectViews.wrappers[1].vnode.data.attrs.value;
			// locate and assign the responseViewValue
    	let viewResponseObject = '';
    	for(let prop in responseVueObjViewValue) {
    	    viewResponseObject = responseVueObjViewValue[prop];
			}
			// locate and assign the responseObj from the example propsData above
      let propsResponseObject = wrapper.vm.$options.propsData.event.display.responseObj[0]
    	st.equal(viewResponseObject,propsResponseObject);         
	})
});