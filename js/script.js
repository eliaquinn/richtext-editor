const listDocs = document.querySelector('.recents ul')
const btnSave = document.querySelector('.buttons button')

const authorDoc = document.getElementById('author')
const titleDoc = document.getElementById('title')
const contentDoc = document.getElementById('content')

function createDataLocal(localname, object) {
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

    listDocs.innerHTML = ''
    renderDataListDocs()
}

function renderDataListDocs () {
    let localData = JSON.parse(localStorage.getItem('documents-saveds'))

    if(!localData) return 

    localData.forEach(data => {
        let li = `
        <li>
            <div class="title-card">
                <h3>${data.title}</h3>
                <i class='bx bx-x'></i>
            </div>
            <div class="content-card">
                <h4>Editor: ${data.author}</h4>
                <h5>Criado/Modificado em: ${data.created_at}</h5>
            </div>
        </li>`

        listDocs.innerHTML += li
    })
}

listDocs.innerHTML = ''
renderDataListDocs()

btnSave.addEventListener('click', () => {
    let date = new Date()

    const documentsSaveds = {
        id_save: crypto.randomUUID(),
        author: authorDoc.value,
        title: titleDoc.value,
        content: `${contentDoc.value}`,
        created_at: `${date.toLocaleDateString()} as ${date.toLocaleTimeString()}`
    }

    createDataLocal('documents-saveds', documentsSaveds)

    authorDoc.value = ''
    titleDoc.value = ''
    contentDoc.value = ''
})