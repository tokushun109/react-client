import classNames from 'classnames'
import { useRouter } from 'next/router'

import styles from './styles.module.scss'

export interface Breadcrumb {
    label: string
    link?: string
}

type Props = {
    breadcrumbs: Breadcrumb[]
}

export const Breadcrumbs = ({ breadcrumbs }: Props) => {
    const router = useRouter()

    const onClickLabel = (breadcrumb: Breadcrumb) => {
        if (breadcrumb.link === undefined) return

        router.push(breadcrumb.link)
    }

    return (
        <div className={styles['container']}>
            {breadcrumbs.map((v, index) => (
                <div className={classNames(styles['breadcrumb'], styles[breadcrumbs.length - 1 === index ? 'current-page' : ''])} key={index}>
                    <span className={styles['breadcrumb__label']} onClick={() => onClickLabel(v)}>
                        {v.label}
                    </span>
                    <small className={styles['breadcrumb__indicator']}>&gt;</small>
                </div>
            ))}
        </div>
    )
}
