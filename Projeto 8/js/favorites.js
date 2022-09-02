export class GitHubUser {
  static search(username) {
    const endpoint = `https://api.github.com/users/${username}`

    return fetch(endpoint)
      .then(data => data.json())
      .then(data => ({
        login: data.login,
        dame: data.name,
        public_repos: data.public_repos,
        followers: data.followers
      }))
  }
}

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)

    this.tbody = this.root.querySelector('table tbody')

    this.load()
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
  }

  async add(username) {
    try {
      const user = await GitHubUser.search(username)
      
      if(user.login === undefined){
        throw new Error('Usuário não encontrado!')
      }

      this.entries = [...this.entries, user]
      this.update()
      this.save()

    } catch(error){
      alert(error.message)
    }
  }

  delete(user) {
    const filteredEntries = this.entries.filter((entry) =>
      entry.login !== user.login)

    this.entries = filteredEntries
    this.update()
    this.save()
  }

  save(){
    localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.update()
    this.onAdd()
  }

  onAdd() {
    const addButton = document.querySelector('.search button')
    addButton.onclick = () => {
      const { value } = this.root.querySelector('.search input')
      this.add(value)
    }
  }

  update() {
    this.removeAllTr()

    this.entries.forEach((user) => {
      const row = this.createRow()

      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.name}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

      row.querySelector('.remove').onclick = () => {
        const isOk = confirm('Tem certeza que deseja deletar este GitHub?')
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
            <img src="https://github.com/diego3g.png" alt="Imagem de Diego Fernandes">
            <a href="https://github.com/diego3g" target="blank">
              <p>Diego Fernandes</p>
              <span>diego3g</span>
            </a>
          </td>
          <td class="repositories">
            48
          </td>
          <td class="followers">
            22503
          </td>
          <td>
            <button class="remove">&times;</button>
          </td>
    `
    return tr
  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr').forEach((tr) => {
      tr.remove()
    })
  }
}