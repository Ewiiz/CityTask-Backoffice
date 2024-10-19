/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
router.on('/').redirect('home-page')
router.on('/test').renderInertia('home').as('home-page')

router.on('/etat-civil/dashboard').renderInertia('etat-civil/dashboard')
router.on('/etat-civil/naissance').renderInertia('etat-civil/naissance')
router.on('/etat-civil/mariage').renderInertia('etat-civil/mariage')
router.on('/etat-civil/vie').renderInertia('etat-civil/vie')
router.on('/etat-civil/deces').renderInertia('etat-civil/deces')
