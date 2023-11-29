import Image from 'next/image'

import Section from '@/components/templates/Section'
import { ColorEnum } from '@/types'

import styles from './page.module.scss'

const About = () => {
    return (
        <div className={styles['container']}>
            <Section title="Story" button={false} color={ColorEnum.Secondary}>
                <div className={styles['content']}>
                    <div className={styles['column']}>
                        <div className={styles['image-wrapper']}>
                            <Image src="/image/about/story.jpg" fill alt="story" sizes="100%" style={{ objectFit: 'cover', borderRadius: 24 }} />
                        </div>
                    </div>
                    <div className={styles['column']}>文章</div>
                </div>
            </Section>
        </div>
    )
}

export default About
