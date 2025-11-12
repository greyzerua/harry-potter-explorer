import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import { APP_LINK_URLS, AppPage } from '../constants/link-urls'

const CharactersPage = lazy(() => import('../pages/characters').then((module) => ({ default: module.Characters })))
const SpellsPage = lazy(() => import('../pages/spells').then((module) => ({ default: module.Spells })))
const CharacterDetailsPage = lazy(() =>
  import('../pages/character-details').then((module) => ({ default: module.CharacterDetails })),
)

const AppRoutes = () => (
  <Suspense fallback={<div aria-busy="true" />}>
    <Routes>
      <Route path={APP_LINK_URLS[AppPage.ROOT]} element={<CharactersPage />} />
      <Route path={APP_LINK_URLS[AppPage.SPELLS]} element={<SpellsPage />} />
      <Route path={APP_LINK_URLS[AppPage.CHARACTERS]} element={<CharactersPage />} />
      <Route path={`${APP_LINK_URLS[AppPage.CHARACTERS]}/:id`} element={<CharacterDetailsPage />} />
    </Routes>
  </Suspense>
)

export { AppRoutes }


