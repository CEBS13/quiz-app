import { shallowMount } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
//import HelloWorld from '@/components/HelloWorld.vue'
import QuestionBox from '@/components/QuestionBox.vue'
import App from '@/App.vue'

describe('QuestionBox.vue', () => {

  const currentQuestion = {
    "category": "General Knowledge",
    "type": "multiple",
    "difficulty": "medium",
    "question": "According to the BBPA, what is the most common pub name in the UK?",
    "correct_answer": "Red Lion",
    "incorrect_answers": [
        "Royal Oak",
        "White Hart",
        "King's Head"
    ]
}
let wrapper;

  beforeEach( () => {
    wrapper = mount(QuestionBox, {
      propsData: { currentQuestion }
    });

  });
    it('renders question when passed', () => {
    
      expect(wrapper.text()).toMatch(currentQuestion.question)
    });
  
    it('renders incorrect answers when passed', () => {
      
      expect(wrapper.text()).toMatch(currentQuestion.incorrect_answers[0])
    });
  
    
    it('answer passed is array', () => {
      
      expect(wrapper.text()).toMatch(currentQuestion.correct_answer)
    });
  



  
});

