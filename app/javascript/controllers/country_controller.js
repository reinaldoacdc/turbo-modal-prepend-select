import { Controller } from "@hotwired/stimulus"
import { FetchRequest } from '@rails/request.js'
// Connects to data-controller="country"
export default class extends Controller {
  connect() { console.log('hello from country controller', this.data.get("myValue")) }
  async change(event) {
    const endpoint = event.target.getAttribute('data-endpoint-value')
    const request = new FetchRequest('get', `/${endpoint}.json`)
    const response = await request.perform()
    if (response.ok) {
      const tt = event.target
      tt.innerHTML = ''
      const json = await response.json
      json.forEach(el => {
        event.target.add(new Option(el.name, el.id))
      })

    }
  }
}
