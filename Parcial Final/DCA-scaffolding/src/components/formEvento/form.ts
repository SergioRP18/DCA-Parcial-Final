import { Event } from "../../types/event";
import { addProducts } from "../../firebaseConfig";

const formData: Omit<Event, 'id'> = {
    name: '',
    location: '',
    image: '',
    asist: 0,
    date: 0,
};

class FormEvent extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    ChangeName(e: any){
        formData.name = e.target.value;
    }

    ChangeLocation(e: any){
        formData.location = e.target.value;
    }

    ChangeAsist(e: any){
        formData.asist = e.target.value;
    }

    ChangeImage(e: any){
        formData.image = e.target.value;
    }

    ChangeDate(e: any){
        formData.date = e.target.value;
    }

    submitForm(){
        addProducts(formData);
    }

    render(){
        if(this.shadowRoot){
            const container = this.ownerDocument.createElement('div');

            const title = this.ownerDocument.createElement('h1');
            title.innerText = "Add New Event";
            container.appendChild(title);

            const form = this.ownerDocument.createElement('form');
            container.appendChild(form);

            const name = this.ownerDocument.createElement('input');
            name.placeholder = "Enter Name Event";
            name.addEventListener('change', this.ChangeName);
            form.appendChild(name);

            const location = this.ownerDocument.createElement('input');
            location.placeholder = "Enter Location";
            location.addEventListener('change', this.ChangeLocation);
            form.appendChild(location);

            const image = this.ownerDocument.createElement('input');
            image.placeholder = "Enter Cover";
            image.addEventListener('change', this.ChangeImage);
            form.appendChild(image);

            const asist = this.ownerDocument.createElement('input');
            asist.placeholder = "Enter Number Of Asistents";
            asist.addEventListener('change', this.ChangeAsist);
            form.appendChild(asist);

            const date = this.ownerDocument.createElement('input');
            date.type = 'date'
            asist.placeholder = "Enter Name Event";
            asist.addEventListener('change', this.ChangeAsist);
            form.appendChild(asist);

            const save = this.ownerDocument.createElement('button');
            save.innerText = "Publish";
            save.addEventListener('click', this.submitForm);
            form.appendChild(save);

            this.shadowRoot?.appendChild(container);
        }
    }
}
customElements.define("app-event", FormEvent);
export default FormEvent;