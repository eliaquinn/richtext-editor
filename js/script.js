import Module from './module.js'

const listDocs = document.querySelector('.recents ul')
const btnSave = document.querySelector('.buttons button')
const authorDoc = document.getElementById('author')
const titleDoc = document.getElementById('title')
const contentDoc = document.getElementById('content')

let mod = new Module()
let elements = [
    authorDoc,
    titleDoc,
    contentDoc,
    listDocs
]

mod.renderDataListDocs(listDocs)
mod.savedDocument(btnSave, 'documents-saveds', elements)