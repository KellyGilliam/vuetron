import test from 'tape';
import { mount } from 'vue-test-utils';
import { shallow, createLocalVue } from 'vue-test-utils';
import EmitEventDisplay from '../../src/components/event-stream/displays/EmitEventDisplay.vue';

const localVue = createLocalVue()
test('EmitEventDisplay.vue renders', t => { 
  t.plan(2);
  const wrapper = mount(EmitEventDisplay, {
      localVue,
      propsData: {
          event: {
            title: 'EVENT EMITTED',
            display: {
                emitted: { emit: 'eventChange'}
            },
          }
      }
  });  
  t.test('EmitEventDisplay mounts', st => {
    st.plan(1);
    st.equal(typeof wrapper, 'object');
  });

  // test that the event title is the same in the Vue's tag as it is in the props.
  t.test('Event title matches the event title in the props', st => {
    	st.plan(1);
            const eventDisplayTags = wrapper.findAll('strong');
            console.log(eventDisplayTags);
            eventTitleValue = eventDisplayTags.wrappers[0].vnode.data.attrs.value
            eventTitleValueInProps = wrapper.vm.$options.propsData.event.title;
    	st.equal(eventTitleValue,eventTitleValueInProps);         
	})

  // test that the event display is the same in the Vue's tag as it is in the props.
  

//   t.test('EmitEventDisplay renders with at least 1 Mutations component', st => {
//     st.plan(1);
//     const mutations = wrapper.findAll(Mutations);
//     st.ok(mutations.length === 1);
//   });
});



		// set values to the value property of the Response vue-object-view
			// let responseVueObjViewValues = vueObjectViews.wrappers[1].vnode.data.attrs.value;
			// locate and assign the responseViewValue
    	// let responseViewValue = '';
    	// for(let prop in responseVueObjViewValues) {
    	//     responseViewValue = responseVueObjViewValues[prop];
		// 	}
			// locate and assign the responseObj from the example propsData above
            // let eventResponseObject = wrapper.vm.$options.propsData.event.display.responseObj[0]