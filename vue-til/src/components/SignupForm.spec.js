import { shallowMount } from '@vue/test-utils';
import SignupForm from './SignupForm.vue';

describe('SignupForm.vue', () => {
  test('ID, PW, Nickname을 입력하지 않으면 버튼이 비활성화 된다.', () => {
    const wrapper = shallowMount(SignupForm, {
      data() {
        return {
          username: '',
          password: '',
          nickname: '',
        };
      },
    });
    const button = wrapper.find('.disabled');
    expect(button.element.disabled).toBeTruthy();
  });
});
