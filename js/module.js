export default class Module {
    insertlocalStorage (localname, object, render) {
        let exists = localStorage.getItem(`${localname}`) ? true : false

        if(!exists) {
            let converted = []
            converted.push(object)
            
            localStorage.setItem(`${localname}`, JSON.stringify(converted))
        } else {
            let data = JSON.parse(localStorage.getItem(`${localname}`))

            data.push(object)

            localStorage.setItem(`${localname}`, JSON.stringify(data))
        }

        render.innerHTML = ''
        this.renderDataListDocs(render)
    }

    renderDataListDocs (element) {
        let localData = JSON.parse(localStorage.getItem('documents-saveds'))
    
        if(!localData) return 
    
        localData.forEach(data => {
            let li = `
            <li>
                <div class="title-card">
                    <h3 id="${data.id_save}">${data.title}</h3>
                    <i class='bx bx-x'></i>
                </div>
                <div class="content-card">
                    <h4>Editor: ${data.author}</h4>
                    <h5>Criado/Modificado em: ${data.created_at}</h5>
                </div>
            </li>`
    
            element.innerHTML += li
        })
    }

    messageBox () {
        alert("preecha todos os campos")
    }

    savedDocument (element, localname, array) {
        element.addEventListener('click', () => {
            let date = new Date()
            if(array[0].value == '') return this.messageBox()
            if(array[1].value == '') return this.messageBox()
            if(array[2].value == '') return this.messageBox()
        
            const documentsSaveds = {
                id_save: crypto.randomUUID(),
                author: array[0].value,
                title: array[1].value,
                content: `${array[2].value}`,
                created_at: `${date.toLocaleDateString()} as ${date.toLocaleTimeString()}`
            }
        
            this.insertlocalStorage(localname, documentsSaveds, array[3])
        
            array[0].value = ''
            array[1].value = ''
            array[2].value = ''
        })
    }

    animationEditor (btnNewDoc, btnCancel, array) {
        btnNewDoc.addEventListener('click', () => {
            array[5].classList.add('active')
            array[4].classList.add('show')
            array[6].style.display = 'none'
        })
        
        btnCancel.addEventListener('click', () => {
            array[5].classList.remove('active')
            array[4].classList.remove('show')
            array[6].style.display = 'block'
        })
    }
}