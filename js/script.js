import Module from './module.js'

const listDocs = document.querySelector('.recents ul')
const btnSave = document.getElementById('save')
const btnCancel = document.getElementById('cancel')
const authorDoc = document.getElementById('author')
const titleDoc = document.getElementById('title')
const contentDoc = document.getElementById('content')
const newDoc = document.getElementById('new-doc')
const docEditor = document.querySelector('.editor')
const toolbar = document.querySelector('.toolbar')

let mod = new Module()

let elements = [
    authorDoc,
    titleDoc,
    contentDoc,
    listDocs
]

mod.renderDataListDocs(listDocs)
mod.savedDocument(btnSave, 'documents-saveds', elements)

newDoc.addEventListener('click', () => {
    toolbar.classList.add('active')
    docEditor.classList.add('show')
})