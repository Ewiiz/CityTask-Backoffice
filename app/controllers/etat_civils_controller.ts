import type { HttpContext } from '@adonisjs/core/http'

export default class EtatCivilsController {
  async renderView({ params, inertia }: HttpContext) {
    const { viewName } = params

    return inertia.render(`etat-civil/${viewName}`)
  }
}
