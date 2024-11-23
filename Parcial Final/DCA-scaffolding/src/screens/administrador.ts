class AppAdmin extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        const nav = this.ownerDocument.createElement("app-nav");
        this.shadowRoot?.appendChild(nav);

        const form = this.ownerDocument.createElement("app-event");
        this.shadowRoot?.appendChild(form);
    }
}
customElements.define("app-admin", AppAdmin);
export default AppAdmin;