import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        username: JSON.parse( sessionStorage.getItem('username') || '{}' ),
        password: JSON.parse( sessionStorage.getItem('password') || '{}' )
    },
    actions: {
        setUserInfo(state, userinfo){
            state.user = Object.assign({}, state.user, userinfo);
            if(userinfo.nickname){
                sessesionStorage.setItem('user', JSON.stringify(user));
            }
        }
    }
})