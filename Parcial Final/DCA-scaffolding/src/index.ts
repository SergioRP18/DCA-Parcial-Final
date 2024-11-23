import "./components/export"
import { addObserver, appState } from "./store";
import "./screens/administrador";
import "./screens/usuario"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this)
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = '';

            switch(appState.screen){
                case 'ADMINISTRADOR':
                    const administrador = this.ownerDocument.createElement('app-admin');
                    this.shadowRoot?.appendChild(administrador);
                    break;

                case 'USER':
                    const usuario = this.ownerDocument.createElement('app-user');
                    this.shadowRoot?.appendChild(usuario);
                    break;

                default:
                    break;
            }
        }
    }
}

customElements.define('app-container', AppContainer)