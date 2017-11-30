import test from 'tape';
import { mount } from 'vue-test-utils';
import { shallow, createLocalVue } from 'vue-test-utils';
import EmitEventDisplay from '../../src/components/event-stream/displays/EmitEventDisplay.vue';

const localVue = createLocalVue()
test('EmitEventDisplay.vue renders', t => { 
  t.plan(3);
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

  // test that the event title is the same in the view as it is in the props.
  t.test('Event title matches the event title in the props', st => {
    st.plan(1);
    // find tags where the props we are testing for are being displayed
    const eventDisplayTags = wrapper.findAll('strong');
    // from View:
    let eventTitleInView = eventDisplayTags.wrappers[0].vnode.children[0].text;
    // from Props:
    let eventTitleInProps = wrapper.vm.$options.propsData.event.title;
    st.equal(eventTitleInView,eventTitleInProps);         
    })
    
  // test that the event display is the same in the view as it is in the props.
  t.test('Event display matches the event title in the props', st => {
    st.plan(1);
    // find tags where the props we are testing for are being displayed
    const eventDisplayTags = wrapper.findAll('p');
    // from View:
    let eventDisplayInView = eventDisplayTags.wrappers[1].vnode.children[1].text;    
    // from Props (the event should show like below):
    let eventDisplayInProps = ' {\n  "emitted": {\n    "emit": "eventChange"\n  }\n}'
    st.equal(eventDisplayInView,eventDisplayInProps);         
})
});
