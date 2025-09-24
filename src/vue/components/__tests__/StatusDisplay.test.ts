import { shallowMount } from '@vue/test-utils';
import StatusDisplay from '../StatusDisplay.vue';

describe('StatusDisplay', () => {
    it('should display "Status: Online" when isOnline is true', () => {
        const wrapper = shallowMount(StatusDisplay, {
            props: { isOnline: true, message: 'Custom Message' },
        });
        // Este test ignora el caso 'message.length === 0'.
        expect(wrapper.find('p').text()).toBe('Status: Online');
    });
});