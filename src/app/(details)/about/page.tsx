import Section from '@/components/templates/Section'
import { ColorEnum } from '@/types'

import styles from './page.module.scss'

const About = () => {
    return (
        <div className={styles['container']}>
            <Section title="Story" button={false} color={ColorEnum.Secondary}>
                <div className={styles['content']}>
                    <div className={styles['content-part']}>画像</div>
                    <div className={styles['content-part']}>文章</div>
                </div>
            </Section>
        </div>
    )
}

export default About
