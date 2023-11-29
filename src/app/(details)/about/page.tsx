import classNames from 'classnames'
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
                        <div className={styles['image']}>
                            <Image src="/image/about/story.jpg" fill alt="story" sizes="100%" style={{ objectFit: 'cover', borderRadius: 24 }} />
                        </div>
                    </div>
                    <div className={styles['column']}>
                        <div className={styles['message']}>
                            <div className={styles['message__wrapper']}>
                                <p>とこりりはハンドメイドのマクラメ編み</p>
                                <p style={{ marginBottom: 20 }}>アクセサリーを制作・販売しているお店です。</p>
                                <p>仕事や出産、育児、家事...</p>
                                <p>慌ただしい毎日の中で</p>
                                <p>頑張る女性の味方になりたい、</p>
                                <p style={{ marginBottom: 20 }}>そんな想いでとこりりは生まれました。</p>
                                <p>とこりりのモノづくりの根底には</p>
                                <p>「人の役に立ちたい」</p>
                                <p>「私の作品で元気づけたい」</p>
                                <p>という思いがあり、</p>
                                <p>制作活動の原動力となっています。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            <Section title="Concept" button={false} color={ColorEnum.Secondary}>
                <div className={styles['content']}>
                    <div className={styles['column']}>
                        <div className={styles['column__wrapper']}>
                            <div className={classNames(styles['image'], styles['small'])}>
                                <Image
                                    src="/image/about/concept1.jpg"
                                    fill
                                    alt="story"
                                    sizes="100%"
                                    style={{ objectFit: 'cover', borderRadius: 24 }}
                                />
                            </div>
                            <div className={styles['sub-title']}>マクラメ編みの繊細さ</div>
                            <div className={styles['message']}>
                                <div className={styles['message__wrapper']}>
                                    <p>マクラメ編みとは</p>
                                    <p>手で紐を「結ぶ」 という工程を繰り返し</p>
                                    <p style={{ marginBottom: 20 }}>模様を生み出す技法のこと。</p>
                                    <p>同じデザインで編んでも使用する糸によって</p>
                                    <p style={{ marginBottom: 20 }}>仕上がりの印象が大きく変化するマクラメ。</p>
                                    <p>作品に合わせて材質・艶感・質感・太さなど</p>
                                    <p style={{ marginBottom: 20 }}>を選定しています。</p>
                                    <p>ハンドメイドだからこそ生み出せる繊細な模様を</p>
                                    <p>ぜひお楽しみください♪</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['column']}>
                        <div className={styles['column__wrapper']}>
                            <div className={classNames(styles['image'], styles['small'])}>
                                <Image
                                    src="/image/about/concept2.jpg"
                                    fill
                                    alt="story"
                                    sizes="100%"
                                    style={{ objectFit: 'cover', borderRadius: 24 }}
                                />
                            </div>
                            <div className={styles['sub-title']}>オシャレなだけじゃない+α</div>
                            <div className={styles['message']}>
                                <div className={styles['message__wrapper']}>
                                    <p>「日常の小さな悩みを解決する」</p>
                                    <p style={{ marginBottom: 20 }}>「目に留まるたび励まされる」</p>
                                    <p>そんなモノづくりを大切にしています。</p>
                                    <p>アロマを楽しむアイテムや、</p>
                                    <p>静電気対策に役立つアイテム、</p>
                                    <p style={{ marginBottom: 20 }}>大事な人と分かち合うお揃いアイテムなど</p>
                                    <p>「オシャレなだけじゃない！」</p>
                                    <p style={{ marginBottom: 20 }}>「あったら、ちょっと嬉しい♪」</p>
                                    <p>アクセサリーを制作しています。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default About
