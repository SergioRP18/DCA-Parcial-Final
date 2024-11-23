import { dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";

class Nav extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();

        const adminInput = this.shadowRoot?.querySelector('#input-admin');
        // const userInput = this.shadowRoot?.querySelector('#input-user');

        adminInput?.addEventListener('click', (e) => {
            e.preventDefault();
            dispatch(navigate(Screens.ADMINISTRADOR));
            
        });
    
        // userInput?.addEventListener('click', (e) => {
        //     e.preventDefault();
        //     dispatch(navigate(Screens.USER));
        // });
    }

    render(){
        if(this.shadowRoot){
            const nav = this.ownerDocument.createElement('nav');

            const admin = this.ownerDocument.createElement('button');
            admin.innerText = "Administrador";
            admin.id = "input-admin";
            nav.appendChild(admin);

            // const user = this.ownerDocument.createElement('button');
            // user.innerText = "Usuario";
            // user.id = "input-user";
            // nav.appendChild(user);

            this.shadowRoot?.appendChild(nav);
        }
    }
}
customElements.define("app-nav", Nav);
export default Nav;