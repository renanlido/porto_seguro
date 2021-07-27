import Image from 'next/image';

import styles from './styles.module.scss';

import logoNorteASul from '../../assets/logoNorteASul.png';
import logoPortoSeguro from '../../assets/logoPortoSeguro.png';

import { WideNav } from './WideNav';
import { MobileNav } from './MobileNav';
import { useBrakPointValue } from '../../contexts/BreakPointContext';

import { MaxWidthCentralizedDiv } from '../Utils/MaxWidithCetralizedDiv';

export function Menu() {
  const { isWide } = useBrakPointValue();

  return (
    <div className={styles.container}>
      <MaxWidthCentralizedDiv>
        <div className={styles.content}>
          <div className={styles.images}>
            <div id="d1">
              <Image
                src={logoNorteASul}
                alt="Norte a sul"
                width={`${isWide ? 60 : 42}`}
                height={`${isWide ? 43 : 30}`}
              />
            </div>
            <div>
              <Image
                src={logoPortoSeguro}
                alt="Porto Seguro"
                width={`${isWide ? 98 : 73}`}
                height={`${isWide ? 31 : 23}`}
              />
            </div>
          </div>

          <MobileNav />

          <WideNav />
        </div>
      </MaxWidthCentralizedDiv>
    </div>
  );
}
