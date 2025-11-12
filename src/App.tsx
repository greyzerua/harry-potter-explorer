import { BackToTop } from './components/back-to-top'
import { Sidebar } from './components/sidebar'
import { AppRoutes } from './routes'
import styles from './App.module.css'

const App = () => (
  <div className={styles.layout}>
    <Sidebar className={styles.sidebar} />
    <main className={styles.content}>
      <AppRoutes />
      <BackToTop />
    </main>
  </div>
);

export default App;
