import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    birdInput: [
      { varname:'bird.x', description: 'Bird X position (Defined between 0 and the game.width)' },
      { varname:'bird.y', description: 'Bird Y position (Defined between 0 and the game.height)' },
      { varname:'bird.radius', description: 'Bird radius size' },
      { varname:'bird.velocity', description: 'Bird velocity (velocity in the Y position is -5 and Max 5)' },
      { varname:'bird.maxVelocity', description: 'Bird maximum velocity (5)' },
      { varname:'bird.minVelocity', description: 'Bird minimum velocity (-5)' },
      { varname:'bird.score', description: 'Actual bird score' },
      { varname:'birds.scoreSum', description: 'All birds sums' },
    ],
    pipeInput:[
      { varname: 'pipes.closest.x', description: 'Closest x pipe' },
      { varname: 'pipes.closest.bottom', description: 'Closest pipe bottom entrance' },
      { varname: 'pipes.closest.top', description: 'Closes pipe top entrance' },
      { varname: 'pipes.closest.width', description: 'Closest pipe width' },
      { varname: 'pipes.closest.velocity', description: 'Closest pipe velocity (fixed at 6)' },
    ],
    gameInput: [
      { varname: 'game.height', description: 'Height size of game canvas' },
      { varname: 'game.width', description: 'Width size of game canvas' }
    ]
  },
  getters: {
    getBirdInput: state => {
      return state.birdInput
    },
    getPipeInput: state => {
      return state.pipeInput
    },
    getGameInput: state =>{
      return state.gameInput
    },
  },
  mutations: {
    changeHolder(state, payload){
      state.placeHolder = payload.placeHolder
    }
  }
});