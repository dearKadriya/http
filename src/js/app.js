

class App {
    addTicketControl() {
        let addButton = document.querySelector('.add_ticket')
        let modal_add_ticket = document.querySelector('.modal_add_ticket')
        let add_ticket_button_ok = document.querySelector('.add_ticket_button_ok')
        let add_ticket_button_cancel = document.querySelector('.add_ticket_button_cancel')
        addButton.addEventListener("click", () => {
            modal_add_ticket.classList.remove('hidden')
        })
        add_ticket_button_ok.addEventListener("click", () => {
            let shortdesc = document.getElementById('shortdesc')
            let longdesc = document.getElementById('longdesc')
            if (shortdesc.value.length === 0) {
                shortdesc.classList.add('required')
            } else {
                shortdesc.classList.remove('required')
                modal_add_ticket.classList.add('hidden')
                let ticket = this.createNewTicket(shortdesc.value, longdesc.value)
                this.addTicketToDom(ticket)
                shortdesc.value = ''
                this.showTicketControl()
            }
        })
        add_ticket_button_cancel.addEventListener("click", () => {
            modal_add_ticket.classList.add('hidden')
            let shortdesc = document.getElementById('shortdesc')
            shortdesc.classList.remove('required')
        })
    }
    createNewTicket(shortdesc, longdesc) {
        let today = new Date()
        let date = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear()
        let newTicket = document.createElement('div')
        newTicket.classList.add('ticket')
        let contentTicket = document.createElement('div')
        contentTicket.classList.add('ticket_content')
        newTicket.appendChild(contentTicket)
        let status = document.createElement('input')
        status.type = 'radio'
        status.classList.add('status')
        contentTicket.appendChild(status)
        let content = document.createElement('div')
        content.classList.add('content')
        content.innerHTML = shortdesc
        contentTicket.appendChild(content)
        let long_content = document.createElement('div')
        long_content.classList.add('long_content')
        long_content.classList.add('hidden')
        long_content.innerHTML = longdesc
        newTicket.appendChild(long_content)
        let dateForTicket = document.createElement('date')
        dateForTicket.classList.add('date')
        dateForTicket.innerHTML = date
        contentTicket.appendChild(dateForTicket)
        let edit = document.createElement('button')
        edit.classList.add('edit')
        edit.innerHTML = '&#9998'
        contentTicket.appendChild(edit)
        let deleteForTicket = document.createElement('button')
        deleteForTicket.classList.add('delete')
        deleteForTicket.innerHTML = '&#10539'
        contentTicket.appendChild(deleteForTicket)
        return newTicket

    }
    addTicketToDom(ticket) {
        let tickets = document.querySelector('.tickets')
        let lastTicket = tickets.lastElementChild
        tickets.insertBefore(ticket, lastTicket.nextSibling)
    }
    showTicketControl() {
        let tickets = document.querySelectorAll('.ticket')
        tickets.forEach(ticket => {
            ticket.addEventListener('click', () => {
                let longContent = ticket.querySelector('.long_content')
                longContent.classList.remove('hidden')
                console.log(longContent)
            })
        })
    }
}

let newApp = new App()
newApp.addTicketControl()
newApp.showTicketControl()
