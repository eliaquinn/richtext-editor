import Module from './module.js'

const listDocs = document.querySelector('.recents ul')
const btnSave = document.getElementById('save')
const btnCan = document.getElementById('cancel')
const btnDoc = document.getElementById('new-doc')
const authorDoc = document.getElementById('author')
const titleDoc = document.getElementById('title')
const contentDoc = document.getElementById('content')
const docEditor = document.querySelector('.editor')
const toolbar = document.querySelector('.toolbar')
const imgPlaceholde = document.querySelector('main img')

let mod = new Module()

let elements = [
    authorDoc, //0
    titleDoc, //1
    contentDoc, //2
    listDocs, //3
    docEditor, //4
    toolbar, //5
    imgPlaceholde //6
]

mod.renderDataListDocs(listDocs)
mod.savedDocument(btnSave, 'documents-saveds', elements)
mod.animationEditor(btnDoc, btnCan, elements)