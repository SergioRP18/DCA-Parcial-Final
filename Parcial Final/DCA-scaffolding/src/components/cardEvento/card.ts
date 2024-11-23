
export enum AttributesEvent {
    'uid'='uid',
    'image'='image',
    'name'='name',
    'date'='date',
    'location'='location',
    'asist'='asist',
}

class CardEvent extends HTMLElement {
    uid?: number;
    image?: string;
    name?: string;
    date?: number;
    location?: string;
    asist?: number;

    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    static get observedAttributes(){
        return Object.keys(AttributesEvent);
    }

    attributeChangedCallback(propName: AttributesEvent, oldValue: string|any, newValue:string|any){
        switch(propName){
            case AttributesEvent.uid:
                this.uid = newValue ? Number(newValue): undefined;
                break;

            case AttributesEvent.date:
                this.date = newValue ? Number(newValue): undefined;
                break;
            
            case AttributesEvent.asist:
                this.asist = newValue ? Number(newValue): undefined;
                break;
            
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            const container = this.ownerDocument.createElement('div');

            const image = this.ownerDocument.createElement('img');
            const photo = this.getAttribute('image') || 'default_image';
            image.src = photo;
            image.alt = "Photo of disc or artist";

            const name = this.ownerDocument.createElement('h2');
            const nameOfDisc = this.getAttribute('name') || 'default_name_disc';
            name.innerText = nameOfDisc;

            const date = this.ownerDocument.createElement('date')
            const currentDate = this.getAttribute('date') || 'default_date';
            date.innerText = currentDate;

            const location = this.ownerDocument.createElement('h2');
            const currentLocation = this.getAttribute('location') || 'default_location';
            location.innerText = currentLocation;

            const asist = this.ownerDocument.createElement('span');
            const numberOfAsist = this.getAttribute('asist') || 'default_asist';
            asist.innerText = numberOfAsist;

            container.appendChild(image);
            container.appendChild(name);
            container.appendChild(date);
            container.appendChild(location);
            container.appendChild(asist);

            this.shadowRoot?.appendChild(container);
        }
    }
}
customElements.define("card-event", CardEvent);
export default CardEvent;