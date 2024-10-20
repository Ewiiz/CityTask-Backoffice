/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const EtatCivilsController = () => import('#controllers/etat_civils_controller')
router.on('/').redirect('home-page')
router.on('/test').renderInertia('home').as('home-page')

router.get('/etat-civil/:viewName', [EtatCivilsController, 'renderView'])
