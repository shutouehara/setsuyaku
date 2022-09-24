import type { ReactNode } from 'react';
import Link from 'next/link';
import styles from '../styles/SubPageLayout.module.css';

export default function SubLayout({ children }: { children?: ReactNode}) {
  return (
    <main className={`mx-auto px-2 ${styles.main}`}>
      {children}
    </main>
  )
}