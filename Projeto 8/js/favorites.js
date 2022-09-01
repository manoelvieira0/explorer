export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)

    this.tbody = this.root.querySelector('table tbody')

    this.load()
  }

  load(){
    this.entries = [
      {
        login: 'diego3g',
        name: "Diego Fernandes",
        public_repos: '48',
        followers: 22503,
      },
      {
        login: 'manoelvieira0',
        name: "Manoel Vieira",
        public_repos: '23',
        followers: 14,
      }
    ]
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.update()
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