import { GitHubUser } from "./GitHubUser.js"

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)

    this.tbody = this.root.querySelector('table tbody')

    this.load()
  }

  load() {
    this.users = JSON.parse(localStorage.getItem('@github-favorites:')) || []
  }

  delete(user) {
    const filteredEntries = this.users.filter(entry =>
      entry.login !== user.login)

    this.users = filteredEntries
    this.update()
    this.save()
  }

  async add(username){
    try{
      const userExists = this.users.find(user => user.login == username)

      if(userExists){
        throw new Error('Usuário já cadastrado!')
      }

      const user = await GitHubUser.search(username)

      if(user.login === undefined){
        throw new Error('Usuário não encontrado!')
      }

      this.users = [...this.users, user]
      this.update()
      this.save()
    } catch(error) {
      alert(error.message)
    }
  }

  save(){
    localStorage.setItem('@github-favorites:', JSON.stringify(this.users))
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.update()
    this.load()
    this.onadd()
  }

  onadd() {
    const addButton = document.querySelector('.search button')
    addButton.onclick = () => {
      const {value} = this.root.querySelector('.search input')

      this.add(value)
    }
  }

  update() {
    this.removeAllTr()

    this.users.forEach((user) => {
      const row = this.createRow()

      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.name}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user a').href = `https://github.com/${user.login}`
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

      row.querySelector('.remove').onclick = () => {
        const isOk = confirm('Tem certeza que deseja deletar este github?')
        if (isOk) {
          this.delete(user)
        }
      }
      this.tbody.append(row)
    })


  }

  createRow() {
    const tr = document.createElement('tr')
    tr.innerHTML = `
          <td class="user">
            <img src="https://github.com/manoelvieira0.png" alt="Imagem de Diego Fernandes">
            <a href="https://github.com/manoelvieira0" target="blank">
              <p>Manoel Vieira</p>
              <span>manoelvieira0</span>
            </a>
          </td>
          <td class="repositories">
            23
          </td>
          <td class="followers">
            14
          </td>
          <td>
            <button class="remove">Remover</button>
          </td>
    `
    return tr
  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr').forEach(tr => {
      tr.remove()
    });
  }
}