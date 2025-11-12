import clsx from 'clsx'

import { AppLink } from '../app-link'
import { EAppPage } from '../../constants/link-urls'

import styles from './sidebar.module.css'

type Props = {
    className?: string;
};

const Sidebar = ({ className }: Props) => (
    <aside className={clsx(styles.sidebar, className)}>
        <nav className={styles.nav}>
            <AppLink page={EAppPage.CHARACTERS} className={styles.link}>
                Characters
            </AppLink>
            <AppLink page={EAppPage.SPELLS} className={styles.link}>
                Spells
            </AppLink>
        </nav>
    </aside>
);

export { Sidebar };


