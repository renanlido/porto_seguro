import { useDrop } from '../../../contexts/DropContext';
import styles from './styles.module.scss';

// MENU HORIZONTAL BARS
export function MobileNav() {
  const { onOpen } = useDrop();

  return (
    <button
      type="button"
      className={styles.mobile_nav}
      onClick={() => onOpen('menu')}
    >
      <div id="b1" />
      <div id="b2" />
      <div id="b3" />
    </button>
  );
}
