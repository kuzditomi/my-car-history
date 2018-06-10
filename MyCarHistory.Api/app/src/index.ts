import Vue from "vue";
import VueRouter from "vue-router";
import HelloComponent from "./components/Hello.vue";
import SziaComponent from "./components/Szia.vue";
import { Component, Prop } from "vue-property-decorator";

Vue.use(VueRouter)

const routes = [
    { path: '/hello', component: HelloComponent },
    { path: '/szia', component: SziaComponent }
];

const router = new VueRouter({
    routes // short for `routes: routes`
});

@Component({
    template: `
    <div>
        Name: <input v-model="name" type="text">

        <p>
            <router-link to="/hello">Go to Hello</router-link>
            <router-link to="/szia">Go to Szia</router-link>
        </p>
        <router-view></router-view>
    </div>
    `,
    router
})
class App extends Vue {
    @Prop() name!: string;

    constructor() {
        super();
        this.name = "World";
    }
}

new App().$mount('#app');
