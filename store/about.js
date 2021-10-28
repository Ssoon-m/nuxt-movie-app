export default {
  namespaced: true,
  state: () => ({
    name: 'SOONMIN',
    email: 'tkksm@naver.com',
    blog: 'https://github.com/Ssoon-m',
    phone: '+82-10-3741-9532',
    image: 'images/Crayon.png'

  }),
  getters : {
    getName(state){
      return state.name;
    },
    getEmail(state){
      return state.email;
    },
    getBlog(state){
      return state.blog;
    },
    getPhone(state){
      return state.phone;
    },
    getImage(state){
      return state.image;
    }
  }
}