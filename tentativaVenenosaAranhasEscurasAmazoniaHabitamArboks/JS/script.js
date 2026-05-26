const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#m-nome')
const sFuncao = document.querySelector('#m-funcao')
const sSalario = document.querySelector('#m-salario')
const btnSalvar = document.querySelector('#btnSalvar')

const loginScreen = document.querySelector('#loginScreen')
const loginForm = document.querySelector('#loginForm')
const mainApp = document.querySelector('#mainApp')

let itens
let id

// ============ LOGIN FUNCTIONALITY ============
function initializeApp() {
    const isLoggedIn = sessionStorage.getItem('loggedIn')
    if (isLoggedIn) {
        loginScreen.classList.remove('active')
        mainApp.classList.remove('hidden')
        loadItens()
    } else {
        loginScreen.classList.add('active')
        mainApp.classList.add('hidden')
    }
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const username = document.querySelector('#login-user').value
    const password = document.querySelector('#login-password').value
    
    // Simple login validation - in a real app, this would be backend validation
    if (username === 'admin' && password === '123456') {
        sessionStorage.setItem('loggedIn', 'true')
        sessionStorage.setItem('username', username)
        
        loginScreen.classList.remove('active')
        mainApp.classList.remove('hidden')
        
        loginForm.reset()
        loadItens()
    } else {
        alert('Usuário ou senha incorretos!\n\nTeste com:\nUsuário: admin\nSenha: 123456')
    }
})

function logout() {
    if (confirm('Deseja realmente sair?')) {
        sessionStorage.removeItem('loggedIn')
        sessionStorage.removeItem('username')
        
        loginScreen.classList.add('active')
        mainApp.classList.add('hidden')
        
        modal.classList.remove('active')
        loginForm.reset()
    }
}

// ============ MODAL FUNCTIONALITY ============
function openModal(edit = false, index = 0) {
    modal.classList.add('active')

    modal.onclick = e => {
        if (e.target.className.indexOf('modal-container') !== -1) {
            closeModal()
        }
    }
    
    if (edit) {
        sNome.value = itens[index].nome
        sFuncao.value = itens[index].funcao
        sSalario.value = itens[index].salario
        id = index
    } else {
        sNome.value = ''
        sFuncao.value = ''
        sSalario.value = ''
        id = undefined
    }
}

function closeModal() {
    modal.classList.remove('active')
    id = undefined
}

// ============ ITEM MANAGEMENT ============
function editItem(index) {
    openModal(true, index)
}

function deleteItem(index) {
    if (confirm('Tem certeza que deseja deletar este funcionário?')) {
        itens.splice(index, 1)
        setItensBD()
        loadItens()
    }
}

function insertItem(item, index) {
    let tr = document.createElement('tr')

    tr.innerHTML = ` 
    <td>${item.nome}</td> 
    <td>${item.funcao}</td> 
    <td>R$ ${parseFloat(item.salario).toFixed(2)}</td> 
    <td class="acao"> 
      <button type="button" onclick="editItem(${index})"><i class='bx bx-edit'></i></button> 
    </td> 
    <td class="acao"> 
      <button type="button" onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button> 
    </td> 
  `
    tbody.appendChild(tr)
}

btnSalvar.onclick = e => {
    if (sNome.value == '' || sFuncao.value == '' || sSalario.value == '') {
        alert('Por favor, preencha todos os campos!')
        return
    }

    e.preventDefault();

    if (id !== undefined) {
        itens[id].nome = sNome.value
        itens[id].funcao = sFuncao.value
        itens[id].salario = sSalario.value
    } else {
        itens.push({
            'nome': sNome.value, 
            'funcao': sFuncao.value,
            'salario': sSalario.value
        })
    }

    setItensBD()
    closeModal()
    loadItens()
}

function loadItens() {
    itens = getItensBD()
    tbody.innerHTML = ''
    itens.forEach((item, index) => {
        insertItem(item, index)
    })
}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))


initializeApp()

