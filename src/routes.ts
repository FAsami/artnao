type RoutePaths = string[]

interface Routes {
  AUTH: RoutePaths
  USER: RoutePaths
  ADMIN: RoutePaths
}

const routes: Routes = {
  AUTH: ['/auth/login', '/auth/registration', '/auth/error'],
  USER: ['/dashboard/user/*'],
  ADMIN: ['/dashboard/admin/*']
}

export { routes }
