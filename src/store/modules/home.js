const home = {
    particleActive: false
};

const mutations = {
    SET_PARTICLE_ANIMATION(state, response) {
        state.particleActive = response.particleActive;
    }
};

const getters = {
    isParticleOpen: state => state.particleActive
};

export default {
    state: home,
    mutations,
    getters
};