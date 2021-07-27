// import { Header } from '../components/Header';
import { Menu } from '../components/Menu';

import styles from './styles.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Menu />
      {/* <Header /> */}
    </div>
  );
}
