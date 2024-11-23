class AppUser extends HTMLElement {
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

        const header = this.ownerDocument.createElement("h1")
        header.innerText = "Eventos Disponibles";
        this.shadowRoot?.appendChild(header);

        const event = this.ownerDocument.createElement("card-event");
        this.shadowRoot?.appendChild(event);
    }
}
customElements.define("app-user", AppUser);
export default AppUser;